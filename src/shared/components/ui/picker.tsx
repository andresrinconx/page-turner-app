/**
 * Picker
 * Custom picker component that integrates with react-native-date-picker
 *
 * Created by Andres Rincon on 28/04/25
 */

import React, { useState } from "react";
import { Pressable } from "react-native";
import DatePicker from "react-native-date-picker";
import ChevronRight from "@/shared/components/icons/chevron-right";
import Box from "@/shared/components/ui/box";
import Typography from "@/shared/components/ui/typography";

interface PickerProps {
  label: string;
  value: Date;
  onChange: (date: Date) => void;
  mode?: "date" | "time";
}

export const Picker = ({
  label,
  value,
  onChange,
  mode = "date",
}: PickerProps) => {
  const [open, setOpen] = useState(false);

  const handleConfirm = (date: Date) => {
    setOpen(false);
    onChange(date);
  };

  const formatValue = () => {
    if (mode === "date") {
      return value.toLocaleDateString();
    }
    return value.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      <Pressable onPress={() => setOpen(true)}>
        <Box
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 16,
            borderBottomWidth: 1,
            borderBottomColor: "#E5E5E5",
          }}>
          <Typography variant="paragraph1" style={{ color: "#25292e" }}>
            {label}
          </Typography>
          <Box style={{ flexDirection: "row", alignItems: "center" }}>
            <Typography
              variant="paragraph1"
              style={{ color: "#0ea5e9", marginRight: 8 }}>
              {formatValue()}
            </Typography>
            <ChevronRight color="primary" />
          </Box>
        </Box>
      </Pressable>

      <DatePicker
        modal
        open={open}
        date={value}
        onConfirm={handleConfirm}
        onCancel={() => setOpen(false)}
        mode={mode}
      />
    </>
  );
};
