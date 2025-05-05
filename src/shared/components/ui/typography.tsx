/**
 * typography.ts
 * Typography component
 *
 * Created by Andres Rincon on 21/4/25.
 */

import { Text, type TextProps, type TextStyle } from "react-native";
import { COLORS } from "@/shared/constants";

const TEXT_VARIANTS = {
  paragraph1: {
    fontSize: 16,
    lineHeight: 24,
  },
  paragraph2: {
    fontSize: 14,
    lineHeight: 20,
  },
  paragraph3: {
    fontSize: 12,
    lineHeight: 20,
  },
  headline1: {
    fontSize: 28,
    lineHeight: 34,
  },
  headline2: {
    fontSize: 24,
    lineHeight: 28,
  },
  headline3: {
    fontSize: 20,
    lineHeight: 24,
  },
  headline4: {
    fontSize: 18,
    lineHeight: 22,
  },
  label1: {
    fontSize: 18,
    lineHeight: 24,
  },
  label2: {
    fontSize: 16,
    lineHeight: 24,
  },
  link: {
    fontSize: 16,
    lineHeight: 24,
  },
} as const;

type FontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

interface TypographyProps extends TextProps {
  variant?: keyof typeof TEXT_VARIANTS;
  type?: "primary" | "secondary";
  color?: keyof typeof COLORS;
  fontWeight?: FontWeight;
  onPress?: () => void;
}

const Typography = ({
  style,
  variant = "paragraph1",
  type = "primary",
  fontWeight = "400",
  color,
  onPress,
  ...props
}: TypographyProps) => {
  const textColor = color
    ? COLORS[color]
    : variant === "link"
      ? COLORS.primary
      : type === "secondary"
        ? COLORS.secondaryText
        : COLORS.text;

  return (
    <Text
      style={[
        {
          fontFamily: "System",
          color: textColor,
          fontWeight: fontWeight ? fontWeight : "400",
          ...TEXT_VARIANTS[variant],
        },
        style as TextStyle,
      ]}
      onPress={onPress}
      {...props}
    />
  );
};

export default Typography;
