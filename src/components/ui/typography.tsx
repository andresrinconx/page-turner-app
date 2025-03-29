import { Text, type TextProps, type TextStyle, StyleSheet } from "react-native";
import { COLORS } from "../../lib/constants";

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
} as const;

const FONT_WEIGHTS = {
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

interface TypographyProps extends TextProps {
  variant?: keyof typeof TEXT_VARIANTS;
  type?: "primary" | "secondary";
  weight?: keyof typeof FONT_WEIGHTS;
  color?: string;
  textAlign?: "left" | "center" | "right";
}

const Typography = ({
  style,
  variant = "paragraph1",
  type = "primary",
  weight = "normal",
  color,
  textAlign = "left",
  ...props
}: TypographyProps) => {
  const textColor =
    color ?? (type === "secondary" ? COLORS.secondaryText : COLORS.text);
  const variantStyle = TEXT_VARIANTS[variant];
  const fontWeight = FONT_WEIGHTS[weight];

  return (
    <Text
      style={[
        styles.base,
        variantStyle,
        styles[textAlign],
        { color: textColor, fontWeight },
        style as TextStyle,
      ]}
      {...props}
    />
  );
};

export default Typography;

const styles = StyleSheet.create({
  base: {
    fontFamily: "System",
  },
  left: {
    textAlign: "left",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
});
