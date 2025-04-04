import {
  Image as RNImage,
  StyleProp,
  ImageStyle,
  ImageResizeMode,
  ImageSourcePropType,
} from "react-native";
import { createCommonStyles } from "../../lib/utils/create-common-styles";

interface ImageProps extends CommonStyleProps {
  source: ImageSourcePropType | undefined;
  resizeMode?: ImageResizeMode;
  style?: StyleProp<ImageStyle>;
}

const Image = ({ source, style, ...props }: ImageProps) => {
  const commonStyles = createCommonStyles(props);

  return (
    <RNImage
      source={source}
      resizeMode="contain"
      style={[commonStyles, style]}
      {...props}
    />
  );
};

export default Image;
