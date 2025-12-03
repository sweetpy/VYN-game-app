# VYN IQ Android mock app

This repository contains a Jetpack Compose Android mock app that visualizes the VYN IQ empire dashboard with dummy data. It mirrors the design brief for the Material You + strategy game hybrid experience.

## Features
- Empire map view with building cards, action columns, idea forge, pipeline, tasks, labs, staff, and achievements.
- Bottom navigation for Businesses, Finance, Warehouse, and HQ sections.
- AI Brain bottom sheet with sample alerts and chat snippets.
- Finance Brain, Warehouse files, and HQ upgrade panels populated with placeholder content.

## Running locally
1. Ensure Android Studio Hedgehog (or newer) and Android SDK 34 are installed.
2. Import this project and let Gradle download dependencies.
3. Launch the `MainActivity` on an emulator or device (minSdk 26).

> Note: The repository ships with a placeholder Gradle wrapper script. If the wrapper JAR is missing, regenerate it via `gradle wrapper` inside Android Studio or with a locally installed Gradle 8.7+ distribution.
