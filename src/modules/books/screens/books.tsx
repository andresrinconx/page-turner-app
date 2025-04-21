import React from "react";
import { router } from "expo-router";
import FAB from "@/shared/components/ui/fab";
import Typography from "@/shared/components/ui/typography";
import Screen from "@/shared/components/templates/screen";

const BooksScreen = () => {
  return (
    <>
      <Screen>
        <Typography
          variant="headline1"
          fontWeight="700"
          style={{ textAlign: "center" }}>
          Page Turner
        </Typography>
      </Screen>

      <FAB onPress={() => router.push("/add-book")} />
    </>
  );
};

export default BooksScreen;
