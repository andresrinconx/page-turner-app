/**
 * chevron-right
 * ChevronRight component
 *
 * Created by Andres Rincon on 02/05/25
 */

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "@/shared/constants";

interface ChevronRightProps {
  color: keyof typeof COLORS;
}

const ChevronRight = ({ color }: ChevronRightProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        fill={COLORS[color]}
        d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"
      />
    </Svg>
  );
};

export default ChevronRight;
