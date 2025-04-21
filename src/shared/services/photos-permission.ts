import { Alert, Linking } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { PhotosPermissionStatus } from "@/shared/types";

export const requestPhotosPermission =
  async (): Promise<PhotosPermissionStatus> => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      if (status === "denied") {
        manualPermissionRequest();
      }

      return PhotosPermissionStatus.DENIED;
    }

    return PhotosPermissionStatus.GRANTED;
  };

export const checkPhotosPermission = async () => {
  const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();

  switch (status) {
    case "granted":
      return PhotosPermissionStatus.GRANTED;
    case "denied":
      return PhotosPermissionStatus.DENIED;
    default:
      return PhotosPermissionStatus.UNDETERMINED;
  }
};

const manualPermissionRequest = async () => {
  Alert.alert(
    "Photos permission required",
    "Please enable photos permission in the app settings",
    [
      {
        text: "Open settings",
        onPress: () => {
          Linking.openSettings();
        },
      },
      {
        text: "Cancel",
        style: "destructive",
      },
    ],
  );
};
