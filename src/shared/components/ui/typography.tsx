import { Text, type TextProps, type TextStyle, StyleSheet } from "react-native";
import { COLORS } from "../../lib/constants";
import { createCommonStyles } from "../../lib/utils/create-common-styles";

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

interface TypographyProps extends TextProps, CommonStyleProps {
  variant?: keyof typeof TEXT_VARIANTS;
  type?: "primary" | "secondary";
  onPress?: () => void;
}

const Typography = ({
  style,
  variant = "paragraph1",
  type = "primary",
  onPress,
  ...props
}: TypographyProps) => {
  const textColor =
    variant === "link"
      ? "primary"
      : type === "secondary"
        ? "secondaryText"
        : "text";
  const variantStyle = TEXT_VARIANTS[variant];
  const commonStyles = createCommonStyles(props);

  return (
    <Text
      style={[
        styles.base,
        variantStyle,
        { color: COLORS[textColor] },
        commonStyles,
        style as TextStyle,
      ]}
      onPress={onPress}
      {...props}
    />
  );
};

export default Typography;

const styles = StyleSheet.create({
  base: {
    fontFamily: "System",
  },
});
