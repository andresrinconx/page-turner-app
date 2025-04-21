import Svg, { Path } from "react-native-svg";
import { COLORS } from "@/shared/constants";

interface PlusIconProps {
  color: keyof typeof COLORS;
}

const PlusIcon = ({ color }: PlusIconProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path fill={COLORS[color]} d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
    </Svg>
  );
};

export default PlusIcon;
