/**
 * sign-in-with-password.ts
 * Sign in with password service
 *
 * Created by Andres Rincon on 21/4/25.
 */

import supabase from "@/shared/config/supabase";
import { SignInFormData } from "@/modules/auth/types";

export const signInWithPassword = async (userData: SignInFormData) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: userData.email,
    password: userData.password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
