import { Text, type TextProps } from "react-native";
import { useThemeColor } from "../../lib/hooks/useThemeColor";

const TEXT_STYLES = {
  default: "text-base leading-6",
  title: "text-3xl font-bold leading-8",
  defaultSemiBold: "text-base leading-6 font-semibold",
  subtitle: "text-xl font-bold",
  link: "text-base leading-[30px] text-[#0a7ea4]",
} as const;

export type TypographyProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: keyof typeof TEXT_STYLES;
};

const Typography = ({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: TypographyProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const textStyle = TEXT_STYLES[type];

  return <Text className={textStyle} style={[{ color }, style]} {...rest} />;
};

export default Typography;
