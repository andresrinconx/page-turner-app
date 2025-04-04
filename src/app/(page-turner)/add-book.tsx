import Typography from "@/shared/components/ui/typography";
import Screen from "../../shared/components/templates/screen";
import AddBookForm from "@/modules/add-book/components/add-book-form";
import CloseIcon from "@/shared/components/icons/close";
import { router } from "expo-router";
import Box from "@/shared/components/ui/box";

const AddBookScreen = () => {
  return (
    <Screen pt={24}>
      <CloseIcon color="overlay" onPress={() => router.back()} />

      <Box flex={1} justifyContent="center" pt={48}>
        <Typography
          variant="headline1"
          textAlign="center"
          fontWeight="700"
          mb={24}>
          Add a new book
        </Typography>

        <AddBookForm />
      </Box>
    </Screen>
  );
};

export default AddBookScreen;
