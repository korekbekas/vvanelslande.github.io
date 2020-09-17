## Custom Default Settings Plugin Request

[Start](#start)  
[General](#general)  
[Audio](#audio)  
[Camera](#camera)  
[System](#system)  
[Graphics](#graphics)  
[Layout](#layout)  
[Multiplayer](#multiplayer)  
[LLE Modules](#lle-modules)  
[Hacks](#hacks)

### Start

#### Set File

`start.file <value>`  
Example: `start.file file.3ds`

#### Set Play Movie

`start.play_movie <value>`  
Example: `start.play_movie file.vcm`

#### Set Record Movie

`start.record_movie <value>`  
Example: `start.record_movie file.vcm`

#### Set Region

`start.region <Japan|USA|Europe|Australia|China|Korea|Taiwan>`  
Example: `start.region USA`

#### Set Log Filter

`start.log_filter <value>`  
Example: `start.log_filter *:Critical`

#### Set Initial Time to Unix Timestamp

`start.initial_time Unix Timestamp`

#### Set Unix Timestamp

`start.unix_timestamp <value>`  
Example: `start.unix_timestamp 123`

#### Disable Use Virtual SD Card

`start.use_virtual_sd_card disable`

#### Enable Record Frame Times

`start.record_frame_times enable`

#### Enable Enable GDB Stub & Set GDB Stub Port 

`start.gdb_stub enable <port>`  
Example: `start.gdb_stub enable 12345`

### General

#### Disable Use CPU JIT

`general.cpu_jit disable`

#### Disable Limit Speed

`general.limit_speed disable`

#### Enable Enable Custom CPU Ticks

`general.enable_custom_cpu_ticks enable`

#### Set Speed Limit

`general.speed_limit <value>`  
Example: `general.speed_limit 1000`

#### Set Custom CPU Ticks

`general.custom_cpu_ticks <value>`  
Example: `general.custom_cpu_ticks 21000`

#### Set CPU Clock Percentage

`general.cpu_clock_percentage <value>`  
Example: `general.cpu_clock_percentage 82`

### Audio

#### Enable Enable DSP LLE

`audio.dsp_lle enable`

#### Enable Enable DSP LLE -> Use multiple threads

`audio.dsp_lle_multiple_threads enable`

#### Disable Output -> Enable Stretching

`audio.stretching disable`

#### Set Output -> Volume

`audio.volume <value>`  
Example: `audio.volume 0.5f`

#### Set Output -> Sink

`audio.sink <cubeb|sdl2|null>`  
Example: `audio.sink null`

#### Set Output -> Device

`audio.device <value>`  
Example: `audio.device auto`

#### Set Microphone -> Source

`audio.microphone_input_type <Real Device|Static Noise>`  
Example: `audio.microphone_input_type Static Noise`

#### Set Microphone -> Device

`audio.microphone_device <value>`  
Example: `audio.microphone_device auto`

### Camera

#### Set Inner -> Engine to image

`camera.inner_engine image`

#### Set Inner -> Parameter

`camera.inner_parameter <value>`  
Example: `camera.inner_parameter inner.png`

#### Set Outer Left -> Engine to image

`camera.outer_left_engine image`

#### Set Outer Left -> Parameter

`camera.outer_left_parameter <value>`  
Example: `camera.outer_left_parameter outer_left.png`

#### Set Outer Right -> Engine to image

`camera.outer_right_engine image`

#### Set Outer Right -> Parameter

`camera.outer_right_parameter <value>`  
Example: `camera.outer_right_parameter outer_right.png`

### System

#### Set Play Coins -> Play Coins

`system.play_coins <value>`  
Example: `system.play_coins 300`

### Graphics

#### Disable Use Hardware Renderer

`graphics.hardware_renderer disable`

#### Disable Use Hardware Renderer -> Use Hardware Shader

`graphics.hardware_shader disable`

#### Enable Use Hardware Renderer -> Use Hardware Shader -> Accurate Multiplication

`graphics.hardware_shader_accurate_multiplication enable`

#### Disable Use Shader JIT

`graphics.shader_jit disable`

#### Enable Enable VSync

`graphics.vsync enable`

#### Enable Dump Textures

`graphics.dump_textures enable`

#### Enable Use Custom Textures

`graphics.custom_textures enable`

#### Enable Preload Custom Textures

`graphics.preload_custom_textures enable`

#### Disable Enable Linear Filtering

`graphics.linear_filtering disable`

#### Enable Sharper Distant Objects

`graphics.sharper_distant_objects enable`

#### Set Background Color

`graphics.background_color <#RRGGBB>`  
Example: `graphics.background_color #001122`

#### Set Resolution

`graphics.resolution <number|Window Size>`  
Example: `graphics.resolution 2`  
Example: `graphics.resolution Window Size`

#### Set Post Processing Shader

`graphics.post_processing_shader <value>`  
Example: `graphics.post_processing_shader shader`

#### Set Texture Filter

`graphics.texture_filter <Anime4K Ultrafast|Bicubic|ScaleForce|xBRZ freescale>`  
Example: `graphics.texture_filter xBRZ freescale`

#### Set 3D Mode

`graphics.3d_mode <Side by Side|Anaglyph|Interlaced>`  
Example: `graphics.3d_mode Side by Side`

#### Set 3D Factor

`graphics.3d_factor <value>`  
Example: `graphics.3d_factor 100`

### Layout

#### Set Layout

`layout.layout <Single Screen|Large Screen|Side by Side|Medium Screen>`  
Example: `layout.layout Medium Screen`

#### Enable Use Custom Layout

`layout.use_custom_layout enable`

#### Enable Swap Screens

`layout.swap_screens enable`

#### Enable Upright Screens

`layout.upright_screens enable`

#### Set Top Screen -> Left

`layout.top_left <value>`  
Example: `layout.top_left 123`

#### Set Top Screen -> Top

`layout.top_top <value>`  
Example: `layout.top_top 123`

#### Set Top Screen -> Right

`layout.top_right <value>`  
Example: `layout.top_right 123`

#### Set Top Screen -> Bottom

`layout.top_bottom <value>`  
Example: `layout.top_bottom 123`

#### Set Bottom Screen -> Left

`layout.bottom_left <value>`  
Example: `layout.bottom_left 123`

#### Set Bottom Screen -> Top

`layout.bottom_top <value>`  
Example: `layout.bottom_top 123`

#### Set Bottom Screen -> Right

`layout.bottom_right <value>`  
Example: `layout.bottom_right 123`

#### Set Bottom Screen -> Bottom

`layout.bottom_bottom <value>`  
Example: `layout.bottom_bottom 123`

### Multiplayer

#### Set IP

`multiplayer.ip <value>`  
Example: `multiplayer.ip 127.0.0.1`

#### Set Port

`multiplayer.port <value>`  
Example: `multiplayer.port 12345`

#### Set Nickname

`multiplayer.nickname <value>`  
Example: `multiplayer.nickname vvctre`

### LLE Modules

#### Enable SPI

`lle.spi enable`

#### Enable GPIO

`lle.gpio enable`

#### Enable MP

`lle.mp enable`

#### Enable CDC

`lle.cdc enable`

#### Enable HTTP

`lle.http enable`

#### Enable CSND

`lle.csnd enable`

#### Enable NS

`lle.ns enable`

#### Enable NFC

`lle.nfc enable`

#### Enable PTM

`lle.ptm enable`

#### Enable NEWS

`lle.news enable`

#### Enable NDM

`lle.ndm enable`

#### Enable MIC

`lle.mic enable`

#### Enable I2C

`lle.i2c enable`

#### Enable IR

`lle.ir enable`

#### Enable PDN

`lle.pdn enable`

#### Enable NIM

`lle.nim enable`

#### Enable HID

`lle.hid enable`

#### Enable GSP

`lle.gsp enable`

#### Enable FRD

`lle.frd enable`

#### Enable CFG

`lle.cfg enable`

#### Enable PS

`lle.ps enable`

#### Enable CECD

`lle.cecd enable`

#### Enable DSP

`lle.dsp enable`

#### Enable CAM

`lle.cam enable`

#### Enable MCU

`lle.mcu enable`

#### Enable SSL

`lle.ssl enable`

#### Enable BOSS

`lle.boss enable`

#### Enable ACT

`lle.act enable`

#### Enable AC

`lle.ac enable`

#### Enable AM

`lle.am enable`

#### Enable ERR

`lle.err enable`

#### Enable PXI

`lle.pxi enable`

#### Enable NWM

`lle.nwm enable`

#### Enable DLP

`lle.dlp enable`

#### Enable LDR

`lle.ldr enable`

#### Enable PM

`lle.pm enable`

#### Enable SOC

`lle.soc enable`

#### Enable FS

`lle.fs enable`

### Hacks

#### Disable Priority Boost

`hacks.priority_boost disable`
