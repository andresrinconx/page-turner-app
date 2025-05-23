/**
 * _layout.tsx
 * Root layout component
 *
 * Created by Andres Rincon on 21/4/25.
 */

import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { COLORS } from "@/shared/constants";
import queryClient from "@/shared/config/query-client";
import * as SplashScreen from "expo-splash-screen";
import { NotificationsProvider } from "@/shared/contexts/notifications-context";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NotificationsProvider>
          <StatusBar style="dark" backgroundColor={COLORS.background} />

          <Stack screenOptions={{ headerShown: false }}></Stack>
        </NotificationsProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default RootLayout;
