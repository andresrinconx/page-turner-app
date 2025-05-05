/**
 * start-date-section.tsx
 * Start date section component for settings screen
 *
 * Created by Andres Rincon on 28/04/25
 */

import React from "react";
import Box from "@/shared/components/ui/box";
import Typography from "@/shared/components/ui/typography";
import Calendar from "@/shared/components/icons/calendar";
import { Picker } from "@/shared/components/ui/picker";

interface StartDateSectionProps {
  startDate: Date;
  onDateChange: (date: Date) => void;
}

export const StartDateSection = ({
  startDate,
  onDateChange,
}: StartDateSectionProps) => {
  return (
    <Box style={{ marginBottom: 24 }}>
      <Box
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
        }}>
        <Calendar color="text" />
        <Typography variant="headline3" style={{ marginLeft: 8 }}>
          Start Date
        </Typography>
      </Box>

      <Picker
        label="Start Date"
        value={startDate}
        onChange={onDateChange}
        mode="date"
      />
    </Box>
  );
};
