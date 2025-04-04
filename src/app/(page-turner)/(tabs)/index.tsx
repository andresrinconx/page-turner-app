import React from "react";
import FAB from "../../../shared/components/ui/fab";
import Screen from "../../../shared/components/templates/screen";
import Typography from "../../../shared/components/ui/typography";
import { router } from "expo-router";

const BooksScreen = () => {
  return (
    <>
      <Screen>
        <Typography variant="headline1" fontWeight="700" textAlign="center">
          Page Turner
        </Typography>
      </Screen>

      <FAB onPress={() => router.push("/add-book")} />
    </>
  );
};

export default BooksScreen;
