/**
 * button.tsx
 * Button component with different variants and loading state,
 * it also supports children as a string or an array of strings.
 *
 * Created by Andres Rincon on 21/4/25.
 */

import { Pressable, ViewStyle, type PressableProps, View } from "react-native";
import Typography from "@/shared/components/ui/typography";
import Spinner from "@/shared/components/ui/spinner";
import { COLORS, SIZES } from "@/shared/constants";

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

interface ButtonProps extends PressableProps {
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

  return (
    <Pressable
      style={({ pressed }) => [
        {
          borderRadius: SIZES.borderRadius,
          height: SIZE,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          opacity: disabled || loading || pressed ? 0.7 : 1,
          ...variantStyle,
        },
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
          {children.map((child, index) =>
            typeof child === "string" ? (
              <Typography
                key={index}
                variant="paragraph2"
                fontWeight="500"
                color={textColor}
                style={index > 0 ? { marginLeft: 8 } : undefined}>
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
