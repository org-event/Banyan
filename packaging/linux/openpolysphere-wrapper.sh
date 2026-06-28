#!/bin/sh
# Debian/RPM launcher — sets paths for FHS install under /usr.
set -e
ROOT=/usr/lib/openpolysphere
SHARE=/usr/share/openpolysphere
DATA="${XDG_DATA_HOME:-$HOME/.local/share}/OpenPolySphere"

export CALL_TRANSLATOR_HOME="$SHARE"
export TRANSLATOR_DATA_DIR="$DATA"
export ORT_DYLIB_PATH="$ROOT/lib/libonnxruntime.so"
export LD_LIBRARY_PATH="$ROOT/lib${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"

exec "$ROOT/bin/translator" "$@"
