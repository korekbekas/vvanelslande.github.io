---
permalink: /vvctre/
---

## vvctre [![Mentioned in Awesome Software Patreons](https://awesome.re/mentioned-badge.svg)](https://github.com/uraimo/awesome-software-patreons) ![Windows 7z size](https://img.shields.io/badge/Windows%207z%20size%20(38.3.0)-3.47%20MB-brightgreen) ![Linux 7z size](https://img.shields.io/badge/Linux%207z%20size%20(38.3.0)-4.33%20MB-brightgreen) ![Plugin functions](https://img.shields.io/badge/Plugin%20functions-683-brightgreen)

[GitHub](https://github.com/vvanelslande/vvctre) &#124; [Download](https://github.com/vvanelslande/vvctre/releases) &#124; [Discord Server](https://discord.gg/hVxCyb5) &#124; [Patreon](https://www.patreon.com/vvctre)  
Pages: [Dump](Dump) &#124; [FAQ](FAQ) &#124; [Hidden Features](Hidden-Features) &#124; [Plugins](Plugins)  
Request Plugins: [Custom Default Settings](https://github.com/vvanelslande/vvctre/issues/new?assignees=&labels=Custom+Default+Settings+Plugin+Request&template=custom-default-settings-plugin-request.md&title=Custom+Default+Settings+Plugin+Request) &#124; [Button To Touch](https://github.com/vvanelslande/vvctre/issues/new?assignees=&labels=Button+To+Touch+Plugin+Request&template=button-to-touch-plugin-request.md&title=Button+To+Touch+Plugin+Request) &#124; [Window Size](https://github.com/vvanelslande/vvctre/issues/new?assignees=&labels=Window+Size+Plugin+Request&template=window-size-plugin-request.md&title=Window+Size+Plugin+Request) &#124; [Window Position](https://github.com/vvanelslande/vvctre/issues/new?assignees=&labels=Window+Position+Plugin+Request&template=window-position-plugin-request.md&title=Window+Position+Plugin+Request)

- Faster than Citra
- Doesn't have some issues Citra has
- Supports Citra rooms, post processing shaders, `nand` folder, `sdmc` folder, and `sysdata` folder
- Supports [Luma3DS mods](https://github.com/LumaTeam/Luma3DS/wiki/Optional-features) (`/` is `user/sdmc/`)
- Supports mods in the file's folder (filename.exefsdir, filename.exheader, and filename.romfs)
- Has C/C++ plugin system

Requirements 

OpenGL: 3.3+  
OS: 64-bit Windows 7+ or Linux

If you use Windows:
- [Microsoft Visual C++ 2015-2019 Redistributable (x64)](https://aka.ms/vs/16/release/vc_redist.x64.exe)
- For AAC on N and KN: [Media Feature Pack](https://support.microsoft.com/en-us/help/3145500/media-feature-pack-list-for-windows-n-editions)

If you use Linux:
- SDL2
- libpng
- For dialogs: Zenity, Matedialog, Qarma, or KDialog

If your GPU doesn't support OpenGL 3.3, you can use:
- Windows: [https://github.com/pal1000/mesa-dist-win](https://github.com/pal1000/mesa-dist-win)
- Linux: This command: `export LIBGL_ALWAYS_SOFTWARE=1`
