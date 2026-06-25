# Linux support (draft)

Target: **Ubuntu 22.04+ / Debian 12+ / Fedora 39+**. Goal for now: **CI builds on `ubuntu-latest`**, then smoke-test on a native Linux host.

## Phase 1 — CI build (planned)

- [ ] `feat/linux` branch
- [ ] GitHub Actions job: `cargo clippy`, `cargo build --release -p translator`, ESLint
- [ ] Download artifact → run `translator --help`

**CI installs (runner only):** OpenBLAS, ONNX Runtime, espeak-ng (apt).

**Artifact contains:** `translator`, `libonnxruntime.so`, `web/`, `.env.example`, `LINUX.txt` (quick start).

## Phase 2 — Make the binary runnable

- [ ] Default `ORT_DYLIB_PATH` / load `libonnxruntime.so` next to binary or from distro package
- [ ] Find `espeak-ng` on Linux (`apt` / `dnf` / `pacman`)
- [ ] Platform defaults instead of BlackHole (`cfg(target_os = "linux")` in settings/engine)
- [ ] Document virtual audio: PipeWire / PulseAudio null sinks

## Phase 3 — Full call translation

- [ ] `translator setup` on Linux (model download)
- [ ] Mic + virtual sink routing documented and tested
- [ ] Optional: `just install` hints for native Linux

## Phase 4 — Polish

- [ ] README Linux section
- [ ] Flatpak / Snap packaging (out of scope until MVP works)

## Manual smoke test (after CI artifact or local build)

1. Unzip or copy build to a folder, e.g. `~/OpenPolySphere/`
2. In a terminal in that folder:
   ```bash
   chmod +x translator
   ./translator --help
   ./translator setup    # downloads models (network, ~1GB+ disk)
   ./translator          # open http://127.0.0.1:5050 in Chrome
   ```
3. For call routing (Phase 2+), create PipeWire/PulseAudio virtual sinks — see issue #29.

## Local dev (optional)

Native build needs: Rust, CMake, OpenBLAS dev package, ONNX Runtime, espeak-ng, Bun (for ESLint).

**Local Linux CI parity (planned):**

| Command | Where | What |
|---------|-------|------|
| `just check` | **Linux host** | rustfmt + clippy + ESLint (Swift checks skipped) |
| CI `linux` job | GitHub | Skipped on docs-only PRs; rust-cache on `main`. |

See [ADR 0002](../adr/0002-ci-platform-tiers.md) for CI tiering.

See [issue #29](https://github.com/org-event/OpenPolySphere/issues/29).
