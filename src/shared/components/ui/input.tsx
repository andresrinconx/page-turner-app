/**
 * input.tsx
 * Input component
 *
 * Created by Andres Rincon on 21/4/25.
 */

import { TextInput, type TextInputProps, type TextStyle } from "react-native";
import { type ReactNode, forwardRef } from "react";
import Box from "@/shared/components/ui/box";
import Typography from "@/shared/components/ui/typography";
import { COLORS } from "@/shared/constants";

const INPUT_VARIANTS = {
  primary: {
    backgroundColor: COLORS.inputText,
    borderWidth: 0,
  },
  outlined: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.secondaryText,
  },
} as const;

interface InputProps extends TextInputProps {
  variant?: keyof typeof INPUT_VARIANTS;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      style,
      variant = "primary",
      leftIcon,
      rightIcon,
      error = false,
      errorMessage,
      label,
      fullWidth = true,
      ...props
    },
    ref,
  ) => {
    const variantStyle = INPUT_VARIANTS[variant];

    return (
      <Box
        style={[
          { flexDirection: "column" },
          fullWidth ? { width: "100%" } : { width: "auto" },
        ]}>
        {label && (
          <Typography
            variant="label1"
            fontWeight="700"
            style={{ marginBottom: 4 }}>
            {label}
          </Typography>
        )}

        <Box
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 16,
              height: 48,
            },
            error && {
              borderWidth: 1,
              borderColor: COLORS.error,
            },
            variantStyle,
          ]}>
          {leftIcon && (
            <Box style={{ paddingLeft: 12, paddingRight: 8 }}>{leftIcon}</Box>
          )}

          <TextInput
            ref={ref}
            style={[
              {
                flex: 1,
                color: COLORS.text,
                paddingHorizontal: 16,
                height: 48,
              },
              style as TextStyle,
            ]}
            placeholderTextColor={COLORS.secondaryText}
            {...props}
          />

          {rightIcon && (
            <Box style={{ paddingLeft: 8, paddingRight: 12 }}>{rightIcon}</Box>
          )}
        </Box>

        {error && errorMessage && (
          <Typography
            variant="paragraph2"
            color="error"
            style={{ marginTop: 4 }}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    );
  },
);

Input.displayName = "Input";

export default Input;
