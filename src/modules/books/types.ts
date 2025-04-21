import { z } from "zod";

export const addBookSchema = z.object({
  cover: z.string().optional(),
  title: z.string().min(1, "The book needs a title"),
  totalPages: z.string().min(1, "Please add the number of pages"),
});

export type AddBookFormData = z.infer<typeof addBookSchema>;
