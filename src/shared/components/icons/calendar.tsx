/**
 * calendar
 * Calendar icon component
 *
 * Created by Andres Rincon on 02/05/25
 */

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "@/shared/constants";

interface CalendarProps {
  color: keyof typeof COLORS;
}

const Calendar = ({ color }: CalendarProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        fill={COLORS[color]}
        d="M12 14q-.425 0-.712-.288T11 13t.288-.712T12 12t.713.288T13 13t-.288.713T12 14m-4 0q-.425 0-.712-.288T7 13t.288-.712T8 12t.713.288T9 13t-.288.713T8 14m8 0q-.425 0-.712-.288T15 13t.288-.712T16 12t.713.288T17 13t-.288.713T16 14m-4 4q-.425 0-.712-.288T11 17t.288-.712T12 16t.713.288T13 17t-.288.713T12 18m-4 0q-.425 0-.712-.288T7 17t.288-.712T8 16t.713.288T9 17t-.288.713T8 18m8 0q-.425 0-.712-.288T15 17t.288-.712T16 16t.713.288T17 17t-.288.713T16 18M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"
      />
    </Svg>
  );
};

export default Calendar;
