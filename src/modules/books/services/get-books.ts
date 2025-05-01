/**
 * get-books
 * GetBooks service
 *
 * Created by Andres Rincon on 23/04/25
 */

import supabase from "@/shared/config/supabase";

export const getBooks = async () => {
  const { data, error } = await supabase.from("books").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
