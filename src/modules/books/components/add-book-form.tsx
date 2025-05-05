/**
 * add-book-form.tsx
 * Add book form component
 *
 * Created by Andres Rincon on 21/4/25.
 */

import React from "react";
import { router } from "expo-router";
import Box from "@/shared/components/ui/box";
import Input from "@/shared/components/ui/input";
import Button from "@/shared/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { addBookSchema, AddBookFormData } from "@/modules/books/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBook } from "@/modules/books/services/add-book";
import BookCoverPicker from "@/modules/books/components/book-cover-picker";

const AddBookForm = ({ onClose }: { onClose: () => void }) => {
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AddBookFormData>({
    mode: "onSubmit",
    resolver: zodResolver(addBookSchema),
    defaultValues: {
      title: "",
      totalPages: 0,
      cover: undefined,
    },
  });

  const { mutate: addBookMutation, isPending } = useMutation({
    mutationFn: addBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      onClose();
    },
    onError: error => {
      console.log("error", error);
    },
  });

  return (
    <>
      <Box style={{ gap: 16 }}>
        <Box style={{ alignItems: "center" }}>
          <BookCoverPicker
            onImagePicked={value => setValue("cover", value ?? undefined)}
          />
        </Box>

        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              variant="outlined"
              label="Title"
              placeholder="Book title"
              autoCapitalize="none"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={!!errors.title}
              errorMessage={errors.title?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="totalPages"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              variant="outlined"
              label="Pages"
              placeholder="Number of pages"
              keyboardType="numeric"
              onChangeText={text => onChange(Number(text) || 0)}
              onBlur={onBlur}
              value={value === 0 ? "" : value.toString()}
              error={!!errors.totalPages}
              errorMessage={errors.totalPages?.message}
            />
          )}
        />
      </Box>

      <Button
        style={{ marginTop: 24 }}
        onPress={handleSubmit((data: AddBookFormData) => addBookMutation(data))}
        loading={isPending}>
        Add Book
      </Button>
    </>
  );
};

export default AddBookForm;
