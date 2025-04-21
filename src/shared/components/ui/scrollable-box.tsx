import { ScrollView, type ViewProps } from "react-native";

const ScrollableBox = ({ style, ...props }: ViewProps) => {
  return <ScrollView contentContainerStyle={[style]} {...props} />;
};

export default ScrollableBox;
