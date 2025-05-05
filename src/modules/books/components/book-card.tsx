/**
 * book-card
 * BookCard component
 *
 * Created by Andres Rincon on 28/04/25
 */

import Box from "@/shared/components/ui/box";
import Typography from "@/shared/components/ui/typography";
import { Book } from "@/modules/books/types";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Box>
      <Typography variant="headline3">{book.title}</Typography>
      <Typography variant="paragraph1">{book.status}</Typography>
      <Typography variant="paragraph1">{book.total_pages}</Typography>
    </Box>
  );
};

export default BookCard;
