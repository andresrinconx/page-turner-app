/**
 * tab-bar-background.ios.tsx
 * Tab bar background component for iOS
 *
 * Created by Andres Rincon on 21/4/25.
 */

import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BlurTabBarBackground = () => {
  return (
    <BlurView
      tint="systemChromeMaterial"
      intensity={100}
      style={StyleSheet.absoluteFill}
    />
  );
};

export const useBottomTabOverflow = () => {
  const tabHeight = useBottomTabBarHeight();
  const { bottom } = useSafeAreaInsets();
  return tabHeight - bottom;
};

export default BlurTabBarBackground;
