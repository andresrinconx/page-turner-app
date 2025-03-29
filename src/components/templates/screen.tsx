import { ViewStyle, StyleSheet, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Box from "../ui/box";
import ScrollableBox from "../ui/scrollable-box";
import { COLORS } from "../../lib/constants";

interface ScreenProps {
  children: React.ReactNode;
  scrollable?: boolean;
  contentContainerStyle?: ViewStyle;
}

const Screen = ({
  children,
  scrollable = true,
  contentContainerStyle,
}: ScreenProps) => {
  const Component = scrollable ? ScrollableBox : Box;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Component
          style={[styles.contentContainer, contentContainerStyle]}
          backgroundColor={COLORS.background}>
          {children}
        </Component>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
});
