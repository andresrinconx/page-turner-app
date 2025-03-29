import { render } from "@testing-library/react-native";
import { View } from "react-native";
import Box from "../box";

describe("Box", () => {
  it("renders correctly with default props", () => {
    const { getByTestId } = render(<Box testID="box" />);
    const box = getByTestId("box");
    expect(box).toBeTruthy();
    expect(box.type).toBe("View");
  });

  it("applies backgroundColor correctly", () => {
    const backgroundColor = "#FF0000";
    const { getByTestId } = render(
      <Box testID="box" backgroundColor={backgroundColor} />,
    );
    const box = getByTestId("box");
    expect(box.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor,
        }),
      ]),
    );
  });

  it("applies custom styles", () => {
    const customStyle = { padding: 10 };
    const { getByTestId } = render(<Box testID="box" style={customStyle} />);
    const box = getByTestId("box");
    expect(box.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining(customStyle)]),
    );
  });

  it("renders children correctly", () => {
    const testId = "test-box";
    const childTestId = "child-element";
    const { getByTestId } = render(
      <Box testID={testId}>
        <View testID={childTestId}>
          <View>Test Content</View>
        </View>
      </Box>,
    );

    const box = getByTestId(testId);
    const child = getByTestId(childTestId);

    expect(box).toBeTruthy();
    expect(child).toBeTruthy();
    expect(box.props.children).toBeTruthy();
  });
});
