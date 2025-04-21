import { View, type ViewProps } from "react-native";

const Box = ({ style, ...props }: ViewProps) => {
  return <View style={style} {...props} />;
};

export default Box;
