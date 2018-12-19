#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n com.asadsahi.reactnativefullstack/host.exp.exponent.MainActivity
