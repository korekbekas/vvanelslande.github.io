## Custom Default Settings Plugin Request

### Set Start -> File

`start.file <value>`  
Example: `start.file file.3ds`

### Set Start -> Play Movie

`start.play_movie <value>`  
Example: `start.play_movie file.vcm`

### Set Start -> Record Movie

`start.record_movie <value>`  
Example: `start.record_movie file.vcm`

### Set Start -> Region

`start.region <Auto-select|Japan|USA|Europe|Australia|China|Korea|Taiwan>`  
Example: `start.region USA`

### Set Start -> Log Filter

`start.log_filter <value>`  
Example: `start.log_filter *:Critical`

### Set Start -> Initial Time

`start.initial_time <System|Unix Timestamp>`  
Example: `start.initial_time Unix Timestamp`

### Set Start -> Unix Timestamp

`start.unix_timestamp <value>`  
Example: `start.unix_timestamp 123`

### Disable Start -> Use Virtual SD Card

`start.use_virtual_sd_card disable`

### Enable Start -> Record Frame Times

`start.record_frame_times enable`

### Enable Start -> Enable GDB Stub & Set Start -> GDB Stub Port 

`start.gdb_stub enable <port>`  
Example: `start.gdb_stub enable 12345`

### Disable General -> Use CPU JIT

`general.cpu_jit disable`

### Disable General -> Limit Speed

`general.limit_speed disable`

### Enable General -> Enable Custom CPU Ticks

`general.enable_custom_cpu_ticks enable`

### Set General -> Speed Limit

`general.speed_limit <value>`  
Example: `general.speed_limit 1000`

### Set General -> Custom CPU Ticks

`general.custom_cpu_ticks <value>`  
Example: `general.custom_cpu_ticks 21000`

### Set General -> CPU Clock Percentage

`general.cpu_clock_percentage <value>`  
Example: `general.cpu_clock_percentage 82`

### Enable Audio -> Enable DSP LLE

`audio.dsp_lle enable`

### Enable Audio -> Enable DSP LLE -> Use multiple threads

`audio.dsp_lle_multiple_threads enable`

### Disable Audio -> Output -> Enable Stretching

`audio.stretching disable`

### Set Audio -> Output -> Volume

`audio.volume <value>`  
Example: `audio.volume 0.5f`

### Set Audio -> Output -> Sink

`audio.sink <cubeb|sdl2|null>`  
Example: `audio.sink null`

### Set Audio -> Output -> Device

`audio.device <value>`  
Example: `audio.device auto`

### Set Audio -> Microphone -> Source

`audio.microphone_input_type <Real Device|Static Noise>`  
Example: `audio.microphone_input_type Static Noise`

### Set Audio -> Microphone -> Device

`audio.microphone_device <value>`  
Example: `audio.microphone_device auto`

### Set Camera -> Inner -> Engine to image

`camera.inner_engine image`

### Set Camera -> Inner -> Parameter

`camera.inner_parameter <value>`  
Example: `camera.inner_parameter inner.png`

### Set Camera -> Outer Left -> Engine to image

`camera.outer_left_engine image`

### Set Camera -> Outer Left -> Parameter

`camera.outer_left_parameter <value>`  
Example: `camera.outer_left_parameter outer_left.png`

### Set Camera -> Outer Right -> Engine to image

`camera.outer_right_engine image`

### Set Camera -> Outer Right -> Parameter

`camera.outer_right_parameter <value>`  
Example: `camera.outer_right_parameter outer_right.png`

### Set System -> Play Coins -> Play Coins

`system.play_coins <value>`  
Example: `system.play_coins 300`

### Disable Graphics -> Use Hardware Renderer

`graphics.hardware_renderer disable`

### Disable Graphics -> Use Hardware Renderer -> Use Hardware Shader

`graphics.hardware_shader disable`

### Enable Graphics -> Use Hardware Renderer -> Use Hardware Shader -> Accurate Multiplication

`graphics.hardware_shader_accurate_multiplication enable`

### Disable Graphics -> Use Shader JIT

`graphics.shader_jit disable`

### Enable Graphics -> Enable VSync

`graphics.vsync enable`

### Enable Graphics -> Dump Textures

`graphics.dump_textures enable`

### Enable Graphics -> Use Custom Textures

`graphics.custom_textures enable`

### Enable Graphics -> Preload Custom Textures

`graphics.preload_custom_textures enable`

### Disable Graphics -> Enable Linear Filtering

`graphics.linear_filtering disable`

### Enable Graphics -> Sharper Distant Objects

`graphics.sharper_distant_objects enable`

### Set Graphics -> Background Color

`graphics.background_color <#RRGGBB>`  
Example: `graphics.background_color #001122`

### Set Graphics -> Resolution

`graphics.resolution <number|Window Size>`  
Example: `graphics.resolution 2`  
Example: `graphics.resolution Window Size`

### Set Graphics -> Post Processing Shader

`graphics.post_processing_shader <value>`  
Example: `graphics.post_processing_shader shader`

### Set Graphics -> Texture Filter

`graphics.texture_filter <none|Anime4K Ultrafast|Bicubic|ScaleForce|xBRZ freescale>`  
Example: `graphics.texture_filter xBRZ freescale`

### Set Graphics -> 3D Mode

`graphics.3d_mode <Off|Side by Side|Anaglyph|Interlaced>`  
Example: `graphics.3d_mode Side by Side`

### Set Graphics -> 3D Factor

`graphics.3d_factor <value>`  
Example: `graphics.3d_factor 100`

### Set Layout -> Layout

`layout.layout <Default|Single Screen|Large Screen|Side by Side|Medium Screen>`  
Example: `layout.layout Medium Screen`

### Enable Layout -> Use Custom Layout

`layout.use_custom_layout enable`

### Enable Layout -> Swap Screens

`layout.swap_screens enable`

### Enable Layout -> Upright Screens

`layout.upright_screens enable`

### Set Layout -> Top Screen -> Left

`layout.top_left <value>`  
Example: `layout.top_left 123`

### Set Layout -> Top Screen -> Top

`layout.top_top <value>`  
Example: `layout.top_top 123`

### Set Layout -> Top Screen -> Right

`layout.top_right <value>`  
Example: `layout.top_right 123`

### Set Layout -> Top Screen -> Bottom

`layout.top_bottom <value>`  
Example: `layout.top_bottom 123`

### Set Layout -> Bottom Screen -> Left

`layout.bottom_left <value>`  
Example: `layout.bottom_left 123`

### Set Layout -> Bottom Screen -> Top

`layout.bottom_top <value>`  
Example: `layout.bottom_top 123`

### Set Layout -> Bottom Screen -> Right

`layout.bottom_right <value>`  
Example: `layout.bottom_right 123`

### Set Layout -> Bottom Screen -> Bottom

`layout.bottom_bottom <value>`  
Example: `layout.bottom_bottom 123`

### Set Multiplayer -> IP

`multiplayer.ip <value>`  
Example: `multiplayer.ip 127.0.0.1`

### Set Multiplayer -> Port

`multiplayer.port <value>`  
Example: `multiplayer.port 12345`

### Set Multiplayer -> Nickname

`multiplayer.nickname <value>`  
Example: `multiplayer.nickname vvctre`

### Enable LLE Modules -> SPI

`lle.spi enable`

### Enable LLE Modules -> GPIO

`lle.gpio enable`

### Enable LLE Modules -> MP

`lle.mp enable`

### Enable LLE Modules -> CDC

`lle.cdc enable`

### Enable LLE Modules -> HTTP

`lle.http enable`

### Enable LLE Modules -> CSND

`lle.csnd enable`

### Enable LLE Modules -> NS

`lle.ns enable`

### Enable LLE Modules -> NFC

`lle.nfc enable`

### Enable LLE Modules -> PTM

`lle.ptm enable`

### Enable LLE Modules -> NEWS

`lle.news enable`

### Enable LLE Modules -> NDM

`lle.ndm enable`

### Enable LLE Modules -> MIC

`lle.mic enable`

### Enable LLE Modules -> I2C

`lle.i2c enable`

### Enable LLE Modules -> IR

`lle.ir enable`

### Enable LLE Modules -> PDN

`lle.pdn enable`

### Enable LLE Modules -> NIM

`lle.nim enable`

### Enable LLE Modules -> HID

`lle.hid enable`

### Enable LLE Modules -> GSP

`lle.gsp enable`

### Enable LLE Modules -> FRD

`lle.frd enable`

### Enable LLE Modules -> CFG

`lle.cfg enable`

### Enable LLE Modules -> PS

`lle.ps enable`

### Enable LLE Modules -> CECD

`lle.cecd enable`

### Enable LLE Modules -> DSP

`lle.dsp enable`

### Enable LLE Modules -> CAM

`lle.cam enable`

### Enable LLE Modules -> MCU

`lle.mcu enable`

### Enable LLE Modules -> SSL

`lle.ssl enable`

### Enable LLE Modules -> BOSS

`lle.boss enable`

### Enable LLE Modules -> ACT

`lle.act enable`

### Enable LLE Modules -> AC

`lle.ac enable`

### Enable LLE Modules -> AM

`lle.am enable`

### Enable LLE Modules -> ERR

`lle.err enable`

### Enable LLE Modules -> PXI

`lle.pxi enable`

### Enable LLE Modules -> NWM

`lle.nwm enable`

### Enable LLE Modules -> DLP

`lle.dlp enable`

### Enable LLE Modules -> LDR

`lle.ldr enable`

### Enable LLE Modules -> PM

`lle.pm enable`

### Enable LLE Modules -> SOC

`lle.soc enable`

### Enable LLE Modules -> FS

`lle.fs enable`

### Disable Hacks -> Priority Boost

`hacks.priority_boost disable`
