/**
 * repeat
 * Repeat component
 *
 * Created by Andres Rincon on 02/05/25
 */

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "@/shared/constants";

interface RepeatProps {
  color: keyof typeof COLORS;
}

const Repeat = ({ color }: RepeatProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        fill={COLORS[color]}
        d="m6.85 19l.85.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L3.7 18.7q-.15-.15-.213-.325T3.426 18t.063-.375t.212-.325l2.575-2.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7l-.85.85H17v-3q0-.425.288-.712T18 13t.713.288T19 14v3q0 .825-.587 1.413T17 19zm10.3-12H7v3q0 .425-.288.713T6 11t-.712-.288T5 10V7q0-.825.588-1.412T7 5h10.15l-.85-.85q-.3-.3-.288-.7t.288-.7q.3-.3.712-.312t.713.287L20.3 5.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-2.575 2.575q-.3.3-.712.288T16.3 9.25q-.275-.3-.288-.7t.288-.7z"
      />
    </Svg>
  );
};

export default Repeat;
