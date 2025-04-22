/**
 * spinner.tsx
 * Spinner component
 *
 * Created by Andres Rincon on 21/4/25.
 */

import { ActivityIndicator } from "react-native";
import { COLORS } from "@/shared/constants";

interface SpinnerProps {
  color?: keyof typeof COLORS;
}

const Spinner = ({ color = "white" }: SpinnerProps) => {
  return <ActivityIndicator size="small" color={COLORS[color]} />;
};

export default Spinner;
