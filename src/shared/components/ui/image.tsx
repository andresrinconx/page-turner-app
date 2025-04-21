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
  style?: StyleProp<ImageStyle>;
}

const Image = ({ source, style, ...props }: ImageProps) => {
  return (
    <RNImage source={source} resizeMode="contain" style={[style]} {...props} />
  );
};

export default Image;
