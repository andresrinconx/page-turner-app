/**
 * constants.ts
 * Settings module constants
 *
 * Created by Andres Rincon on 28/4/25.
 */

import { WeekdayItem } from "./types";

export const DEFAULT_WEEKDAYS: WeekdayItem[] = [
  { id: 1, label: "M", selected: true },
  { id: 2, label: "T", selected: true },
  { id: 3, label: "W", selected: true },
  { id: 4, label: "T", selected: true },
  { id: 5, label: "F", selected: true },
  { id: 6, label: "S", selected: true },
  { id: 7, label: "S", selected: true },
];

export const STORAGE_KEYS = {
  WEEKDAYS: "notifications_weekdays",
  START_DATE: "notifications_start_date",
  REMINDER_TIME: "notifications_reminder_time",
};

export const NOTIFICATION_DEFAULTS = {
  TITLE: "Page Turner",
  BODY: "Time to read your book today!",
  HOUR: 8,
  MINUTE: 0,
};
