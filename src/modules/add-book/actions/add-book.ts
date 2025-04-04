import supabase from "../../../shared/lib/config/supabase";

import { AddBookFormData } from "../types";
export const addBook = async (data: AddBookFormData) => {
  const { data: book, error } = await supabase.from("books").insert(data);

  if (error) {
    throw new Error(error.message);
  }

  return book;
};
