/**
 * sign-up-with-password.ts
 * Sign up with password service
 *
 * Created by Andres Rincon on 21/4/25.
 */

import supabase from "@/shared/config/supabase";
import { SignUpFormData } from "@/modules/auth/types";

export const signUpWithPassword = async (userData: SignUpFormData) => {
  const { data, error } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
