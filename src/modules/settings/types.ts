/**
 * types.ts
 * Settings module types
 *
 * Created by Andres Rincon on 28/4/25.
 */

export interface WeekdayItem {
  id: number;
  label: string;
  selected: boolean;
}

export interface NotificationsState {
  weekdays: WeekdayItem[];
  startDate: Date;
  reminderTime: Date;
}

export interface NotificationsContextProps {
  weekdays: WeekdayItem[];
  startDate: Date;
  reminderTime: Date;
  toggleWeekday: (id: number) => void;
  setStartDate: (date: Date) => void;
  setReminderTime: (time: Date) => void;
  resetToDefaults: () => void;
}
