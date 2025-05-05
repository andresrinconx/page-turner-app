/**
 * image.tsx
 * Image component with optional height and width.
 *
 * Created by Andres Rincon on 21/4/25.
 */

import {
  Image as RNImage,
  StyleProp,
  ImageStyle,
  ImageResizeMode,
  ImageSourcePropType,
} from "react-native";

interface ImageProps {
  source: ImageSourcePropType | undefined;
  resizeMode?: ImageResizeMode;
  height?: number;
  width?: number;
  style?: StyleProp<ImageStyle>;
}

const Image = ({
  source,
  resizeMode = "contain",
  style,
  height,
  width,
  ...props
}: ImageProps) => {
  return (
    <RNImage
      source={source}
      resizeMode={resizeMode}
      style={[style, { height, width }]}
      {...props}
    />
  );
};

export default Image;
