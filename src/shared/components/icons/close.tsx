import Svg, { Path } from "react-native-svg";
import { COLORS } from "@/shared/constants";
import { Pressable } from "react-native";

interface CloseIconProps {
  color: keyof typeof COLORS;
  onPress?: () => void;
}

const CloseIcon = ({ color, onPress }: CloseIconProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: COLORS.progress,
          width: 28,
          height: 28,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
          opacity: pressed ? 0.7 : 1,
        },
      ]}>
      <Svg width={24} height={24} viewBox="0 0 24 24">
        <Path
          fill={COLORS[color]}
          d="m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"
        />
      </Svg>
    </Pressable>
  );
};

export default CloseIcon;
