/**
 * notifications-permission.ts
 * Notifications permission service
 *
 * Created by Andres Rincon on 28/4/25.
 */

import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";

export enum NotificationsPermissionStatus {
  GRANTED = "granted",
  DENIED = "denied",
  UNDETERMINED = "undetermined",
}

export const requestNotificationsPermission = async (): Promise<{
  status: string;
}> => {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    return { status: finalStatus };
  }

  return { status: "denied" };
};

export const checkNotificationsPermission =
  async (): Promise<NotificationsPermissionStatus> => {
    if (!Device.isDevice) {
      return NotificationsPermissionStatus.DENIED;
    }

    const { status } = await Notifications.getPermissionsAsync();

    switch (status) {
      case "granted":
        return NotificationsPermissionStatus.GRANTED;
      case "denied":
        return NotificationsPermissionStatus.DENIED;
      default:
        return NotificationsPermissionStatus.UNDETERMINED;
    }
  };

export const setupNotificationHandler = (): void => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
};
