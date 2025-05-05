/**
 * fab.tsx
 * Floating action button component
 *
 * Created by Andres Rincon on 21/4/25.
 */

import { COLORS } from "@/shared/constants";
import Button from "@/shared/components/ui/button";

interface FABProps {
  onPress: () => void;
  children: React.ReactNode;
}

const FAB = ({ onPress, children }: FABProps) => {
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
      {children}
    </Button>
  );
};

export default FAB;
