/**
 * get-user
 * Get user service
 *
 * Created by Andres Rincon on 23/04/25
 */

import supabase from "@/shared/config/supabase";

export const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return data.user;
};
