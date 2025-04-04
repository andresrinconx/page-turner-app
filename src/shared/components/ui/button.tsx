import {
  Pressable,
  ViewStyle,
  type PressableProps,
  StyleSheet,
  View,
} from "react-native";
import Typography from "./typography";
import Spinner from "./spinner";
import { COLORS } from "../../lib/constants";
import { createCommonStyles } from "../../lib/utils/create-common-styles";

const SIZE = 48 as const;

const BUTTON_VARIANTS = {
  primary: {
    backgroundColor: COLORS.primary,
    borderWidth: 0,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  ghost: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  icon: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 8,
    height: SIZE,
    width: SIZE,
  },
} as const;

interface ButtonProps extends PressableProps, CommonStyleProps {
  variant?: keyof typeof BUTTON_VARIANTS;
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  style,
  variant = "primary",
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  const variantStyle = BUTTON_VARIANTS[variant];
  const textColor = variant === "primary" ? "white" : "primary";
  const commonStyles = createCommonStyles(props);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.base,
        variantStyle,
        {
          opacity: disabled || loading || pressed ? 0.7 : 1,
        },
        commonStyles,
        style as ViewStyle,
      ]}
      disabled={disabled || loading}
      {...props}>
      {loading ? (
        <Spinner />
      ) : typeof children === "string" ? (
        <Typography variant="paragraph2" fontWeight="500" color={textColor}>
          {children}
        </Typography>
      ) : Array.isArray(children) ? (
        <View style={styles.contentContainer}>
          {children.map((child, index) =>
            typeof child === "string" ? (
              <Typography
                key={index}
                variant="paragraph2"
                fontWeight="500"
                color={textColor}
                style={index > 0 ? styles.textSpacing : undefined}>
                {child}
              </Typography>
            ) : (
              child
            ),
          )}
        </View>
      ) : (
        children
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  base: {
    borderRadius: 16,
    height: SIZE,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textSpacing: {
    marginLeft: 8,
  },
});
