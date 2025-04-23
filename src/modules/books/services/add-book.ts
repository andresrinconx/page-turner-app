/**
 * add-book.ts
 * Add book service
 *
 * Created by Andres Rincon on 21/4/25.
 */

import supabase from "@/shared/config/supabase";
import { AddBookFormData } from "@/modules/books/types";
import { getArrayBuffer } from "@/shared/utils/get-array-buffer";
import { getUser } from "@/shared/services/get-user";

export const addBook = async (book: AddBookFormData) => {
  const { title, totalPages, cover } = book;

  const { data: bookData, error: bookError } = await supabase
    .from("books")
    .insert([{ title, total_pages: totalPages }])
    .select();

  if (bookError) {
    throw new Error(bookError.message);
  }

  if (!cover) {
    return { data: bookData };
  }

  const user = await getUser();
  const { arraybuffer, path } = await getArrayBuffer(user!.id, cover);

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
