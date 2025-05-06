// import { SplashScreen, Stack, useRouter, useSegments } from "expo-router";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import SafeScreen from "../components/SafeScreen";
// import { StatusBar } from "expo-status-bar";

// import { useAuthStore } from "../store/authStore";
// import { use, useEffect } from "react";

// SplashScreen.preventAutoHideAsync()

// export default function RootLayout() {
//   const router = useRouter();
//   const segments = useSegments();

//   const {checkAuth, user, token} = useAuthStore();

//   useEffect(() => {
//     checkAuth();
//   }, []);

//   // handle navigation based on auth state
//   useEffect(() => {
//     const inAuthScreen = segments[0] === "(auth)";
//     const isSignedIn = user && token;

//     if (!isSignedIn && !inAuthScreen) router.replace("(auth)");
//     else if (isSignedIn && inAuthScreen) router.replace("(tabs)");

//   },[user, token, segments]);

//   return (
//     <SafeAreaProvider>
//       <SafeScreen>
//         <Stack screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="(tabs)" />
//           <Stack.Screen name="(auth)" />
//         </Stack>
//       </SafeScreen>
//       <StatusBar style="dark" />
//     </SafeAreaProvider>
//   );
// }

import { Stack, useRouter, useSegments, SplashScreen } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeScreen from "../components/SafeScreen";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font"

import { useAuthStore } from "../store/authStore";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  
  const { checkAuth, user, token } = useAuthStore();

  const [fontsLoaded] = useFonts({
    "JetBrainsMono-Medium": require("../assets/fonts/JetBrainsMono-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded])
  
  const [isReady, setIsReady] = useState(false); // Add loading state

  // Call checkAuth when the component is mounted
  useEffect(() => {
    const initializeAuth = async () => {
      await checkAuth(); // Check auth state
      setIsReady(true); // Once ready, allow navigation
    };
    initializeAuth();
  }, []); // Empty dependency array to run this once on mount

  // Ensure navigation only happens after the component is ready
  useEffect(() => {
    if (!isReady) return; // Don't navigate before auth check

    const inAuthScreen = segments[0] === "(auth)";
    const isSignedIn = user && token;

    if (!isSignedIn && !inAuthScreen) router.replace("(auth)");
    else if (isSignedIn && inAuthScreen) router.replace("(tabs)");

  }, [user, token, segments, isReady]); // Include isReady in the dependencies

  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)" />
        </Stack>
      </SafeScreen>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
