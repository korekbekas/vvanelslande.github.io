const url = new URL(location.href)
if (url.searchParams.has('code')) {
  fetch(
    'https://vvctre-plugin-maker-server.falt.cf/oauth/github/get-access-token',
    {
      headers: {
        'Content-Type': 'text/plain'
      },
      body: url.searchParams.get('code'),
      method: 'POST'
    }
  )
    .then(r => r.text())
    .then(token => {
      location.href = `/vvctre/plugin-maker/code-and-builds-user-github-account/?token=${token}`
    })
} else if (!url.searchParams.has('token')) {
  location.href =
    'https://github.com/login/oauth/authorize?client_id=1df52b4366a6b5d52011&scope=public_repo,workflow'
}

let makingPlugin = false
const type = document.querySelector('#type')

const custom_default_settings_lines = document.querySelector(
  '#custom_default_settings_lines'
)

document.querySelector('#makePlugin').addEventListener('click', async () => {
  if (makingPlugin) {
    return
  }

  document.body.style.cursor = 'wait'
  makingPlugin = true

  let code = ''

  if (type.options[type.selectedIndex].value === 'custom_default_settings') {
    const names = []
    const types = []
    const calls = []
    const regexes = getCdsRegexes(names, types, calls)

    const validLines = custom_default_settings_lines.value
      .split('\n')
      .filter(line => regexes.some(regex => regex.regex.test(line)))

    if (validLines.length === 0) {
      alert('All the lines are invalid or the lines input is empty')
      document.body.style.cursor = 'default'
      makingPlugin = false
      return
    }

    const validLinesJoined = validLines.join('\n')

    custom_default_settings_lines.value = validLinesJoined

    for (const regex of regexes) {
      if (regex.regex.test(validLinesJoined)) {
        const match = validLinesJoined.match(regex.regex)
        regex.call(match)
      }
    }

    code = `// Copyright 2020 Valentin Vanelslande
// Licensed under GPLv2 or any later version
// Refer to the license.txt file included.

#include "common_types.h"

#ifdef _WIN32
#define VVCTRE_PLUGIN_EXPORT __declspec(dllexport)
#else
#define VVCTRE_PLUGIN_EXPORT
#endif

${
  validLines.length === 1
    ? `static const char* required_function_name = "${names[0]}";`
    : `static const char* required_function_names[] = {\n${names
        .map(name => `    "${name}",`)
        .join('\n')}\n};`
}

${names
  .filter(Boolean)
  .map(
    (name, index) =>
      `typedef ${types[index][0]} (*${name}_t)(${types[index][1]});\nstatic ${name}_t ${name};`
  )
  .join('\n')}

VVCTRE_PLUGIN_EXPORT int GetRequiredFunctionCount() {
    return ${names.length};
}

VVCTRE_PLUGIN_EXPORT const char** GetRequiredFunctionNames() {
    return ${
      validLines.length === 1
        ? '&required_function_name'
        : 'required_function_names'
    };
}
    
VVCTRE_PLUGIN_EXPORT void PluginLoaded(void* core, void* plugin_manager, void* required_functions[]) {
${names
  .filter(Boolean)
  .map(
    (name, index) => `    ${name} = (${name}_t)required_functions[${index}];`
  )
  .join('\n')}
}

VVCTRE_PLUGIN_EXPORT void InitialSettingsOpening() {
${calls.map(call => `    ${call}`).join('\n')}
}
`

    if (code) {
      const userResponse = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: `token ${url.searchParams.get('token')}`
        }
      })

      const userJson = await userResponse.json()

      await fetch(
        'https://api.github.com/repos/vvanelslande/vvctre-plugin-template-for-plugin-maker-and-server/generate',
        {
          headers: {
            Accept: 'application/vnd.github.baptiste-preview+json',
            Authorization: `token ${url.searchParams.get('token')}`,
            'Content-Type': 'text/plain'
          },
          body: JSON.stringify({
            owner: userJson.login,
            name: document.querySelector('#repository_name').value
          }),
          method: 'POST'
        }
      )

      await new Promise(resolve => {
        setTimeout(async function f() {
          try {
            await fetch(
              `https://api.github.com/repos/${userJson.login}/${
                document.querySelector('#repository_name').value
              }`,
              {
                headers: {
                  Authorization: `token ${url.searchParams.get('token')}`
                }
              }
            )
            resolve()
          } catch {
            setTimeout(f, 10000)
          }
        }, 10000)
      })

      await fetch(
        `https://api.github.com/repos/${userJson.login}/${
          document.querySelector('#repository_name').value
        }/contents/plugin.c`,
        {
          headers: {
            Authorization: `token ${url.searchParams.get('token')}`,
            'Content-Type': 'text/plain'
          },
          body: JSON.stringify({
            content: btoa(code),
            message: 'Add code',
            branch: 'master'
          }),
          method: 'PUT'
        }
      )

      await fetch(
        `https://api.github.com/repos/${userJson.login}/${
          document.querySelector('#repository_name').value
        }/actions/workflows/build.yml/dispatches`,
        {
          headers: {
            Authorization: `token ${url.searchParams.get('token')}`,
            'Content-Type': 'text/plain'
          },
          body: JSON.stringify({
            ref: 'master',
            inputs: { code_file_name: 'plugin.c' }
          }),
          method: 'POST'
        }
      )

      setTimeout(async function f() {
        const response = await fetch(
          `https://api.github.com/repos/${userJson.login}/${
            document.querySelector('#repository_name').value
          }/releases/latest`,
          {
            headers: {
              Authorization: `token ${url.searchParams.get('token')}`
            }
          }
        )

        if (response.ok) {
          const json = await response.json()
          if (json.assets.length === 2) {
            location.href = json.html_url
          } else {
            setTimeout(f, 5000)
          }
        } else {
          setTimeout(f, 5000)
        }
      }, 60000)
    }
  }
})
