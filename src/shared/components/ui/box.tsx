import { View, type ViewProps } from "react-native";
import { createCommonStyles } from "../../lib/utils/create-common-styles";

interface BoxProps extends ViewProps, CommonStyleProps {}

const Box = ({ style, ...props }: BoxProps) => {
  const commonStyles = createCommonStyles(props);
  return <View style={[commonStyles, style]} {...props} />;
};

export default Box;
