import {
  TextInput,
  type TextInputProps,
  type TextStyle,
  StyleSheet,
} from "react-native";
import { type ReactNode, forwardRef } from "react";
import Box from "./box";
import Typography from "./typography";
import { COLORS } from "../../lib/constants";

const INPUT_VARIANTS = {
  primary: {
    backgroundColor: COLORS.inputText,
    borderWidth: 0,
  },
  outlined: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.inputText,
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
          styles.container,
          fullWidth ? styles.fullWidth : styles.autoWidth,
        ]}>
        {label && (
          <Typography variant="label1" weight="bold" style={styles.label}>
            {label}
          </Typography>
        )}

        <Box
          style={[
            styles.inputContainer,
            variantStyle,
            error && styles.errorState,
          ]}>
          {leftIcon && <Box style={styles.leftIconContainer}>{leftIcon}</Box>}

          <TextInput
            ref={ref}
            style={[styles.input, style as TextStyle]}
            placeholderTextColor={COLORS.secondaryText}
            {...props}
          />

          {rightIcon && (
            <Box style={styles.rightIconContainer}>{rightIcon}</Box>
          )}
        </Box>

        {error && errorMessage && (
          <Typography
            variant="paragraph2"
            color={COLORS.error}
            style={styles.errorMessage}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    );
  },
);

Input.displayName = "Input";

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  fullWidth: {
    width: "100%",
  },
  autoWidth: {
    width: "auto",
  },
  label: {
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    height: 48,
  },
  leftIconContainer: {
    paddingLeft: 12,
    paddingRight: 8,
  },
  rightIconContainer: {
    paddingLeft: 8,
    paddingRight: 12,
  },
  input: {
    flex: 1,
    color: COLORS.text,
    paddingHorizontal: 16,
    height: 48,
  },
  errorState: {
    borderWidth: 1,
    borderColor: COLORS.error,
  },
  errorMessage: {
    marginTop: 4,
  },
});
