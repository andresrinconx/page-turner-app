import { ScrollView, type ViewProps } from "react-native";
import { createCommonStyles } from "../../lib/utils/create-common-styles";

interface ScrollableBoxProps extends ViewProps, CommonStyleProps {}

const ScrollableBox = ({ style, ...props }: ScrollableBoxProps) => {
  const commonStyles = createCommonStyles(props);
  return (
    <ScrollView contentContainerStyle={[commonStyles, style]} {...props} />
  );
};

export default ScrollableBox;
