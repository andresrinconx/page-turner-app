import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface BookIconProps {
  color: string;
}

const BookIcon = ({ color }: BookIconProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm5-11l2.5-1.5L16 11V4h-5z"
      />
    </Svg>
  );
};

export default BookIcon;
