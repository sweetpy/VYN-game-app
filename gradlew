#!/usr/bin/env sh

set -euo pipefail

DIR="$(dirname "$0")"
GRADLE_WRAPPER_JAR="$DIR/gradle/wrapper/gradle-wrapper.jar"

if [ ! -f "$GRADLE_WRAPPER_JAR" ]; then
  echo "Gradle wrapper JAR not found. Please download the wrapper from Gradle distribution." >&2
  exit 1
fi

exec "$(dirname "$0")/gradle/wrapper/gradle-wrapper" "$@"
