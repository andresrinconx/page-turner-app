/**
 * settings.tsx
 * Settings screen
 *
 * Created by Andres Rincon on 21/4/25.
 */

import signOut from "@/modules/auth/services/sign-out";
import Screen from "@/shared/components/templates/screen";
import { ReminderTimeSection } from "@/modules/settings/components/reminder-time-section";
import LogOut from "@/shared/components/icons/log-out";
import { FrequencySection } from "@/modules/settings/components/frequency-section";
import { StartDateSection } from "@/modules/settings/components/start-date-section";
import { useNotifications } from "@/shared/contexts/notifications-context";
import Box from "@/shared/components/ui/box";

const SettingsScreen = () => {
  const {
    weekdays,
    startDate,
    reminderTime,
    toggleWeekday,
    setStartDate,
    setReminderTime,
    resetToDefaults,
  } = useNotifications();

  const handleLogout = async () => {
    await signOut();
    resetToDefaults();
  };

  return (
    <Screen>
      <Box style={{ alignItems: "flex-end" }}>
        <LogOut color="primary" onPress={handleLogout} />
      </Box>

      <FrequencySection weekdays={weekdays} onWeekdayPress={toggleWeekday} />
      <StartDateSection startDate={startDate} onDateChange={setStartDate} />
      <ReminderTimeSection
        reminderTime={reminderTime}
        onTimeChange={setReminderTime}
      />
    </Screen>
  );
};

export default SettingsScreen;
