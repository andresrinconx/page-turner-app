/**
 * settings.tsx
 * Settings icon component
 *
 * Created by Andres Rincon on 21/4/25.
 */

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "@/shared/constants";

interface SettingsIconProps {
  color: keyof typeof COLORS;
}

const SettingsIcon = ({ color }: SettingsIconProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        fill={COLORS[color]}
        d="M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2z"
      />
    </Svg>
  );
};

export default SettingsIcon;
