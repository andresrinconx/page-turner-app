/**
 * book-cover
 * BookCover component
 *
 * Created by Andres Rincon on 22/04/25
 */

import React from "react";
import Button from "@/shared/components/ui/button";
import Image from "@/shared/components/ui/image";
import { useImagePicker } from "@/shared/hooks/use-image-picker";
import Box from "@/shared/components/ui/box";
import CloseIcon from "@/shared/components/icons/close";
import { SIZES, COLORS } from "@/shared/constants";
import { ImagePickerAsset } from "expo-image-picker";

interface BookCoverPickerProps {
  onImagePicked: (image: ImagePickerAsset | null) => void;
}

const BookCoverPicker = ({ onImagePicked }: BookCoverPickerProps) => {
  const { image, pickImage, removeImage } = useImagePicker({
    onImagePicked,
  });

  const HEIGHT = 200;
  const WIDTH = 150;

  return (
    <>
      {image ? (
        <Box
          style={{
            borderWidth: 1,
            borderColor: COLORS.progress,
            backgroundColor: COLORS.progress,
            borderRadius: SIZES.borderRadius,
          }}>
          <CloseIcon
            color="overlay"
            onPress={removeImage}
            style={{
              position: "absolute",
              top: -3,
              right: -3,
              zIndex: 1,
            }}
          />
          <Image source={{ uri: image.uri }} width={WIDTH} height={HEIGHT} />
        </Box>
      ) : (
        <Button
          variant="outline"
          style={{ height: HEIGHT, width: WIDTH }}
          onPress={() => pickImage()}>
          Pick cover
        </Button>
      )}
    </>
  );
};

export default BookCoverPicker;
