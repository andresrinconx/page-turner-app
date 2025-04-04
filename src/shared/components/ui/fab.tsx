import PlusIcon from "../icons/plus";
import Button from "./button";

interface FABProps {
  onPress: () => void;
}

const FAB = ({ onPress }: FABProps) => {
  return (
    <Button
      variant="icon"
      bg="primary"
      position="absolute"
      bottom={16}
      right={16}
      onPress={onPress}>
      <PlusIcon color="white" />
    </Button>
  );
};

export default FAB;
