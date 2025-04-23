/**
 * box.tsx
 * Box component
 *
 * Created by Andres Rincon on 21/4/25.
 */

import { View, type ViewProps } from "react-native";

const Box = ({ style, ...props }: ViewProps) => {
  return <View style={[style]} {...props} />;
};

export default Box;
