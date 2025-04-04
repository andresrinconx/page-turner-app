import { ViewStyle, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Box from "../ui/box";
import ScrollableBox from "../ui/scrollable-box";
import { COLORS } from "../../lib/constants";

interface ScreenProps extends CommonStyleProps {
  children: React.ReactNode;
  scrollable?: boolean;
  contentContainerStyle?: ViewStyle;
}

const Screen = ({
  children,
  scrollable = true,
  contentContainerStyle,
  ...props
}: ScreenProps) => {
  const Component = scrollable ? ScrollableBox : Box;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <KeyboardAvoidingView behavior="padding">
        <Component style={[contentContainerStyle]} px={24} {...props}>
          {children}
        </Component>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Screen;
