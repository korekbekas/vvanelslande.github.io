## Custom Default Settings Plugin Request

You can use:

```
Start
----------------------------------------------------------------------------------
start.file <value>
start.play_movie <value>
start.record_movie <value>
start.region <Auto-select|Japan|USA|Europe|Australia|China|Korea|Taiwan>
start.log_filter <value>
start.initial_time <System|Unix Timestamp>
start.unix_timestamp <value>
start.use_virtual_sd_card disable
start.record_frame_times enable
start.gdb_stub enable <port>

General
----------------------------------------------------------------------------------
general.cpu_jit disable
general.limit_speed disable
general.enable_custom_cpu_ticks enable
general.speed_limit <value>
general.custom_cpu_ticks <value>
general.cpu_clock_percentage <value>

Audio
----------------------------------------------------------------------------------
audio.dsp_lle enable
audio.dsp_lle_multiple_threads enable
audio.volume <value>
audio.sink <value>
audio.device <value>
audio.microphone_input_type <Disabled|Real Device|Static Noise>
audio.microphone_device <value>

Camera
----------------------------------------------------------------------------------
camera.inner_engine <blank|image>
camera.inner_parameter <value>
camera.outer_left_engine <blank|image>
camera.outer_left_parameter <value>
camera.outer_right_engine <blank|image>
camera.outer_right_parameter <value>

System
----------------------------------------------------------------------------------
system.play_coins <value>

Graphics
----------------------------------------------------------------------------------
graphics.hardware_renderer disable
graphics.hardware_shader disable
graphics.hardware_shader_accurate_multiplication enable
graphics.shader_jit disable
graphics.vsync enable
graphics.dump_textures enable
graphics.custom_textures enable
graphics.preload_custom_textures enable
graphics.linear_filtering disable
graphics.sharper_distant_objects enable
graphics.background_color <#RRGGBB>
graphics.resolution <number|Window Size>
graphics.post_processing_shader <value>
graphics.texture_filter <none|Anime4K Ultrafast|Bicubic|ScaleForce|xBRZ freescale>
graphics.3d_mode <Off|Side by Side|Anaglyph|Interlaced>
graphics.3d_factor <value>

Layout
----------------------------------------------------------------------------------
layout.layout <Default|Single Screen|Large Screen|Side by Side|Medium Screen>
layout.use_custom_layout enable
layout.swap_screens enable
layout.upright_screens enable
layout.top_left <value>
layout.top_top <value>
layout.top_right <value>
layout.top_bottom <value>
layout.bottom_left <value>
layout.bottom_top <value>
layout.bottom_right <value>
layout.bottom_bottom <value>

Multiplayer
----------------------------------------------------------------------------------
multiplayer.ip <value>
multiplayer.port <value>
multiplayer.nickname <value>

LLE Modules
----------------------------------------------------------------------------------
lle.spi enable
lle.gpio enable
lle.mp enable
lle.cdc enable
lle.http enable
lle.csnd enable
lle.ns enable
lle.nfc enable
lle.ptm enable
lle.news enable
lle.ndm enable
lle.mic enable
lle.i2c enable
lle.ir enable
lle.pdn enable
lle.nim enable
lle.hid enable
lle.gsp enable
lle.frd enable
lle.cfg enable
lle.ps enable
lle.cecd enable
lle.dsp enable
lle.cam enable
lle.mcu enable
lle.ssl enable
lle.boss enable
lle.act enable
lle.ac enable
lle.am enable
lle.err enable
lle.pxi enable
lle.nwm enable
lle.dlp enable
lle.ldr enable
lle.pm enable
lle.soc enable
lle.fs enable

Hacks
----------------------------------------------------------------------------------
hacks.priority_boost enable
```