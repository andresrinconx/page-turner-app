import { useState } from "react";
import { StyleSheet } from "react-native";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import Box from "../ui/box";
import Typography from "../ui/typography";
import Input from "../ui/input";
import Button from "../ui/button";
import EyeIcon from "../icons/eye";
import { signInWithPassword } from "../../lib/actions/sign-in/sign-in-with-password";
import { COLORS } from "../../lib/constants";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInFormData = z.infer<typeof signInSchema>;

const SignInForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    mode: "onBlur",
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: signIn, isPending } = useMutation({
    mutationFn: async (data: SignInFormData) => {
      const { error } = await signInWithPassword(data.email, data.password);
      if (error) throw error;
    },
    onSuccess: () => {
      router.replace("/(tabs)");
    },
  });

  const onSubmit = (data: SignInFormData) => {
    signIn(data);
  };

  return (
    <Box>
      <Box>
        <Typography style={styles.title} variant="headline1" weight="bold">
          Login
        </Typography>
        <Typography style={styles.subtitle} variant="paragraph1">
          Login to continue using the app
        </Typography>
      </Box>

      <Box style={styles.formContainer}>
        <Box style={styles.inputContainer}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Email"
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={!!errors.email}
                errorMessage={errors.email?.message}
              />
            )}
          />
        </Box>

        <Box style={styles.inputContainer}>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Password"
                placeholder="Enter your password"
                secureTextEntry
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={!!errors.password}
                errorMessage={errors.password?.message}
                rightIcon={
                  <EyeIcon
                    color={COLORS.overlay}
                    on={showPassword}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
              />
            )}
          />
        </Box>
      </Box>

      <Box style={styles.buttonContainer}>
        <Button
          variant="outline"
          size="md"
          onPress={handleSubmit(onSubmit)}
          disabled={isPending}
          loading={isPending}>
          Login
        </Button>

        <Button style={styles.googleButton}>Login with Google</Button>
      </Box>
    </Box>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
  subtitle: {
    marginTop: 16,
  },
  formContainer: {
    marginTop: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 24,
  },
  googleButton: {
    marginTop: 16,
  },
});
