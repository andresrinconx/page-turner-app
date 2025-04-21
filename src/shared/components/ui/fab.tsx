import PlusIcon from "@/shared/components/icons/plus";
import Button from "@/shared/components/ui/button";
import { COLORS } from "@/shared/constants";

interface FABProps {
  onPress: () => void;
}

const FAB = ({ onPress }: FABProps) => {
  return (
    <Button
      style={{
        position: "absolute",
        bottom: 16,
        right: 16,
        backgroundColor: COLORS.primary,
      }}
      variant="icon"
      onPress={onPress}>
      <PlusIcon color="white" />
    </Button>
  );
};

export default FAB;
