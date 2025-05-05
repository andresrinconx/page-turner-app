/**
 * books-list
 * BooksList component
 *
 * Created by Andres Rincon on 23/04/25
 */

import { FlatList } from "react-native";
import BookCard from "@/modules/books/components/book-card";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "@/modules/books/services/get-books";
import Spinner from "@/shared/components/ui/spinner";
import Typography from "@/shared/components/ui/typography";

const BooksList = () => {
  const { data: books, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks(),
  });

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  return (
    <FlatList
      data={books}
      ListEmptyComponent={
        <Typography variant="headline3" style={{ textAlign: "center" }}>
          No books found
        </Typography>
      }
      renderItem={({ item }) => <BookCard book={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default BooksList;
