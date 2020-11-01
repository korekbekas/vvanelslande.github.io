// Copyright 2020 Valentin Vanelslande
// Licensed under GPLv2 or any later version
// Refer to the license.txt file included.

const url = new URL(location.href)
let token = ''

if (url.searchParams.has('code')) {
  fetch(
    'https://vvctre-plugin-maker-oauth-server.falt.cf/oauth/github/get-access-token',
    {
      headers: {
        'Content-Type': 'text/plain'
      },
      body: url.searchParams.get('code'),
      method: 'POST'
    }
  )
    .then(r => r.text())
    .then(token_ => {
      token = token_
    })
} else {
  location.href =
    'https://github.com/login/oauth/authorize?client_id=1df52b4366a6b5d52011&scope=public_repo,workflow'
}

let makingPlugin = false
const type = document.querySelector('#type')

const custom_default_settings_lines = document.querySelector(
  '#custom_default_settings_lines'
)

type.addEventListener('change', () => {
  switch (type.options[type.selectedIndex].value) {
    case 'custom_default_settings': {
      document.querySelector('#custom_default_settings_div').style.display =
        'block'
      document.querySelector('#button_to_touch_div').style.display = 'none'
      document.querySelector('#window_size_div').style.display = 'none'
      document.querySelector('#window_position_div').style.display = 'none'
      document.querySelector('#log_file_div').style.display = 'none'
      break
    }
    case 'button_to_touch': {
      document.querySelector('#custom_default_settings_div').style.display =
        'none'
      document.querySelector('#button_to_touch_div').style.display = 'block'
      document.querySelector('#window_size_div').style.display = 'none'
      document.querySelector('#window_position_div').style.display = 'none'
      document.querySelector('#log_file_div').style.display = 'none'
      break
    }
    case 'window_size': {
      document.querySelector('#custom_default_settings_div').style.display =
        'none'
      document.querySelector('#button_to_touch_div').style.display = 'none'
      document.querySelector('#window_size_div').style.display = 'block'
      document.querySelector('#window_position_div').style.display = 'none'
      document.querySelector('#log_file_div').style.display = 'none'
      break
    }
    case 'window_position': {
      document.querySelector('#custom_default_settings_div').style.display =
        'none'
      document.querySelector('#button_to_touch_div').style.display = 'none'
      document.querySelector('#window_size_div').style.display = 'none'
      document.querySelector('#window_position_div').style.display = 'block'
      document.querySelector('#log_file_div').style.display = 'none'
      break
    }
    case 'log_file': {
      document.querySelector('#custom_default_settings_div').style.display =
        'none'
      document.querySelector('#button_to_touch_div').style.display = 'none'
      document.querySelector('#window_size_div').style.display = 'none'
      document.querySelector('#window_position_div').style.display = 'none'
      document.querySelector('#log_file_div').style.display = 'block'
      break
    }
    default: {
      break
    }
  }
})

document.querySelector('#makePlugin').addEventListener('click', async () => {
  if (makingPlugin) {
    return
  }

  document.body.style.cursor = 'wait'
  makingPlugin = true

  let code = ''
  let cpp = false

  switch (type.options[type.selectedIndex].value) {
    case 'custom_default_settings': {
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

      break
    }
    case 'button_to_touch': {
      code = `// Copyright 2020 Valentin Vanelslande
// Licensed under GPLv2 or any later version
// Refer to the license.txt file included.

#include <stdbool.h>
#include <stddef.h>

static const char* required_function_names[] = {
    "vvctre_button_device_new",
    "vvctre_button_device_get_state",
    "vvctre_set_custom_touch_state",
    "vvctre_use_real_touch_state",
};

typedef void* (*vvctre_button_device_new_t)(void* plugin_manager, const char* params);
typedef bool* (*vvctre_button_device_get_state_t)(void* device);
typedef void (*vvctre_set_custom_touch_state_t)(void* core, float x, float y, bool pressed);
typedef void (*vvctre_use_real_touch_state_t)(void* core);

static vvctre_button_device_new_t vvctre_button_device_new;
static vvctre_button_device_get_state_t vvctre_button_device_get_state;
static vvctre_set_custom_touch_state_t vvctre_set_custom_touch_state;
static vvctre_use_real_touch_state_t vvctre_use_real_touch_state;

static void* g_core = NULL;
static void* g_device = NULL;

#ifdef _WIN32
#define VVCTRE_PLUGIN_EXPORT __declspec(dllexport)
#else
#define VVCTRE_PLUGIN_EXPORT
#endif

VVCTRE_PLUGIN_EXPORT int GetRequiredFunctionCount() {
    return 4;
}

VVCTRE_PLUGIN_EXPORT const char** GetRequiredFunctionNames() {
    return required_function_names;
}

VVCTRE_PLUGIN_EXPORT void PluginLoaded(void* core, void* plugin_manager,
                                       void* required_functions[]) {
    vvctre_button_device_new = (vvctre_button_device_new_t)required_functions[0];
    vvctre_button_device_get_state = (vvctre_button_device_get_state_t)required_functions[1];
    vvctre_set_custom_touch_state = (vvctre_set_custom_touch_state_t)required_functions[2];
    vvctre_use_real_touch_state = (vvctre_use_real_touch_state_t)required_functions[3];

    g_core = core;
    g_device = vvctre_button_device_new(plugin_manager, "${
      document.querySelector('#button_to_touch_params').value
    }");
}

VVCTRE_PLUGIN_EXPORT void AfterSwapWindow() {
    static bool was_pressed = false;
    const bool pressed = vvctre_button_device_get_state(g_device);

    if (was_pressed && !pressed) {
        vvctre_use_real_touch_state(g_core);
        was_pressed = false;
    } else if (!was_pressed && pressed) {
        vvctre_set_custom_touch_state(g_core, ${
          Number(document.querySelector('#button_to_touch_x').value) / 319
        }, ${
        Number(document.querySelector('#button_to_touch_y').value) / 239
      }, true);
        was_pressed = true;
    }
}
`

      break
    }
    case 'window_size': {
      const width = document.querySelector('#window_size_width').value
      const height = document.querySelector('#window_size_height').value

      code = `// Copyright 2020 Valentin Vanelslande
// Licensed under GPLv2 or any later version
// Refer to the license.txt file included.

#include <stddef.h>

static const char* required_function_name = "vvctre_set_os_window_size";

typedef void (*vvctre_set_os_window_size_t)(void* plugin_manager, int width, int height);

static vvctre_set_os_window_size_t vvctre_set_os_window_size;

static void* g_plugin_manager = NULL;

#ifdef _WIN32
#define VVCTRE_PLUGIN_EXPORT __declspec(dllexport)
#else
#define VVCTRE_PLUGIN_EXPORT
#endif

VVCTRE_PLUGIN_EXPORT int GetRequiredFunctionCount() {
    return 1;
}

VVCTRE_PLUGIN_EXPORT const char** GetRequiredFunctionNames() {
    return &required_function_name;
}

VVCTRE_PLUGIN_EXPORT void PluginLoaded(void* core, void* plugin_manager,
                                       void* required_functions[]) {
    vvctre_set_os_window_size = (vvctre_set_os_window_size_t)required_functions[0];
    g_plugin_manager = plugin_manager;
}

VVCTRE_PLUGIN_EXPORT void InitialSettingsOpening() {
    vvctre_set_os_window_size(g_plugin_manager, ${width}, ${height});
}

VVCTRE_PLUGIN_EXPORT void EmulationStarting() {
    vvctre_set_os_window_size(g_plugin_manager, ${width}, ${height});
}
`

      break
    }
    case 'window_position': {
      const x = document.querySelector('#window_position_x').value
      const y = document.querySelector('#window_position_y').value

      code = `// Copyright 2020 Valentin Vanelslande
// Licensed under GPLv2 or any later version
// Refer to the license.txt file included.

#include <stddef.h>

static const char* required_function_name = "vvctre_set_os_window_position";

typedef void (*vvctre_set_os_window_position_t)(void* plugin_manager, int x, int y);

static vvctre_set_os_window_position_t vvctre_set_os_window_position;

static void* g_plugin_manager = NULL;

#ifdef _WIN32
#define VVCTRE_PLUGIN_EXPORT __declspec(dllexport)
#else
#define VVCTRE_PLUGIN_EXPORT
#endif

VVCTRE_PLUGIN_EXPORT int GetRequiredFunctionCount() {
    return 1;
}

VVCTRE_PLUGIN_EXPORT const char** GetRequiredFunctionNames() {
    return &required_function_name;
}

VVCTRE_PLUGIN_EXPORT void PluginLoaded(void* core, void* plugin_manager,
                                       void* required_functions[]) {
    vvctre_set_os_window_position = (vvctre_set_os_window_position_t)required_functions[0];
    g_plugin_manager = plugin_manager;
}

VVCTRE_PLUGIN_EXPORT void InitialSettingsOpening() {
    vvctre_set_os_window_position(g_plugin_manager, ${x}, ${y});
}

VVCTRE_PLUGIN_EXPORT void EmulationStarting() {
    vvctre_set_os_window_position(g_plugin_manager, ${x}, ${y});
}
`

      break
    }
    case 'log_file': {
      code = `// Copyright 2020 Valentin Vanelslande
// Licensed under GPLv2 or any later version
// Refer to the license.txt file included.

#include <fstream>
#include <iostream>

#ifdef _WIN32
#define VVCTRE_PLUGIN_EXPORT extern "C" __declspec(dllexport)
#else
#define VVCTRE_PLUGIN_EXPORT extern "C"
#endif

static std::ofstream file;

VVCTRE_PLUGIN_EXPORT int GetRequiredFunctionCount() {
    return 0;
}

VVCTRE_PLUGIN_EXPORT const char** GetRequiredFunctionNames() {
    return nullptr;
}

VVCTRE_PLUGIN_EXPORT void PluginLoaded(void* core, void* plugin_manager,
                                       void* required_functions[]) {
    file.open("${document
      .querySelector('#log_file_file_path')
      .value.replace(/\\/g, '\\\\')}", std::ofstream::trunc);
}

VVCTRE_PLUGIN_EXPORT void Log(const char* line) {
    file << line << std::endl;
}
`

      cpp = true

      break
    }
  }

  if (code) {
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${token}`
      }
    })

    const userJson = await userResponse.json()

    await fetch(
      'https://api.github.com/repos/vvanelslande/vvctre-plugin-template-for-plugin-maker-and-server/generate',
      {
        headers: {
          Accept: 'application/vnd.github.baptiste-preview+json',
          Authorization: `token ${token}`,
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
                Authorization: `token ${token}`
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
      }/contents/plugin.${cpp ? 'cpp' : 'c'}`,
      {
        headers: {
          Authorization: `token ${token}`,
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
          Authorization: `token ${token}`,
          'Content-Type': 'text/plain'
        },
        body: JSON.stringify({
          ref: 'master',
          inputs: { code_file_name: `plugin.${cpp ? 'cpp' : 'c'}` }
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
            Authorization: `token ${token}`
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
})
