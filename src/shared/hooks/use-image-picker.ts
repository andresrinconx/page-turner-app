/**
 * use-image-picker.ts
 * Use image picker hook
 *
 * Created by Andres Rincon on 21/4/25.
 */

import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { ImagePickerAsset } from "expo-image-picker";
export const useImagePicker = ({
  onImagePicked,
}: {
  onImagePicked: (image: ImagePickerAsset | null) => void;
}) => {
  const [image, setImage] = useState<ImagePickerAsset | null>(null);

  const pickImage = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsMultipleSelection: false,
      allowsEditing: true,
      quality: 1,
      exif: false,
    });

    if (!res.canceled) {
      setImage(res.assets[0]);
      onImagePicked(res.assets[0]);
    }
  };

  const removeImage = () => {
    setImage(null);
    onImagePicked(null);
  };

  return { image, pickImage, removeImage };
};
