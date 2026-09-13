# Eventora Planner

A Flutter event-planning application developed as an HCI course project. It combines conventional event forms and calendar views with Firebase accounts, cloud storage, reminders, and Gemini-assisted event entry.

## Implemented features

- Create, edit, delete, and filter events.
- Calendar and upcoming/past event views.
- Theme preferences and local notification reminders.
- Google sign-in through Firebase Authentication.
- User-scoped event storage in Firestore, with a local fallback.
- Natural-language event parsing through Firebase AI Logic and Gemini, including date/time validation and rejection of past events.

Review AI-generated fields before saving an event. This repository demonstrates an educational application; it does not establish an app-store release or production deployment.

## Architecture

Flutter/Dart provides the interface, Provider manages state, and SharedPreferences stores local preferences and fallback data.

- `lib/screens/`: application screens.
- `lib/providers/`: state providers.
- `lib/services/event_storage_service.dart`: cloud and local event storage.
- `lib/services/gemini_event_parser_service.dart`: structured event parsing and validation.
- `lib/main.dart` and `lib/firebase_options.dart`: application and Firebase initialization.
- `firestore.rules`: authenticated-owner access rules.

Cloud data uses `users/{uid}` for profiles and `users/{uid}/events/{eventId}` for events. The committed rules compare the authenticated UID with the path owner. They must be deployed and tested in the intended Firebase project. Local fallback identity keys are not equivalent to authenticated server-side authorization.

## Local setup

Install Flutter and the toolchain for the platform you intend to run. For Android, install the Android SDK and connect an emulator or device. iOS builds require macOS and Xcode.

```bash
git clone https://github.com/BoltTaha/eventora-planner.git
cd eventora-planner
flutter pub get
flutter devices
flutter run -d <device-id>
```

Use a device ID reported by `flutter devices`. For the web target, use `flutter run -d chrome` after enabling web support if needed.

## Firebase setup

Configure your own Firebase project and register each target platform. The Android package in this repository is `com.example.eventora_planner`; keep the registered app and build configuration consistent.

1. Enable Google sign-in in Firebase Authentication, Cloud Firestore, and Firebase AI Logic for the model used by the parsing service.
2. Configure the Android app with its `google-services.json` in `android/app/` and the required SHA fingerprints for Google sign-in.
3. For iOS, add the platform configuration to the Runner target in Xcode. For web, configure the appropriate FlutterFire options. Review `lib/firebase_options.dart` for the selected project and platforms.
4. Deploy and test the repository’s Firestore rules in your selected project:

```bash
firebase deploy --only firestore:rules --project <your-project-id>
```

The application includes fallback handling when Firebase initialization is unavailable, but cloud authentication, Firestore synchronization, and AI features still require correct platform configuration. Firebase client configuration is not a substitute for access rules. Do not commit service-account keys or other private credentials.

## Try the workflow

Create an event manually, then try a description such as “Meeting tomorrow at 5 PM in Lab 2.” Inspect the generated fields and save. Edit and delete the event, switch views and themes, and verify the reminder permissions on the target device.

For cloud validation, use two test accounts and confirm each account can read and write only its own data. Test the rules directly as well as the UI; hiding another account’s events in the interface does not establish access control.

## Checks and builds

```bash
flutter analyze
flutter test
flutter run -d <device-id> --profile
flutter build apk --release
```

The APK output is normally `build/app/outputs/flutter-apk/app-release.apk`. Distribution requires the appropriate signing and platform setup. These commands are provided as validation steps; the documentation update did not execute a Flutter build or verify notifications on physical devices.

## Current limitations

- Platform permissions, background notification behavior, and Firebase setup need testing on each target.
- Local fallback behavior and cloud synchronization require further offline and multi-account testing.
- AI output can be incorrect and needs user review.
- App Check and deployment-specific access-rule validation should be evaluated before a public release.

Maintained under [BoltTaha](https://github.com/BoltTaha). See [Muhammad Taha’s portfolio](https://muhammadtaha.app) for the project context and related work. No new license or distribution rights are introduced by this documentation update.
