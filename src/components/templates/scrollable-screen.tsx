import Box from "../../components/ui/box";

const ScrollableScreen = ({ children }: { children?: React.ReactNode }) => {
  return <Box scrollable>{children}</Box>;
};

export default ScrollableScreen;
