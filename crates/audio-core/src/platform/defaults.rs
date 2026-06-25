//! Platform-specific default settings (audio routing, etc.).

/// Default capture device for remote/call audio (meet input).
pub fn default_meet_input_device() -> &'static str {
    #[cfg(target_os = "macos")]
    {
        "BlackHole 16ch"
    }
    #[cfg(target_os = "linux")]
    {
        "OpenPolySphere-Meet-In.monitor"
    }
    #[cfg(all(not(target_os = "macos"), not(target_os = "linux")))]
    {
        "default"
    }
}

/// Default playback device for audio routed back into the call (meet output).
pub fn default_meet_output_device() -> &'static str {
    #[cfg(target_os = "macos")]
    {
        "BlackHole 2ch"
    }
    #[cfg(target_os = "linux")]
    {
        "OpenPolySphere-Meet-Out"
    }
    #[cfg(all(not(target_os = "macos"), not(target_os = "linux")))]
    {
        "default"
    }
}
