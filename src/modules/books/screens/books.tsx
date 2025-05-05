/**
 * books.tsx
 * Books screen
 *
 * Created by Andres Rincon on 21/4/25.
 */

import React from "react";
import { router } from "expo-router";
import FAB from "@/shared/components/ui/fab";
import Typography from "@/shared/components/ui/typography";
import Screen from "@/shared/components/templates/screen";
import BooksList from "@/modules/books/components/books-list";
import Box from "@/shared/components/ui/box";
import PlusIcon from "@/shared/components/icons/plus";

const BooksScreen = () => {
  return (
    <>
      <Screen scrollable={false}>
        <Typography
          variant="headline1"
          fontWeight="700"
          style={{ textAlign: "center" }}>
          Page Turner
        </Typography>

        <Box style={{ marginTop: 24 }}>
          <BooksList />
        </Box>
      </Screen>

      <FAB onPress={() => router.push("/add-book")}>
        <PlusIcon color="white" />
      </FAB>
    </>
  );
};

export default BooksScreen;
