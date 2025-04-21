import supabase from "@/shared/config/supabase";

const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
};

export default signOut;
