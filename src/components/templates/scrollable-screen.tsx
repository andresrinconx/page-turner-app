import { SafeAreaView } from "react-native-safe-area-context";
import Box from "../../components/ui/box";

const ScrollableScreen = ({ children }: { children?: React.ReactNode }) => {
  return (
    <SafeAreaView>
      <Box scrollable>{children}</Box>
    </SafeAreaView>
  );
};

export default ScrollableScreen;
