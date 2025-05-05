/**
 * NotificationsContext
 * NotificationsContext provider
 *
 * Created by Andres Rincon on 28/04/25
 */

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import * as Notifications from "expo-notifications";
import { getItem, setItem } from "@/shared/utils/async-storage";
import {
  requestNotificationsPermission,
  setupNotificationHandler,
} from "@/shared/utils/notifications-permission";
import {
  DEFAULT_WEEKDAYS,
  STORAGE_KEYS,
  NOTIFICATION_DEFAULTS,
} from "@/modules/settings/constants";
import {
  WeekdayItem,
  NotificationsContextProps,
} from "@/modules/settings/types";

export const NotificationsContext = createContext(
  {} as NotificationsContextProps,
);

export const NotificationsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [weekdays, setWeekdays] = useState<WeekdayItem[]>(DEFAULT_WEEKDAYS);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [reminderTime, setReminderTime] = useState<Date>(new Date());
  const [isInitialized, setIsInitialized] = useState(false);

  reminderTime.setHours(
    NOTIFICATION_DEFAULTS.HOUR,
    NOTIFICATION_DEFAULTS.MINUTE,
    0,
    0,
  );

  const loadSavedPreferences = async () => {
    try {
      const savedWeekdays = await getItem(STORAGE_KEYS.WEEKDAYS);
      const savedStartDate = await getItem(STORAGE_KEYS.START_DATE);
      const savedReminderTime = await getItem(STORAGE_KEYS.REMINDER_TIME);

      if (savedWeekdays) {
        setWeekdays(JSON.parse(savedWeekdays));
      }

      if (savedStartDate) {
        setStartDate(new Date(JSON.parse(savedStartDate)));
      }

      if (savedReminderTime) {
        setReminderTime(new Date(JSON.parse(savedReminderTime)));
      }

      setIsInitialized(true);
    } catch (error) {
      console.error("Error loading notifications preferences:", error);
      setIsInitialized(true);
    }
  };

  const savePreferences = useCallback(async () => {
    try {
      await setItem(STORAGE_KEYS.WEEKDAYS, JSON.stringify(weekdays));
      await setItem(STORAGE_KEYS.START_DATE, JSON.stringify(startDate));
      await setItem(STORAGE_KEYS.REMINDER_TIME, JSON.stringify(reminderTime));
    } catch (error) {
      console.error("Error saving notifications preferences:", error);
    }
  }, [weekdays, startDate, reminderTime]);

  const toggleWeekday = (id: number) => {
    setWeekdays(
      weekdays.map(day =>
        day.id === id ? { ...day, selected: !day.selected } : day,
      ),
    );
  };

  const updateStartDate = (date: Date) => {
    setStartDate(date);
  };

  const updateReminderTime = (time: Date) => {
    setReminderTime(time);
  };

  const resetToDefaults = async () => {
    setWeekdays(DEFAULT_WEEKDAYS);
    setStartDate(new Date());

    const defaultTime = new Date();
    defaultTime.setHours(
      NOTIFICATION_DEFAULTS.HOUR,
      NOTIFICATION_DEFAULTS.MINUTE,
      0,
      0,
    );
    setReminderTime(defaultTime);

    await Notifications.cancelAllScheduledNotificationsAsync();
  };

  const scheduleNotifications = useCallback(async () => {
    if (!isInitialized) return;

    try {
      const { status } = await requestNotificationsPermission();

      if (status !== "granted") {
        return;
      }

      await Notifications.cancelAllScheduledNotificationsAsync();

      const now = new Date();

      if (startDate > now) {
        return;
      }

      const selectedDays = weekdays
        .filter(day => day.selected)
        .map(day => day.id);

      if (selectedDays.length === 0) {
        return;
      }

      for (const dayId of selectedDays) {
        const daysDiff = dayId - (((now.getDay() + 6) % 7) + 1);
        let nextDate = new Date();

        if (daysDiff > 0) {
          nextDate.setDate(now.getDate() + daysDiff);
        } else if (daysDiff < 0) {
          nextDate.setDate(now.getDate() + daysDiff + 7);
        } else {
          const hours = reminderTime.getHours();
          const minutes = reminderTime.getMinutes();
          const currentHours = now.getHours();
          const currentMinutes = now.getMinutes();

          if (
            hours < currentHours ||
            (hours === currentHours && minutes <= currentMinutes)
          ) {
            nextDate.setDate(now.getDate() + 7);
          }
        }

        nextDate.setHours(
          reminderTime.getHours(),
          reminderTime.getMinutes(),
          0,
          0,
        );

        const trigger: Notifications.NotificationTriggerInput = {
          channelId: "default",
          date: nextDate,
          repeats: true,
        };

        await Notifications.scheduleNotificationAsync({
          content: {
            title: NOTIFICATION_DEFAULTS.TITLE,
            body: NOTIFICATION_DEFAULTS.BODY,
          },
          trigger,
        });
      }
    } catch (error) {
      console.error("Error scheduling notifications:", error);
    }
  }, [isInitialized, startDate, reminderTime, weekdays]);

  useEffect(() => {
    setupNotificationHandler();
  }, []);

  useEffect(() => {
    loadSavedPreferences();
  }, []);

  useEffect(() => {
    if (isInitialized) {
      savePreferences();
      scheduleNotifications();
    }
  }, [
    weekdays,
    startDate,
    reminderTime,
    isInitialized,
    savePreferences,
    scheduleNotifications,
  ]);

  return (
    <NotificationsContext.Provider
      value={{
        weekdays,
        startDate,
        reminderTime,
        toggleWeekday,
        setStartDate: updateStartDate,
        setReminderTime: updateReminderTime,
        resetToDefaults,
      }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => {
  return useContext(NotificationsContext);
};
