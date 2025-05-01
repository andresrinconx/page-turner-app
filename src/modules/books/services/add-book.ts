/**
 * add-book.ts
 * Add book service
 *
 * Created by Andres Rincon on 21/4/25.
 */

import supabase from "@/shared/config/supabase";
import { AddBookFormData, Book } from "@/modules/books/types";
import { getArrayBuffer } from "@/shared/utils/get-array-buffer";
import { getUser } from "@/shared/services/get-user";

interface AddBookResponse {
  data: Book;
  coverData?: {
    path: string;
  };
}

export const addBook = async (
  book: AddBookFormData,
): Promise<AddBookResponse> => {
  const { title, totalPages, cover } = book;

  const { data: bookData, error: bookError } = await supabase
    .from("books")
    .insert([{ title, total_pages: totalPages }])
    .select()
    .single();

  if (bookError) {
    throw new Error(bookError.message);
  }

  if (!cover) {
    return { data: bookData };
  }

  const user = await getUser();
  if (!user) {
    throw new Error("User not found");
  }

  const { arraybuffer, path } = await getArrayBuffer(user.id, cover);

  const { data: coverData, error: coverError } = await supabase.storage
    .from("files")
    .upload(path, arraybuffer, {
      contentType: cover.mimeType ?? "image/jpeg",
    });

  if (coverError) {
    throw new Error(coverError.message);
  }

  return { data: bookData, coverData };
};
