import { View, type ViewProps } from "react-native";

interface BoxProps extends ViewProps {
  backgroundColor?: string;
}

const Box = ({ style, backgroundColor, ...props }: BoxProps) => {
  return <View style={[{ backgroundColor }, style]} {...props} />;
};

export default Box;
