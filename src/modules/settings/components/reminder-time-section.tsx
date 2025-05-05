/**
 * reminder-time-section.tsx
 * Reminder time section component for settings screen
 *
 * Created by Andres Rincon on 28/04/25
 */

import React from "react";
import Box from "@/shared/components/ui/box";
import Typography from "@/shared/components/ui/typography";
import Calendar from "@/shared/components/icons/calendar";
import { Picker } from "@/shared/components/ui/picker";

interface ReminderTimeSectionProps {
  reminderTime: Date;
  onTimeChange: (time: Date) => void;
}

export const ReminderTimeSection = ({
  reminderTime,
  onTimeChange,
}: ReminderTimeSectionProps) => {
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
          Reminder Time
        </Typography>
      </Box>

      <Picker
        label="Reminder Time"
        value={reminderTime}
        onChange={onTimeChange}
        mode="time"
      />
    </Box>
  );
};
