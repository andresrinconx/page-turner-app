/**
 * add-book.tsx
 * Add book screen
 *
 * Created by Andres Rincon on 21/4/25.
 */

import Box from "@/shared/components/ui/box";
import AddBookForm from "@/modules/books/components/add-book-form";
import Typography from "@/shared/components/ui/typography";
import CloseIcon from "@/shared/components/icons/close";
import { router } from "expo-router";
import Screen from "@/shared/components/templates/screen";

const AddBookScreen = () => {
  return (
    <Screen contentContainerStyle={{ paddingTop: 24 }}>
      <CloseIcon color="overlay" onPress={() => router.back()} />

      <Box style={{ flex: 1, justifyContent: "center", paddingTop: 48 }}>
        <Typography
          variant="headline1"
          style={{
            textAlign: "center",
            marginBottom: 24,
          }}
          fontWeight="700">
          Add a new book
        </Typography>

        <AddBookForm onClose={() => router.back()} />
      </Box>
    </Screen>
  );
};

export default AddBookScreen;
