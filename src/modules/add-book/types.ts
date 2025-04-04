import { z } from "zod";

export const addBookSchema = z.object({
  cover: z.string().min(1, "Add a cover image"),
  title: z.string().min(1, "The book needs a title"),
  pages: z.string().min(1, "Please add the number of pages"),
});

export type AddBookFormData = z.infer<typeof addBookSchema>;
