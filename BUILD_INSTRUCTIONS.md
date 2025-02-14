# Building StockTrader Pro APK

Follow these steps to build the Android APK for StockTrader Pro:

## Prerequisites

1. Install Node.js (v16 or newer)
2. Install Java Development Kit (JDK) 11 or newer
3. Install Android Studio
4. Set up Android SDK (through Android Studio)
5. Set up environment variables:
   - ANDROID_HOME
   - JAVA_HOME

## Build Steps

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Generate a keystore for signing the APK:
```bash
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

3. Create a file `android/gradle.properties` and add your keystore details:
```properties
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```

4. Build the release APK:
```bash
cd android
./gradlew assembleRelease
```

The APK will be generated at:
`android/app/build/outputs/apk/release/app-release.apk`

## Testing the APK

1. Enable "Install unknown apps" on your Android device
2. Transfer the APK to your device
3. Install and test the application

## Common Issues

1. If you see "Task 'installDebug' not found":
   - Run `npm run android` first to set up the debug build
   - Then try the release build

2. For signing issues:
   - Verify your keystore details in `gradle.properties`
   - Ensure the keystore file is in the correct location

3. For build errors:
   - Clean the project: `cd android && ./gradlew clean`
   - Update all dependencies: `npm install`
   - Try building again
