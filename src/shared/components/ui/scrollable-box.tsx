/**
 * scrollable-box.tsx
 * Scrollable box component
 *
 * Created by Andres Rincon on 21/4/25.
 */

import { ScrollView, type ViewProps } from "react-native";

const ScrollableBox = ({ style, ...props }: ViewProps) => {
  return <ScrollView contentContainerStyle={[style]} {...props} />;
};

export default ScrollableBox;
