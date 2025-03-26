import { ActivityIndicator } from "react-native";
import { COLORS } from "../../lib/constants";

const Spinner = () => {
  return <ActivityIndicator size="small" color={COLORS.primary} />;
};

export default Spinner;
