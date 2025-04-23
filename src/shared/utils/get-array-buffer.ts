/**
 * get-array-buffer
 * GetArrayBuffer function to get the array buffer of an image
 *
 * Created by Andres Rincon on 23/04/25
 */

import { ImagePickerAsset } from "expo-image-picker";

export const getArrayBuffer = async (
  userId: string,
  image: ImagePickerAsset,
) => {
  const imageRes = await fetch(image.uri);
  const arraybuffer = await imageRes.arrayBuffer();
  const fileExt = image.uri.split(".").pop()?.toLowerCase() ?? "jpeg";
  const path = `${userId}/${new Date().getTime()}.${
    image.mimeType ?? "image/jpeg"
  }`;

  return { arraybuffer, fileExt, path };
};
