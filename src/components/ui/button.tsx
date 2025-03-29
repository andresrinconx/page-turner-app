import {
  Pressable,
  ViewStyle,
  type PressableProps,
  StyleSheet,
} from "react-native";
import Typography from "./typography";
import Spinner from "./spinner";
import { COLORS } from "../../lib/constants";

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
} as const;

const BUTTON_SIZES = {
  sm: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  md: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  lg: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  icon: {
    padding: 8,
  },
} as const;

interface ButtonProps extends PressableProps {
  variant?: keyof typeof BUTTON_VARIANTS;
  size?: keyof typeof BUTTON_SIZES;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  children,
  style,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const variantStyle = BUTTON_VARIANTS[variant];
  const sizeStyle = BUTTON_SIZES[size];
  const textColor = variant === "primary" ? COLORS.white : COLORS.primary;

  return (
    <Pressable
      style={[
        styles.base,
        variantStyle,
        sizeStyle,
        fullWidth ? styles.fullWidth : styles.autoWidth,
        disabled || loading ? styles.disabled : styles.enabled,
        style as ViewStyle,
      ]}
      disabled={disabled || loading}
      {...props}>
      {loading ? (
        <Spinner />
      ) : typeof children === "string" ? (
        <Typography variant="paragraph2" weight="medium" color={textColor}>
          {children}
        </Typography>
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
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  fullWidth: {
    width: "100%",
  },
  autoWidth: {
    width: "auto",
  },
  disabled: {
    opacity: 0.5,
  },
  enabled: {
    opacity: 1,
  },
});
