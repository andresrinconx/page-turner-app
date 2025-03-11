import { View, ScrollView, type ViewProps } from "react-native";
import { useThemeColor } from "../../lib/hooks/useThemeColor";

export type BoxProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  scrollable?: boolean;
};

const Box = ({
  style,
  lightColor,
  darkColor,
  scrollable,
  ...otherProps
}: BoxProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  const Component = scrollable ? ScrollView : View;

  return <Component style={[{ backgroundColor }, style]} {...otherProps} />;
};

export default Box;
