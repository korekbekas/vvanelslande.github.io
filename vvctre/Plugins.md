# Plugins

## Contents
- [Things plugins can do](#free-doesnt-include-custom-default-settings-ones)
- [Plugin list](#plugin-list)
  - [Free (doesn't include custom default settings ones)](#free-doesnt-include-custom-default-settings-ones)
  - [Patreon ($5)](#patreon-5)
- [Developer information](#developer-information)
  - [Templates](#templates)
  - [Functions vvctre imports](#functions-vvctre-imports)
  - [Functions plugins import](#functions-plugins-import)
  - [Enums](#enums)
    - [Layout](#layout)
    - [MicrophoneInputType](#microphoneinputtype)
    - [NativeButton](#nativebutton)
    - [NativeAnalog](#nativeanalog)
    - [Regions](#regions)
    - [InitialClock](#initialclock)
    - [StereoRenderOption](#stereorenderoption)

## Things plugins can do
- Everything that can be done from the GUI
- Change the theme
- Set registers
- Get registers
- Add overlays
- Press the touchscreen when a button is pressed ([example](https://github.com/vvanelslande/vvctre-plugin-button2touch-example))

## Plugin list

#### Free (doesn't include custom default settings ones)
- [Auto load controls](https://github.com/vvanelslande/vvctre-plugin-auto-load-controls)
- [Shortcuts](https://github.com/vvanelslande/vvctre-plugin-shortcuts-free)
- [2DS switch](https://github.com/vvanelslande/vvctre-plugin-2ds-switch)
- [MJPEG camera](https://github.com/vvanelslande/vvctre-mjpeg-camera)
- [Quick settings](https://github.com/vvanelslande/vvctre-plugin-quick-settings)
- [Log file](https://github.com/vvanelslande/vvctre-plugin-log-file)
- [Get touch screen X and Y](https://github.com/vvanelslande/vvctre-plugin-get-touch-screen-x-y)

#### Patreon ($5)
- Themes: Light and Dear ImGui Classic. Patrons can request more themes.
- Shortcuts (can't be changed):
  - Load file: F1
  - Load amiibo: F2
  - Remove amiibo: F3
  - Restart emulation: F4
  - Install CIA: F5
  - Hold to remove speed limit: Space

## Developer information

### Templates
- [C - Window](https://github.com/vvanelslande/vvctre-c-plugin)
- [C++ - Window](https://github.com/vvanelslande/vvctre-cpp-plugin)
- [C++ - Tab](https://github.com/vvanelslande/vvctre-plugin-tab-example)
- [C++ - Button To Touch](https://github.com/vvanelslande/vvctre-plugin-button2touch-example)

### Functions vvctre imports

#### `int GetRequiredFunctionCount()`

Required  
Returns the number of functions the plugin will use

#### `const char* GetRequiredFunctionNames()`

Required  
Returns the names of the functions the plugin will use

#### `void PluginLoaded(void* core, void* plugin_manager, void* functions[])`

Required  
Sets the function pointers

#### `void InitialSettingsOpening()`

Optional  
Called before Initial Settings opens

#### `void InitialSettingsOkPressed()`

Optional  
Called after Initial Settings's OK button is pressed  
Called before loading the file if a file was dropped into `vvctre.exe` or `./vvctre <file>` was used

#### `void BeforeLoading()`

Optional  
Called before loading the file

#### `void EmulationStarting()`

Optional  
Called after loading the file

#### `void EmulatorClosing()`

Optional  
Called when the emulator is closing

#### `void FatalError()`

Optional  
Called when a fatal error happens

#### `void BeforeDrawingFPS()`

Optional  
Called every frame before drawing FPS

#### `void AddMenu()`

Optional  
Called every frame (only if the menu is open).  
The menu is added at the end.

#### `void AddTab()`

Optional  
Called every frame (only if Initial Settings is open).  
The tab is added at the end.

#### `void AfterSwapWindow()`

Optional  
Called after the end of every frame (only if Initial Settings is not open).

#### `void ScreenshotCallback(void* data)`

Optional  
Called after a screenshot is made

#### `void Log(const char* log)`

Optional  
Called when a line is added to the log

### Functions plugins import

##### `void vvctre_load_file(void* core, const char* path)`

Loads a file

##### `bool vvctre_install_cia(const char* path)`

Installs a CIA

##### `bool vvctre_load_amiibo(void* core, const char* path)`

Loads a amiibo

##### `void vvctre_remove_amiibo(void* core)`

Removes the amiibo

##### `u64 vvctre_get_program_id(void* core)`

Returns the current process's ID

##### `const char* vvctre_get_process_name(void* core)`

Returns the current process's name

##### `void vvctre_restart(void* core)`

Restarts emulation

##### `void vvctre_set_paused(void* plugin_manager, bool paused)`

Pause/unpause emulation

##### `bool vvctre_get_paused(void* plugin_manager)`

Returns whether emulation is paused

##### `bool vvctre_emulation_running(void* core)`

Returns whether emulation is running

##### `u8 vvctre_read_u8(void* core, VAddr address)`

Reads memory

##### `void vvctre_write_u8(void* core, VAddr address, u8 value)`

Writes to memory

##### `u16 vvctre_read_u16(void* core, VAddr address)`

Reads memory

##### `void vvctre_write_u16(void* core, VAddr address, u16 value)`

Writes to memory

##### `u32 vvctre_read_u32(void* core, VAddr address)`

Reads memory

##### `void vvctre_write_u32(void* core, VAddr address, u32 value)`

Writes to memory

##### `u64 vvctre_read_u64(void* core, VAddr address)`

Reads memory

##### `void vvctre_write_u64(void* core, VAddr address, u64 value)`

Writes to memory

##### `void vvctre_invalidate_cache_range(void* core, u32 address, std::size_t length)`

Invalidates CPU cache range

##### `void vvctre_set_pc(void* core, u32 addr)`

Sets PC

##### `u32 vvctre_get_pc(void* core)`

Returns PC

##### `void vvctre_set_register(void* core, int index, u32 value)`

Sets a register

##### `u32 vvctre_get_register(void* core, int index)`

Returns a register

##### `void vvctre_set_vfp_register(void* core, int index, u32 value)`

Sets a VFP register

#### `u32 vvctre_get_vfp_register(void* core, int index)`

Returns a VFP register

#### `void vvctre_set_vfp_system_register(void* core, int index, u32 value)`

Sets a VFP system register

#### `u32 vvctre_get_vfp_system_register(void* core, int index)`

Returns a VFP system register

#### `void vvctre_set_cp15_register(void* core, int index, u32 value)`

Sets a CP15 register

#### `u32 vvctre_get_cp15_register(void* core, int index)`

Returns a CP15 register

#### `void vvctre_ipc_recorder_set_enabled(void* core, bool enabled)`

Sets whether the IPC recorder is enabled

#### `bool vvctre_ipc_recorder_get_enabled(void* core)`

Returns whether the IPC recorder is enabled

#### `void vvctre_ipc_recorder_bind_callback(void* core, void (*callback)(const char* json))`

Adds a callback to the IPC recorder

#### `const char* vvctre_get_service_name_by_port_id(void* core, u32 port)`

Converts a port ID to a name and returns it

#### `int vvctre_cheat_count(void* core)`

Returns the number of cheats for the current game

#### `const char* vvctre_get_cheat(void* core, int index)`

Returns a cheat

#### `const char* vvctre_get_cheat_name(void* core, int index)`

Returns the name of a cheat

#### `const char* vvctre_get_cheat_comments(void* core, int index)`

Returns the comments of a cheat

#### `const char* vvctre_get_cheat_type(void* core, int index)`

Returns the type of a cheat

#### `const char* vvctre_get_cheat_code(void* core, int index)`

Returns the code of a cheat

#### `void vvctre_set_cheat_enabled(void* core, int index, bool enabled)`

Sets whether a cheat is enabled

#### `bool vvctre_get_cheat_enabled(void* core, int index)`

Returns whether a cheat is enabled

#### `void vvctre_add_gateway_cheat(void* core, const char* name, const char* code, const char* comments)`

Adds a Gateway cheat

#### `void vvctre_remove_cheat(void* core, int index)`

Removes a cheat

#### `void vvctre_update_gateway_cheat(void* core, int index, const char* name, const char* code, const char* comments)`

Updates a Gateway cheat

#### `void vvctre_reload_camera_images(void* core)`

Reloads the camera images

#### `void vvctre_gui_push_item_width(float item_width)`

`ImGui::PushItemWidth` wrapper

#### `void vvctre_gui_pop_item_width()`

`ImGui::PopItemWidth` wrapper

#### `void vvctre_gui_same_line()`

`ImGui::SameLine` wrapper

#### `void vvctre_gui_new_line()`

`ImGui::NewLine` wrapper

#### `void vvctre_gui_bullet()`

`ImGui::Bullet` wrapper

#### `void vvctre_gui_indent()`

`ImGui::Indent` wrapper

#### `void vvctre_gui_unindent()`

`ImGui::Unindent` wrapper

#### `void vvctre_gui_dummy(float width, float height)`

`ImGui::Dummy` wrapper

#### `void vvctre_gui_tooltip(const char* text)`

If the current item is hovered, sets the tooltip to `text`

#### `void vvctre_gui_begin_tooltip()`

`ImGui::BeginTooltip` wrapper

#### `bool vvctre_gui_is_item_hovered(int flags)`

`ImGui::IsItemHovered` wrapper

#### `bool vvctre_gui_is_item_deactivated_after_edit()`

`ImGui::IsItemDeactivatedAfterEdit` wrapper  
Added in vvctre 34.9.0

#### `void vvctre_gui_end_tooltip()`

`ImGui::EndTooltip` wrapper

#### `void vvctre_gui_text(const char* text)`

`ImGui::TextUnformatted` wrapper

#### `void vvctre_gui_text_colored(float red, float green, float blue, float alpha, const char* text)`

Adds colored text

#### `bool vvctre_gui_button(const char* label)`

`ImGui::Button` wrapper

#### `bool vvctre_gui_small_button(const char* label)`

`ImGui::SmallButton` wrapper

#### `bool vvctre_gui_color_button(const char* tooltip, float red, float green, float blue, float alpha, int flags)`

`ImGui::ColorButton` wrapper

#### `bool vvctre_gui_invisible_button(const char* id, float width, float height)`

`ImGui::InvisibleButton` wrapper

#### `bool vvctre_gui_radio_button(const char* label, bool active)`

`ImGui::RadioButton` wrapper

#### `bool vvctre_gui_checkbox(const char* label, bool* checked)`

`ImGui::Checkbox` wrapper

#### `bool vvctre_gui_begin(const char* name)`

`ImGui::Begin` wrapper

#### `bool vvctre_gui_begin_overlay(const char* name, float initial_x, float initial_y)`

Creates a overlay with the specified name and initial position

#### `bool vvctre_gui_begin_auto_resize(const char* name)`

`ImGui::Begin` wrapper

#### `void vvctre_gui_end()`

`ImGui::End` wrapper

#### `bool vvctre_gui_begin_menu(const char* label)`

`ImGui::BeginMenu` wrapper

#### `void vvctre_gui_end_menu()`

`ImGui::EndMenu` wrapper

#### `bool vvctre_gui_begin_tab(const char* label)`

`ImGui::BeginTabItem` wrapper

#### `void vvctre_gui_end_tab()`

`ImGui::EndTabItem` wrapper

#### `bool vvctre_gui_menu_item(const char* label)`

`ImGui::MenuItem` wrapper

#### `bool vvctre_gui_menu_item_with_check_mark(const char* label, bool* checked)`

`ImGui::MenuItem` wrapper

#### `bool vvctre_gui_begin_listbox(const char* label)`

`ImGui::ListBoxHeader` wrapper

#### `void vvctre_gui_end_listbox()`

`ImGui::ListBoxFooter` wrapper

#### `bool vvctre_gui_begin_combo_box(const char* label, const char* preview)`

`ImGui::BeginCombo` wrapper

#### `void vvctre_gui_end_combo_box()`

`ImGui::EndCombo` wrapper

#### `bool vvctre_gui_selectable(const char* label)`

`ImGui::Selectable` wrapper

#### `bool vvctre_gui_selectable_with_selected(const char* label, bool* selected)`

`ImGui::Selectable` wrapper

#### `bool vvctre_gui_text_input(const char* label, char* buffer, std::size_t buffer_size)`

`ImGui::InputText` wrapper

#### `bool vvctre_gui_text_input_multiline(const char* label, char* buffer, std::size_t buffer_size)`

`ImGui::InputTextMultiline` wrapper

#### `bool vvctre_gui_text_input_with_hint(const char* label, const char* hint, char* buffer, std::size_t buffer_size)`

`ImGui::InputTextWithHint` wrapper

#### `bool vvctre_gui_u8_input(const char* label, u8* value)`

`ImGui::InputScalar` wrapper

#### `bool vvctre_gui_u16_input(const char* label, u16* value)`

`ImGui::InputScalar` wrapper

#### `bool vvctre_gui_u32_input(const char* label, u32* value)`

`ImGui::InputScalar` wrapper

#### `bool vvctre_gui_u64_input(const char* label, u64* value)`

`ImGui::InputScalar` wrapper

#### `bool vvctre_gui_s8_input(const char* label, s8* value)`

`ImGui::InputScalar` wrapper

#### `bool vvctre_gui_s16_input(const char* label, s16* value)`

`ImGui::InputScalar` wrapper

#### `bool vvctre_gui_int_input(const char* label, int* value, int step, int step_fast)`

`ImGui::InputInt` wrapper

#### `bool vvctre_gui_s64_input(const char* label, s64* value)`

`ImGui::InputScalar` wrapper

#### `bool vvctre_gui_float_input(const char* label, float* value, float step, float step_fast)`

`ImGui::InputFloat` wrapper

#### `bool vvctre_gui_double_input(const char* label, double* value, double step, double step_fast)`

`ImGui::InputDouble` wrapper

#### `bool vvctre_gui_color_edit(const char* label, float* color, int flags)`

`ImGui::ColorEdit4` wrapper

#### `bool vvctre_gui_color_picker(const char* label, float* color, int flags)`

`ImGui::ColorPicker4` wrapper

#### `void vvctre_gui_progress_bar(float value, const char* overlay)`

`ImGui::ProgressBar` wrapper

#### `bool vvctre_gui_slider_u8(const char* label, u8* value, const u8 minimum, const u8 maximum, const char* format)`

`ImGui::SliderScalar` wrapper

#### `bool vvctre_gui_slider_u16(const char* label, u16* value, const u16 minimum, const u16 maximum, const char* format)`

`ImGui::SliderScalar` wrapper

#### `bool vvctre_gui_slider_u32(const char* label, u32* value, const u32 minimum, const u32 maximum, const char* format)`

`ImGui::SliderScalar` wrapper

#### `bool vvctre_gui_slider_u64(const char* label, u64* value, const u64 minimum, const u64 maximum, const char* format)`

`ImGui::SliderScalar` wrapper

#### `bool vvctre_gui_slider_s8(const char* label, s8* value, const s8 minimum, const s8 maximum, const char* format)`

`ImGui::SliderScalar` wrapper

#### `bool vvctre_gui_slider_s16(const char* label, s16* value, const s16 minimum, const s16 maximum, const char* format)`

`ImGui::SliderScalar` wrapper

#### `bool vvctre_gui_slider_s32(const char* label, s32* value, const s32 minimum, const s32 maximum, const char* format)`

`ImGui::SliderScalar` wrapper

#### `bool vvctre_gui_slider_s64(const char* label, s64* value, const s64 minimum, const s64 maximum, const char* format)`

`ImGui::SliderScalar` wrapper

#### `bool vvctre_gui_slider_float(const char* label, float* value, const float minimum, const float maximum, const char* format)`

`ImGui::SliderScalar` wrapper

#### `bool vvctre_gui_slider_double(const char* label, double* value, const double minimum, const double maximum, const char* format)`

`ImGui::SliderScalar` wrapper

#### `void vvctre_gui_set_color(int index, float r, float g, float b, float a)`

Sets a GUI color

#### `void vvctre_set_os_window_size(void* plugin_manager, int width, int height)`

`SDL_SetWindowSize` wrapper

#### `void vvctre_get_os_window_size(void* plugin_manager, int* width, int* height)`

`SDL_GetWindowSize` wrapper

#### `void vvctre_set_os_window_minimum_size(void* plugin_manager, int width, int height)`

`SDL_SetWindowMinimumSize` wrapper

#### `void vvctre_get_os_window_minimum_size(void* plugin_manager, int* width, int* height)`

`SDL_GetWindowMinimumSize` wrapper

#### `void vvctre_set_os_window_maximum_size(void* plugin_manager, int width, int height)`

`SDL_SetWindowMaximumSize` wrapper

#### `void vvctre_get_os_window_maximum_size(void* plugin_manager, int* width, int* height)`

`SDL_GetWindowMaximumSize` wrapper

#### `void vvctre_set_os_window_position(void* plugin_manager, int x, int y)`

`SDL_SetWindowPosition` wrapper

#### `void vvctre_get_os_window_position(void* plugin_manager, int* x, int* y)`

`SDL_GetWindowPosition` wrapper

#### `void vvctre_set_os_window_title(void* plugin_manager, const char* title)`

`SDL_SetWindowTitle` wrapper

#### `const char* vvctre_get_os_window_title(void* plugin_manager)`

`SDL_GetWindowTitle` wrapper

#### `void* vvctre_button_device_new(void* plugin_manager, const char* params)`

Creates a button device

#### `void vvctre_button_device_delete(void* plugin_manager, void* device)`

Deletes a button device

#### `bool vvctre_button_device_get_state(void* device)`

Returns the status of a button device

#### `void vvctre_movie_prepare_for_playback(const char* path)`

Prepares to override the clock before playing back movies

#### `void vvctre_movie_prepare_for_recording()`

Prepares to override the clock before recording movies

#### `void vvctre_movie_play(const char* path)`

Plays a movie

#### `void vvctre_movie_record(const char* path)`

Records a movie

#### `bool vvctre_movie_is_playing()`

Returns whether a movie is playing

#### `bool vvctre_movie_is_recording()`

Returns whether a movie is being recorded

#### `void vvctre_movie_stop()`

Stops playing/recording

#### `void vvctre_set_frame_advancing_enabled(void* core, bool enabled)`

Sets whether frame advancing is enabled

#### `bool vvctre_get_frame_advancing_enabled(void* core)`

Returns whether frame advancing is enabled

#### `void vvctre_advance_frame(void* core)`

Advances a frame

#### `void vvctre_set_custom_pad_state(void* core, u32 state)`

Sets the pad state

#### `void vvctre_use_real_pad_state(void* core)`

Makes vvctre use the real pad state

#### `u32 vvctre_get_pad_state(void* core)`

Returns the pad state

#### `void vvctre_set_custom_circle_pad_state(void* core, float x, float y)`

Sets the circle pad state  
Range: 0.0 - 1.0

#### `void vvctre_use_real_circle_pad_state(void* core)`

Makes vvctre use the real circle pad state

#### `void vvctre_get_circle_pad_state(void* core, float* x_out, float* y_out)`

Get the circle pad state  
Range: 0.0 - 1.0

#### `void vvctre_set_custom_circle_pad_pro_state(void* core, float x, float y, bool zl, bool zr)`

Sets the circle pad pro state  
Range: 0.0 - 1.0

#### `void vvctre_use_real_circle_pad_pro_state(void* core)`

Makes vvctre use the real circle pad pro state

#### `void vvctre_get_circle_pad_pro_state(void* core, float* x_out, float* y_out, bool* zl_out, bool* zr_out)`

Get the circle pad pro state  
Range: 0.0 - 1.0

#### `void vvctre_set_custom_touch_state(void* core, float x, float y, bool pressed)`

Sets the touch state  
Range: 0.0 - 1.0

#### `void vvctre_use_real_touch_state(void* core)`

Makes vvctre use the real touch state

#### `bool vvctre_get_touch_state(void* core, float* x_out, float* y_out)`

Get the touch state    
Range: 0.0 - 1.0  
Returns whether the touch screen is pressed

#### `void vvctre_set_custom_motion_state(void* core, float accelerometer[3], float gyroscope[3])`

Sets the motion state  
Range: 0.0 - 1.0

#### `void vvctre_use_real_motion_state(void* core)`

Makes vvctre use the real motion state

#### `void vvctre_get_motion_state(void* core, float accelerometer_out[3], float gyroscope_out[3])`

Get the motion state  
Range: 0.0 - 1.0

#### `bool vvctre_screenshot(void* plugin_manager, void* data)`

Takes a screenshot

#### `bool vvctre_screenshot_default_layout(void* plugin_manager, void* data)`

Takes a screenshot with the default layout

#### `void vvctre_settings_apply()`

Applies the settings

#### `void vvctre_settings_set_file_path(const char* value)`

Sets the file path

#### `const char* vvctre_settings_get_file_path()`

Returns the file path

#### `void vvctre_settings_set_play_movie(const char* value)`

Sets the movie file for playing

#### `const char* vvctre_settings_get_play_movie()`

Returns the movie file for playing

#### `void vvctre_settings_set_record_movie(const char* value)`

Sets the movie file for recording

#### `const char* vvctre_settings_get_record_movie()`

Returns the movie file for recording

#### `void vvctre_settings_set_region_value(int value)`

Sets the region

#### `int vvctre_settings_get_region_value()`

Returns the region

#### `void vvctre_settings_set_log_filter(const char* value)`

Sets the log filter

#### `const char* vvctre_settings_get_log_filter()`

Returns the log filter

#### `void vvctre_settings_set_initial_clock(int value)`

Sets Start -> Initial Time

#### `int vvctre_settings_get_initial_clock()`

Returns Start -> Initial Time

#### `void vvctre_settings_set_unix_timestamp(u64 value)`

Sets Start -> Initial Time's timestamp

#### `u64 vvctre_settings_get_unix_timestamp()`

Returns Start -> Initial Time's timestamp

#### `void vvctre_settings_set_use_virtual_sd(bool value)`

Sets Start -> Use Virtual SD Card

#### `bool vvctre_settings_get_use_virtual_sd()`

Returns Start -> Use Virtual SD Card

#### `void vvctre_settings_set_start_in_fullscreen_mode(bool value)`

Sets Start -> Start in Fullscreen Mode

#### `bool vvctre_settings_get_start_in_fullscreen_mode()`

Returns Start -> Start in Fullscreen Mode

#### `void vvctre_settings_set_record_frame_times(bool value)`

Sets Start -> Record Frame Times

#### `bool vvctre_settings_get_record_frame_times()`

Returns Start -> Record Frame Times

#### `void vvctre_settings_enable_gdbstub(u16 port)`

Enables the GDB stub and sets the port to `port`

#### `void vvctre_settings_disable_gdbstub()`

Disables the GDB stub

#### `bool vvctre_settings_is_gdb_stub_enabled()`

Returns whether the GDB stub is enabled

#### `u16 vvctre_settings_get_gdb_stub_port()`

Returns the GDB stub port

#### `void vvctre_settings_set_use_cpu_jit(bool value)`

Sets General -> Use CPU JIT

#### `bool vvctre_settings_get_use_cpu_jit()`

Returns General -> Use CPU JIT

#### `void vvctre_settings_set_limit_speed(bool value)`

Sets General -> Limit Speed

#### `bool vvctre_settings_get_limit_speed()`

Returns General -> Limit Speed

#### `void vvctre_settings_set_speed_limit(u16 value)`

Sets the speed limit

#### `u16 vvctre_settings_get_speed_limit()`

Returns the speed limit

#### `void vvctre_settings_set_use_custom_cpu_ticks(bool value)`

Sets whether General -> Custom CPU Ticks is enabled

#### `bool vvctre_settings_get_use_custom_cpu_ticks()`

Returns whether General -> Custom CPU Ticks is enabled

#### `void vvctre_settings_set_custom_cpu_ticks(u64 value)`

Sets General -> Custom CPU Ticks

#### `u64 vvctre_settings_get_custom_cpu_ticks()`

Returns General -> Custom CPU Ticks

#### `void vvctre_settings_set_cpu_clock_percentage(u32 value)`

Sets General -> CPU Clock Percentage

#### `u32 vvctre_settings_get_cpu_clock_percentage()`

Returns General -> CPU Clock Percentage

#### `void vvctre_settings_set_enable_dsp_lle(bool value)`

Sets Audio -> Enable DSP LLE

#### `bool vvctre_settings_get_enable_dsp_lle()`

Returns Audio -> Enable DSP LLE

#### `void vvctre_settings_set_enable_dsp_lle_multithread(bool value)`

Sets Audio -> Enable DSP LLE -> Use multiple threads

#### `bool vvctre_settings_get_enable_dsp_lle_multithread()`

Returns Audio -> Enable DSP LLE -> Use multiple threads

#### `void vvctre_settings_set_audio_volume(float value)`

Sets Audio -> Volume

#### `float vvctre_settings_get_audio_volume()`

Returns Audio -> Volume

#### `void vvctre_settings_set_audio_sink_id(const char* value)`

Sets Audio -> Sink

#### `const char* vvctre_settings_get_audio_sink_id()`

Returns Audio -> Sink

#### `void vvctre_settings_set_audio_device_id(const char* value)`

Sets Audio -> Device

#### `const char* vvctre_settings_get_audio_device_id()`

Returns Audio -> Device

#### `void vvctre_settings_set_microphone_input_type(int value)`

Sets Audio -> Microphone Input Type

#### `int vvctre_settings_get_microphone_input_type()`

Returns Audio -> Microphone Input Type

#### `void vvctre_settings_set_microphone_device(const char* value)`

Sets Audio -> Microphone Device

#### `const char* vvctre_settings_get_microphone_device()`

Returns Audio -> Microphone Device

#### `void vvctre_settings_set_camera_engine(int index, const char* value)`

Sets a camera's engine

#### `const char* vvctre_settings_get_camera_engine(int index)`

Returns a camera's engine

#### `void vvctre_settings_set_camera_parameter(int index, const char* value)`

Sets a camera's parameter

#### `const char* vvctre_settings_get_camera_parameter(int index)`

Returns a camera's parameter

#### `void vvctre_settings_set_camera_flip(int index, int value)`

Set a camera's flip

#### `int vvctre_settings_get_camera_flip(int index)`

Returns a camera's flip

#### `void vvctre_set_play_coins(u16 value)`

Sets System -> Play Coins

#### `u16 vvctre_get_play_coins()`

Returns System -> Play Coins

#### `void vvctre_settings_set_username(void* cfg, const char* value)`

Sets System -> Username

#### `void vvctre_settings_get_username(void* cfg, char* out)`

Returns System -> Username

#### `void vvctre_settings_set_birthday(void* cfg, u8 month, u8 day)`

Sets System -> Birthday

#### `void vvctre_settings_get_birthday(void* cfg, u8* month_out, u8* day_out)`

Get System -> Birthday

#### `void vvctre_settings_set_system_language(void* cfg, int value)`

Sets System -> Language

#### `int vvctre_settings_get_system_language(void* cfg)`

Returns System -> Language

#### `void vvctre_settings_set_sound_output_mode(void* cfg, int value)`

Sets System -> Sound output mode

#### `int vvctre_settings_get_sound_output_mode(void* cfg)`

Returns System -> Sound output mode

#### `void vvctre_settings_set_country(void* cfg, u8 value)`

Sets System -> Country

#### `u8 vvctre_settings_get_country(void* cfg)`

Returns System -> Country

#### `void vvctre_settings_set_console_id(void* cfg, u32 random_number, u64 console_id)`

Sets the console ID

#### `u64 vvctre_settings_get_console_id(void* cfg)`

Returns the console ID

#### `void vvctre_settings_set_console_model(void* cfg, u8 value)`

Sets the console model

#### `u8 vvctre_settings_get_console_model(void* cfg)`

Returns the console model

#### `void vvctre_settings_set_eula_version(void* cfg, u8 minor, u8 major)`

Sets the EULA version

#### `void vvctre_settings_get_eula_version(void* cfg, u8* minor, u8* major)`

Get the EULA version

#### `void vvctre_settings_write_config_savegame(void* cfg)`

Writes the config savegame

#### `void vvctre_settings_set_use_hardware_renderer(bool value)`

Sets Graphics -> Use Hardware Renderer

#### `bool vvctre_settings_get_use_hardware_renderer()`

Returns Graphics -> Use Hardware Renderer

#### `void vvctre_settings_set_use_hardware_shader(bool value)`

Sets Graphics -> use Hardware Renderer -> Use Hardware Shader

#### `bool vvctre_settings_get_use_hardware_shader()`

Returns Graphics -> use Hardware Renderer -> Use Hardware Shader

#### `void vvctre_settings_set_hardware_shader_accurate_multiplication(bool value)`

Sets Graphics -> use Hardware Renderer -> Accurate Multiplication

#### `bool vvctre_settings_get_hardware_shader_accurate_multiplication()`

Returns Graphics -> use Hardware Renderer -> Accurate Multiplication

#### `void vvctre_settings_set_use_shader_jit(bool value)`

Sets Graphics -> Use Shader JIT

#### `bool vvctre_settings_get_use_shader_jit()`

Returns Graphics -> Use Shader JIT

#### `void vvctre_settings_set_enable_vsync(bool value)`

Sets Graphics -> Enable VSync

#### `bool vvctre_settings_get_enable_vsync()`

Returns Graphics -> Enable VSync

#### `void vvctre_settings_set_dump_textures(bool value)`

Sets Graphics -> Dump Textures

#### `bool vvctre_settings_get_dump_textures()`

Returns Graphics -> Dump Textures

#### `void vvctre_settings_set_custom_textures(bool value)`

Sets Graphics -> Use Custom Textures

#### `bool vvctre_settings_get_custom_textures()`

Returns Graphics -> Use Custom Textures

#### `void vvctre_settings_set_preload_textures(bool value)`

Sets Graphics -> Preload Custom Textures

#### `bool vvctre_settings_get_preload_textures()`

Return Graphics -> Preload Custom Textures

#### `void vvctre_settings_set_enable_linear_filtering(bool value)`

Sets Graphics -> Enable Linear Filtering

#### `bool vvctre_settings_get_enable_linear_filtering()`

Returns Graphics -> Enable Linear Filtering

#### `void vvctre_settings_set_sharper_distant_objects(bool value)`

Sets Graphics -> Sharper Distant Objects

#### `bool vvctre_settings_get_sharper_distant_objects()`

Returns Graphics -> Sharper Distant Objects

#### `void vvctre_settings_set_resolution(u16 value)`

Sets Graphics -> Resolution

#### `u16 vvctre_settings_get_resolution()`

Returns Graphics -> Resolution

#### `void vvctre_settings_set_background_color_red(float value)`

Sets Graphics -> Background Color -> R  
Range: 0.0 - 1.0

#### `float vvctre_settings_get_background_color_red()`

Returns Graphics -> Background Color -> R  
Range: 0.0 - 1.0

#### `void vvctre_settings_set_background_color_green(float value)`

Sets Graphics -> Background Color -> G  
Range: 0.0 - 1.0

#### `float vvctre_settings_get_background_color_green()`

Returns Graphics -> Background Color -> G  
Range: 0.0 - 1.0

#### `void vvctre_settings_set_background_color_blue(float value)`

Sets Graphics -> Background Color -> B  
Range: 0.0 - 1.0

#### `float vvctre_settings_get_background_color_blue()`

Returns Graphics -> Background Color -> B  
Range: 0.0 - 1.0

#### `void vvctre_settings_set_post_processing_shader(const char* value)`

Sets Graphics -> Post Processing Shader

#### `const char* vvctre_settings_get_post_processing_shader()`

Returns Graphics -> Post Processing Shader

#### `void vvctre_settings_set_texture_filter(const char* value)`

Sets Graphics -> Texture Filter

#### `const char* vvctre_settings_get_texture_filter()`

Returns Graphics -> Texture Filter

#### `void vvctre_settings_set_render_3d(int value)`

Sets Graphics -> 3D -> Mode

#### `int vvctre_settings_get_render_3d()`

Return Graphics -> 3D -> Mode

#### `void vvctre_settings_set_factor_3d(u8 value)`

Set Graphics -> 3D -> %

#### `u8 vvctre_settings_get_factor_3d()`

Returns Graphics -> 3D -> %

#### `void vvctre_settings_set_button(int index, const char* params)`

Sets a button

#### `const char* vvctre_settings_get_button(int index)`

Returns a button

#### `void vvctre_settings_set_analog(int index, const char* params)`

Sets a analog

#### `const char* vvctre_settings_get_analog(int index)`

Returns a analog

#### `void vvctre_settings_set_motion_device(const char* params)`

Sets Controls -> Motion

#### `const char* vvctre_settings_get_motion_device()`

Returns Controls -> Motion

#### `void vvctre_settings_set_touch_device(const char* params)`

Sets Controls -> Touch

#### `const char* vvctre_settings_get_touch_device()`

Returns Controls -> Touch

#### `void vvctre_settings_set_cemuhookudp_address(const char* value)`

Sets Controls -> CemuhookUDP -> Address

#### `const char* vvctre_settings_get_cemuhookudp_address()`

Returns Controls -> CemuhookUDP -> Address

#### `void vvctre_settings_set_cemuhookudp_port(u16 value)`

Sets Controls -> CemuhookUDP -> Port

#### `u16 vvctre_settings_get_cemuhookudp_port()`

Returns Controls -> CemuhookUDP -> Port

#### `void vvctre_settings_set_cemuhookudp_pad_index(u8 value)`

Sets Controls -> CemuhookUDP -> Pad

#### `u8 vvctre_settings_get_cemuhookudp_pad_index()`

Returns Controls -> CemuhookUDP -> Pad

#### `void vvctre_settings_set_layout(int value)`

Sets Layout -> Layout

#### `int vvctre_settings_get_layout()`

Returns Layout -> Layout

#### `void vvctre_settings_set_swap_screens(bool value)`

Sets Layout -> Swap Screens

#### `bool vvctre_settings_get_swap_screens()`

Returns Layout -> Swap Screens

#### `void vvctre_settings_set_upright_screens(bool value)`

Sets Layout -> Upright Screens

#### `bool vvctre_settings_get_upright_screens()`

Returns Layout -> Upright Screens

#### `void vvctre_settings_set_use_custom_layout(bool value)`

Sets Layout -> Use Custom Layout

#### `bool vvctre_settings_get_use_custom_layout()`

Returns Layout -> Use Custom Layout

#### `void vvctre_settings_set_custom_layout_top_left(u16 value)`

Sets Layout -> Top Left

#### `u16 vvctre_settings_get_custom_layout_top_left()`

Returns Layout -> Top Left

#### `void vvctre_settings_set_custom_layout_top_top(u16 value)`

Sets Layout -> Top Top

#### `u16 vvctre_settings_get_custom_layout_top_top()`

Returns Layout -> Top Top

#### `void vvctre_settings_set_custom_layout_top_right(u16 value)`

Sets Layout -> Top Right

#### `u16 vvctre_settings_get_custom_layout_top_right()`

Returns Layout -> Top Right

#### `void vvctre_settings_set_custom_layout_top_bottom(u16 value)`

Sets Layout -> Top Bottom

#### `u16 vvctre_settings_get_custom_layout_top_bottom()`

Returns Layout -> Top Bottom

#### `void vvctre_settings_set_custom_layout_bottom_left(u16 value)`

Sets Layout -> Bottom Left

#### `u16 vvctre_settings_get_custom_layout_bottom_left()`

Returns Layout -> Bottom Left

#### `void vvctre_settings_set_custom_layout_bottom_top(u16 value)`

Sets Layout -> Bottom Top

#### `u16 vvctre_settings_get_custom_layout_bottom_top()`

Returns Layout -> Bottom Top

#### `void vvctre_settings_set_custom_layout_bottom_right(u16 value)`

Sets Layout -> Bottom Right

#### `u16 vvctre_settings_get_custom_layout_bottom_right()`

Returns Layout -> Bottom Right

#### `void vvctre_settings_set_custom_layout_bottom_bottom(u16 value)`

Sets Layout -> Bottom Bottom

#### `u16 vvctre_settings_get_custom_layout_bottom_bottom()`

Returns Layout -> Bottom Bottom

#### `u32 vvctre_settings_get_layout_width()`

Returns the layout's width

#### `u32 vvctre_settings_get_layout_height()`

Returns the layout's height

#### `void vvctre_settings_set_use_lle_module(const char* name, bool value)`

Sets whether that module is LLE

#### `bool vvctre_settings_get_use_lle_module(const char* name)`

Returns whether that module is LLE

#### `void* vvctre_get_cfg_module(void* core, void* plugin_manager)`

Return the CFG module

#### `void vvctre_settings_set_enable_priority_boost(bool value)`

Sets Hacks -> Priority Boost

#### `bool vvctre_settings_get_enable_priority_boost()`

Returns Hacks -> Priority Boost

#### `void vvctre_settings_set_multiplayer_ip(const char* value)`

Sets Multiplayer -> IP

#### `const char* vvctre_settings_get_multiplayer_ip()`

Returns Multiplayer -> IP

#### `void vvctre_settings_set_multiplayer_port(u16 value)`

Sets Multiplayer -> Port

#### `u16 vvctre_settings_get_multiplayer_port()`

Returns Multiplayer -> Port

#### `void vvctre_settings_set_nickname(const char* value)`

Sets Multiplayer -> Nickname

#### `const char* vvctre_settings_get_nickname()`

Returns Multiplayer -> Nickname

#### `void vvctre_settings_set_multiplayer_password(const char* value)`

Sets Multiplayer -> Password

#### `const char* vvctre_settings_get_multiplayer_password()`

Returns Multiplayer -> Password

#### `void vvctre_multiplayer_join(void* core)`

Joins the room

#### `void vvctre_multiplayer_leave(void* /* core, currently unused */)`

Leaves the room

#### `u8 vvctre_multiplayer_get_state(void* /* core, currently unused */)`

Return the state

#### `void vvctre_multiplayer_send_message(void* /* core, currently unused */, const char* message)`

Sends a message

#### `void vvctre_multiplayer_set_game(void* /* core, currently unused */, const char* name, u64 id)`

Sets the game

#### `u8 vvctre_multiplayer_get_member_count(void* /* core, currently unused */)`

Returns the member count

#### `const char* vvctre_multiplayer_get_member_nickname(void* /* core, currently unused */, std::size_t index)`

Returns a member's nickname

#### `u64 vvctre_multiplayer_get_member_game_id(void* /* core, currently unused */, std::size_t index)`

Returns a member's game ID

#### `const char* vvctre_multiplayer_get_member_game_name(void* /* core, currently unused */, std::size_t index)`

Returns a member's game name

#### `const char* vvctre_multiplayer_get_room_name(void* /* core, currently unused */)`

Returns the room's name

#### `const char* vvctre_multiplayer_get_room_description(void* /* core, currently unused */)`

Returns the room's description

#### `u8 vvctre_multiplayer_get_room_member_slots(void* /* core, currently unused */)`

Returns the room's member slots

#### `void vvctre_multiplayer_on_chat_message(void* /* core, currently unused */, void(*callback)(const char* nickname, const char* message))`

Adds a chat message callback

#### `void vvctre_multiplayer_on_status_message(void* /* core, currently unused */, void(*callback)(u8 type, const char* nickname))`

Adds a status message callback

#### `void vvctre_multiplayer_on_error(void* /* core, currently unused */, void(*callback)(u8 error))`

Adds a error callback

#### `void vvctre_multiplayer_on_information_change(void* /* core, currently unused */, void(*callback)())`

Adds a information change callback

#### `void vvctre_multiplayer_on_state_change(void* /* core, currently unused */, void(*callback)())`

Adds a state change callback

#### `const char* vvctre_get_version()`

Returns vvctre's version

#### `u8 vvctre_get_version_major()`

Returns vvctre's major version

#### `u8 vvctre_get_version_minor()`

Returns vvctre's minor version

#### `u8 vvctre_get_version_patch()`

Returns vvctre's patch version

#### `void vvctre_log_trace(const char* line)`

Logs `line` (Trace level)

#### `void vvctre_log_debug(const char* line)`

Logs `line` (Debug level)

#### `void vvctre_log_info(const char* line)`

Logs `line` (Info level)

#### `void vvctre_log_warning(const char* line)`

Logs `line` (Warning level)

#### `void vvctre_log_error(const char* line)`

Logs `line` (Error level)

#### `void vvctre_log_critical(const char* line)`

Logs `line` (Critical level)

### Enums

[Countries](https://www.3dbrew.org/wiki/Country_Code_List)  
[Models](https://www.3dbrew.org/wiki/Cfg:GetSystemModel)  
[Languages](https://www.3dbrew.org/wiki/Config_Savegame#Languages)

#### Layout

| Value | Description  |
|-------|--------------|
| 0     | Default      |
| 1     | SingleScreen |
| 2     | LargeScreen  |
| 3     | SideScreen   |
| 4     | MediumScreen |

#### MicrophoneInputType

| Value | Description |
|-------|-------------|
| 0     | None        |
| 1     | Real        |
| 2     | Static      |

#### NativeButton

| Value | Description |
|-------|-------------|
| 0     | A           |
| 1     | B           |
| 2     | X           |
| 3     | Y           |
| 4     | Up          |
| 5     | Down        |
| 6     | Left        |
| 7     | Right       |
| 8     | L           |
| 9     | R           |
| 10    | Start       |
| 11    | Select      |
| 12    | Debug       |
| 13    | Gpio14      |
| 15    | ZL          |
| 16    | ZR          |
| 17    | Home        |

#### NativeAnalog

| Value | Description  |
|-------|--------------|
| 0     | CirclePad    |
| 1     | CirclePadPro |

#### Regions

| Value | Description |
|-------|-------------|
| -1    | Auto-select |
| 0     | JPN         |
| 1     | USA         |
| 2     | EUR         |
| 3     | AUS         |
| 4     | CHN         |
| 5     | KOR         |
| 6     | TWN         |

#### InitialClock

| Value | Description |
|-------|-------------|
| 0     | SystemTime  |
| 1     | FixedTime   |

#### StereoRenderOption

| Value | Description |
|-------|-------------|
| 0     | Off         |
| 1     | SideBySide  |
| 2     | Anaglyph    |
| 3     | Interlaced  |