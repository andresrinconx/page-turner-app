import { Provider } from "@supabase/supabase-js";
import supabase from "../../config/supabase";

export const signInWithOAuth = async (provider: Provider) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
  });

  return { data, error };
};
