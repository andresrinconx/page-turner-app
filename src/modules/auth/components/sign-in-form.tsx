/**
 * sign-in-form.tsx
 * Sign in form component
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
import Button from "@/shared/components/ui/button";
import EyeIcon from "@/shared/components/icons/eye";
import { signInWithPassword } from "@/modules/auth/services/sign-in-with-password";
import { signInSchema, SignInFormData } from "@/modules/auth/types";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

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

  const { mutate: signInMutation, isPending } = useMutation({
    mutationFn: async (data: SignInFormData) => {
      await signInWithPassword(data.email, data.password);
    },
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
      </Box>

      <Button
        style={{ marginTop: 24 }}
        onPress={handleSubmit((data: SignInFormData) => signInMutation(data))}
        loading={isPending}>
        Login
      </Button>
    </>
  );
};

export default SignInForm;
