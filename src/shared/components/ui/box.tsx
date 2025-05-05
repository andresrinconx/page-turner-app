/**
 * box.tsx
 * Box component with optional style prop. It accepts all standard View props.
 *
 * Created by Andres Rincon on 21/4/25.
 */

import { View, type ViewProps } from "react-native";

const Box = ({ style, ...props }: ViewProps) => {
  return <View style={[style]} {...props} />;
};

export default Box;
