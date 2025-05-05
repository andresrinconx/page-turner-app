/**
 * sign-up-form.tsx
 * Sign up form component
 *
 * Created by Andres Rincon on 21/4/25.
 */

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import Box from "@/shared/components/ui/box";
import Input from "@/shared/components/ui/input";
import { SignUpFormData, signUpSchema } from "@/modules/auth/types";
import { signUpWithPassword } from "@/modules/auth/services/sign-up-with-password";
import EyeIcon from "@/shared/components/icons/eye";
import Button from "@/shared/components/ui/button";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate: signUpMutation, isPending } = useMutation({
    mutationFn: signUpWithPassword,
    onSuccess: () => {
      router.replace("/(page-turner)/(tabs)");
    },
    onError: error => {
      console.log("error", error);
    },
  });

  return (
    <>
      <Box style={{ gap: 16 }}>
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

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Password"
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={!!errors.password}
              errorMessage={errors.password?.message}
              rightIcon={
                <EyeIcon
                  color="overlay"
                  on={showPassword}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Confirm Password"
              placeholder="Confirm your password"
              secureTextEntry={!showConfirmPassword}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={!!errors.confirmPassword}
              errorMessage={errors.confirmPassword?.message}
              rightIcon={
                <EyeIcon
                  color="overlay"
                  on={showConfirmPassword}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              }
            />
          )}
        />
      </Box>

      <Button
        style={{ marginTop: 24 }}
        onPress={handleSubmit((data: SignUpFormData) => signUpMutation(data))}
        loading={isPending}>
        Sign Up
      </Button>
    </>
  );
};

export default SignUpForm;
