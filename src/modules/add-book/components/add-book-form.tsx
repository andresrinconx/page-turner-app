import React from "react";
import Box from "../../../shared/components/ui/box";
import Input from "../../../shared/components/ui/input";
import Button from "../../../shared/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { addBookSchema, AddBookFormData } from "../types";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { addBook } from "../actions/add-book";

const AddBookForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddBookFormData>({
    mode: "onSubmit",
    resolver: zodResolver(addBookSchema),
    defaultValues: {
      title: "",
      pages: "",
      cover: "",
    },
  });

  const { mutate: addBookMutation, isPending } = useMutation({
    mutationFn: async (data: AddBookFormData) => {
      await addBook(data);
    },
    onSuccess: () => {
      router.replace("/(page-turner)/(tabs)");
    },
    onError: error => {
      console.log("error", error);
    },
  });

  return (
    <>
      <Box gap={16}>
        {/* Cover */}

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
          name="pages"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              variant="outlined"
              label="Pages"
              placeholder="Number of pages"
              keyboardType="numeric"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value.toString()}
              error={!!errors.pages}
              errorMessage={errors.pages?.message}
            />
          )}
        />
      </Box>

      <Button
        mt={24}
        onPress={handleSubmit((data: AddBookFormData) => addBookMutation(data))}
        loading={isPending}>
        Add Book
      </Button>
    </>
  );
};

export default AddBookForm;
