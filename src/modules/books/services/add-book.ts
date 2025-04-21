import supabase from "@/shared/config/supabase";
import { AddBookFormData } from "@/modules/books/types";

export const addBook = async (data: AddBookFormData) => {
  const { data: book, error } = await supabase.from("books").insert(data);

  if (error) {
    throw new Error(error.message);
  }

  return book;
};
