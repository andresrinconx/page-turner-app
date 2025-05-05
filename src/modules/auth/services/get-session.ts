/**
 * get-session.ts
 * Get session service
 *
 * Created by Andres Rincon on 21/4/25.
 */

import supabase from "@/shared/config/supabase";

export const getSession = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    throw new Error(error.message);
  }

  return session;
};
