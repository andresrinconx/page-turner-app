import * as React from "react";
import { Pressable } from "react-native";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../lib/constants";

interface ChevronLeftIconProps {
  color: keyof typeof COLORS;
  onPress?: () => void;
}

const ChevronLeftIcon = ({ color, onPress }: ChevronLeftIconProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}>
      <Svg width={24} height={24} viewBox="0 0 24 24">
        <Path
          fill={COLORS[color]}
          d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"
        />
      </Svg>
    </Pressable>
  );
};

export default ChevronLeftIcon;
