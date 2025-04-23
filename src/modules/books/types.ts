/**
 * types.ts
 * Types for the books module
 *
 * Created by Andres Rincon on 21/4/25.
 */

import { z } from "zod";
import { ImagePickerAsset } from "expo-image-picker";

export const addBookSchema = z.object({
  cover: z
    .custom<ImagePickerAsset>()
    .refine(asset => asset !== null, "Add a book's cover")
    .optional(),
  title: z.string().min(1, "The book needs a title"),
  totalPages: z.number().min(1, "Please add the number of pages"),
});

export type AddBookFormData = z.infer<typeof addBookSchema>;
