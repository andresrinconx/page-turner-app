/**
 * frequency-section.tsx
 * Frequency section component for settings screen
 *
 * Created by Andres Rincon on 28/04/25
 */

import React from "react";
import { Pressable } from "react-native";
import Box from "@/shared/components/ui/box";
import Typography from "@/shared/components/ui/typography";
import Repeat from "@/shared/components/icons/repeat";
import { WeekdayItem } from "@/modules/settings/types";

interface FrequencySectionProps {
  weekdays: WeekdayItem[];
  onWeekdayPress: (id: number) => void;
}

export const FrequencySection = ({
  weekdays,
  onWeekdayPress,
}: FrequencySectionProps) => {
  return (
    <Box style={{ marginBottom: 24 }}>
      <Box
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
        }}>
        <Repeat color="text" />
        <Typography variant="headline3" style={{ marginLeft: 8 }}>
          Frequency
        </Typography>
      </Box>

      <Box style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {weekdays.map(day => (
          <Pressable key={day.id} onPress={() => onWeekdayPress(day.id)}>
            <Box
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: day.selected ? "#10b981" : "#f3f4f6",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Typography
                variant="paragraph1"
                style={{
                  color: day.selected ? "#ffffff" : "#6b7280",
                  fontWeight: "500",
                }}>
                {day.label}
              </Typography>
            </Box>
          </Pressable>
        ))}
      </Box>
    </Box>
  );
};
