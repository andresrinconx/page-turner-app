import { ScrollView, type ViewProps } from "react-native";

interface ScrollableBoxProps extends ViewProps {
  backgroundColor?: string;
}

const ScrollableBox = ({
  style,
  backgroundColor,
  ...props
}: ScrollableBoxProps) => {
  return (
    <ScrollView
      contentContainerStyle={[{ backgroundColor }, style]}
      {...props}
    />
  );
};

export default ScrollableBox;
