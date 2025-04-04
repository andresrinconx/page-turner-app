import { COLORS } from "./constants";
import type { ViewStyle, TextStyle } from "react-native";

declare global {
  type FlexProps = {
    flex?: number;
    flexDirection?: ViewStyle["flexDirection"];
    justifyContent?: ViewStyle["justifyContent"];
    alignItems?: ViewStyle["alignItems"];
    flexWrap?: ViewStyle["flexWrap"];
    gap?: number;
  };

  type SpacingProps = {
    p?: number;
    px?: number;
    py?: number;
    pt?: number;
    pb?: number;
    pl?: number;
    pr?: number;
    m?: number;
    mx?: number;
    my?: number;
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
  };

  type PositionProps = {
    position?: ViewStyle["position"];
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };

  type SizingProps = {
    w?: number | string;
    h?: number | string;
    minW?: number | string;
    minH?: number | string;
    maxW?: number | string;
    maxH?: number | string;
  };

  type ColorProps = {
    bg?: keyof typeof COLORS;
    color?: keyof typeof COLORS;
  };

  type TypographyProps = {
    fontSize?: number;
    lineHeight?: number;
    fontWeight?: TextStyle["fontWeight"];
    textAlign?: TextStyle["textAlign"];
    fontFamily?: string;
    letterSpacing?: number;
    textDecorationLine?: TextStyle["textDecorationLine"];
    textTransform?: TextStyle["textTransform"];
  };

  type BorderProps = {
    borderWidth?: number;
    borderTopWidth?: number;
    borderBottomWidth?: number;
    borderLeftWidth?: number;
    borderRightWidth?: number;
    borderRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    borderStyle?: ViewStyle["borderStyle"];
    borderColor?: keyof typeof COLORS;
  };

  type CommonStyleProps = FlexProps &
    SpacingProps &
    SizingProps &
    PositionProps &
    ColorProps &
    TypographyProps &
    BorderProps;
}

export {};
