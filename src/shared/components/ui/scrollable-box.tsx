/**
 * scrollable-box.tsx
 * Scrollable box component with optional style prop. It accepts all standard View props.
 *
 * Created by Andres Rincon on 21/4/25.
 */

import { ScrollView, type ViewProps } from "react-native";

const ScrollableBox = ({ style, ...props }: ViewProps) => {
  return <ScrollView contentContainerStyle={[style]} {...props} />;
};

export default ScrollableBox;
