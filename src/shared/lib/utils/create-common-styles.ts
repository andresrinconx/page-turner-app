import { COLORS } from "../constants";

export const createCommonStyles = (props: CommonStyleProps) => {
  const styles: any = {};

  // Flex styles
  if (props.flex !== undefined) styles.flex = props.flex;
  if (props.flexDirection) styles.flexDirection = props.flexDirection;
  if (props.justifyContent) styles.justifyContent = props.justifyContent;
  if (props.alignItems) styles.alignItems = props.alignItems;
  if (props.flexWrap) styles.flexWrap = props.flexWrap;
  if (props.gap !== undefined) styles.gap = props.gap;

  // Spacing styles
  if (props.p !== undefined) styles.padding = props.p;
  if (props.px !== undefined) {
    styles.paddingHorizontal = props.px;
  }
  if (props.py !== undefined) {
    styles.paddingVertical = props.py;
  }
  if (props.pt !== undefined) styles.paddingTop = props.pt;
  if (props.pb !== undefined) styles.paddingBottom = props.pb;
  if (props.pl !== undefined) styles.paddingLeft = props.pl;
  if (props.pr !== undefined) styles.paddingRight = props.pr;
  if (props.m !== undefined) styles.margin = props.m;
  if (props.mx !== undefined) {
    styles.marginHorizontal = props.mx;
  }
  if (props.my !== undefined) {
    styles.marginVertical = props.my;
  }
  if (props.mt !== undefined) styles.marginTop = props.mt;
  if (props.mb !== undefined) styles.marginBottom = props.mb;
  if (props.ml !== undefined) styles.marginLeft = props.ml;
  if (props.mr !== undefined) styles.marginRight = props.mr;

  // Position styles
  if (props.position) styles.position = props.position;
  if (props.top !== undefined) styles.top = props.top;
  if (props.bottom !== undefined) styles.bottom = props.bottom;
  if (props.left !== undefined) styles.left = props.left;
  if (props.right !== undefined) styles.right = props.right;

  // Sizing styles
  if (props.w !== undefined) styles.width = props.w;
  if (props.h !== undefined) styles.height = props.h;
  if (props.minW !== undefined) styles.minWidth = props.minW;
  if (props.minH !== undefined) styles.minHeight = props.minH;
  if (props.maxW !== undefined) styles.maxWidth = props.maxW;
  if (props.maxH !== undefined) styles.maxHeight = props.maxH;

  // Color styles
  if (props.bg) styles.backgroundColor = COLORS[props.bg];
  if (props.color) styles.color = COLORS[props.color];

  // Typography styles
  if (props.fontSize !== undefined) styles.fontSize = props.fontSize;
  if (props.lineHeight !== undefined) styles.lineHeight = props.lineHeight;
  if (props.fontWeight) styles.fontWeight = props.fontWeight;
  if (props.textAlign) styles.textAlign = props.textAlign;
  if (props.fontFamily) styles.fontFamily = props.fontFamily;
  if (props.letterSpacing !== undefined)
    styles.letterSpacing = props.letterSpacing;
  if (props.textDecorationLine)
    styles.textDecorationLine = props.textDecorationLine;
  if (props.textTransform) styles.textTransform = props.textTransform;

  // Border styles
  if (props.borderWidth !== undefined) styles.borderWidth = props.borderWidth;
  if (props.borderTopWidth !== undefined)
    styles.borderTopWidth = props.borderTopWidth;
  if (props.borderBottomWidth !== undefined)
    styles.borderBottomWidth = props.borderBottomWidth;
  if (props.borderLeftWidth !== undefined)
    styles.borderLeftWidth = props.borderLeftWidth;
  if (props.borderRightWidth !== undefined)
    styles.borderRightWidth = props.borderRightWidth;
  if (props.borderRadius !== undefined)
    styles.borderRadius = props.borderRadius;
  if (props.borderTopLeftRadius !== undefined)
    styles.borderTopLeftRadius = props.borderTopLeftRadius;
  if (props.borderTopRightRadius !== undefined)
    styles.borderTopRightRadius = props.borderTopRightRadius;
  if (props.borderBottomLeftRadius !== undefined)
    styles.borderBottomLeftRadius = props.borderBottomLeftRadius;
  if (props.borderBottomRightRadius !== undefined)
    styles.borderBottomRightRadius = props.borderBottomRightRadius;
  if (props.borderStyle) styles.borderStyle = props.borderStyle;
  if (props.borderColor) styles.borderColor = COLORS[props.borderColor];

  return styles;
};
