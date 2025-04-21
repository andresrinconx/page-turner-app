import { ViewStyle, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Box from "@/shared/components/ui/box";
import ScrollableBox from "@/shared/components/ui/scrollable-box";
import { COLORS } from "@/shared/constants";

interface ScreenProps {
  children: React.ReactNode;
  scrollable?: boolean;
  contentContainerStyle?: ViewStyle;
  style?: ViewStyle;
}

const Screen = ({
  children,
  scrollable = true,
  contentContainerStyle,
  style,
  ...props
}: ScreenProps) => {
  const Component = scrollable ? ScrollableBox : Box;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ paddingHorizontal: 24 }}>
        <Component style={contentContainerStyle} {...props}>
          {children}
        </Component>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Screen;
