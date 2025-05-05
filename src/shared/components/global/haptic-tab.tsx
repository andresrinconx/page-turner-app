/**
 * haptic-tab.tsx
 * Haptic tab component
 *
 * Created by Andres Rincon on 21/4/25.
 */

import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import * as Haptics from "expo-haptics";

const HapticTab = (props: BottomTabBarButtonProps) => {
  return (
    <PlatformPressable
      {...props}
      onPressIn={ev => {
        if (process.env.EXPO_OS === "ios") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
    />
  );
};

export default HapticTab;
