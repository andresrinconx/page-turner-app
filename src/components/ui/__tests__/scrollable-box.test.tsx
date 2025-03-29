import { render } from "@testing-library/react-native";
import { View } from "react-native";
import ScrollableBox from "../scrollable-box";

describe("ScrollableBox", () => {
  it("renders correctly with default props", () => {
    const { getByTestId } = render(<ScrollableBox testID="scrollable-box" />);
    const scrollableBox = getByTestId("scrollable-box");
    expect(scrollableBox).toBeTruthy();
    expect(scrollableBox.type).toBe("RCTScrollView");
  });

  it("applies backgroundColor correctly", () => {
    const backgroundColor = "#FF0000";
    const { getByTestId } = render(
      <ScrollableBox
        testID="scrollable-box"
        backgroundColor={backgroundColor}
      />,
    );
    const scrollableBox = getByTestId("scrollable-box");
    expect(scrollableBox.props.contentContainerStyle).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor,
        }),
      ]),
    );
  });

  it("applies custom styles", () => {
    const customStyle = { padding: 10 };
    const { getByTestId } = render(
      <ScrollableBox testID="scrollable-box" style={customStyle} />,
    );
    const scrollableBox = getByTestId("scrollable-box");
    expect(scrollableBox.props.contentContainerStyle).toEqual(
      expect.arrayContaining([expect.objectContaining(customStyle)]),
    );
  });

  it("renders children correctly", () => {
    const testId = "test-scrollable-box";
    const childTestId = "child-element";
    const { getByTestId } = render(
      <ScrollableBox testID={testId}>
        <View testID={childTestId}>
          <View>Test Content</View>
        </View>
      </ScrollableBox>,
    );

    const scrollableBox = getByTestId(testId);
    const child = getByTestId(childTestId);

    expect(scrollableBox).toBeTruthy();
    expect(scrollableBox.type).toBe("RCTScrollView");
    expect(child).toBeTruthy();
  });
});
