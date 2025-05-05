/**
 * button.test.tsx
 * Button component test
 *
 * Created by Andres Rincon on 05/05/25
 */

import { render, fireEvent } from "@testing-library/react-native";
import Button from "@/shared/components/ui/button";
import { View, ActivityIndicator } from "react-native";
import { COLORS } from "@/shared/constants";

describe("Button", () => {
  it("renders correctly with default props", () => {
    const { getByText } = render(<Button>Test Button</Button>);

    const buttonText = getByText("Test Button");

    expect(buttonText).toBeTruthy();
  });

  it("renders with correct styling based on variant", () => {
    const { getByTestId, rerender } = render(
      <Button testID="button" variant="primary">
        Primary
      </Button>,
    );

    let button = getByTestId("button");
    expect(button).toHaveStyle({ backgroundColor: COLORS.primary });

    rerender(
      <Button testID="button" variant="outline">
        Outline
      </Button>,
    );
    button = getByTestId("button");
    expect(button).toHaveStyle({ borderWidth: 1, borderColor: COLORS.primary });

    rerender(
      <Button testID="button" variant="ghost">
        Ghost
      </Button>,
    );
    button = getByTestId("button");
    expect(button).toHaveStyle({
      backgroundColor: "transparent",
      borderWidth: 0,
    });

    rerender(
      <Button testID="button" variant="icon">
        Icon
      </Button>,
    );
    button = getByTestId("button");
    expect(button).toHaveStyle({ backgroundColor: "transparent", padding: 8 });
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock}>Press Me</Button>,
    );

    fireEvent.press(getByText("Press Me"));

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled prop is true", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button testID="button" disabled onPress={onPressMock}>
        Disabled Button
      </Button>,
    );

    const buttonElement = getByTestId("button");
    fireEvent.press(buttonElement);

    expect(buttonElement.props.accessibilityState).toEqual(
      expect.objectContaining({ disabled: true }),
    );
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it("should show loading spinner when loading is true", () => {
    const { queryByText, UNSAFE_getByType } = render(
      <Button loading>Loading Button</Button>,
    );

    expect(queryByText("Loading Button")).toBeNull();
    expect(UNSAFE_getByType(ActivityIndicator)).toBeTruthy();
  });

  it("renders children correctly when passing an array", () => {
    const { getByText } = render(<Button>{["First", "Second"]}</Button>);

    expect(getByText("First")).toBeTruthy();
    expect(getByText("Second")).toBeTruthy();
  });

  it("renders non-string children correctly", () => {
    const { UNSAFE_getByType } = render(
      <Button>
        <View testID="custom-view" />
      </Button>,
    );

    expect(UNSAFE_getByType(View)).toBeTruthy();
  });

  it("applies custom styles correctly", () => {
    const customStyle = { backgroundColor: "purple", margin: 10 };
    const { getByTestId } = render(
      <Button testID="button" style={customStyle}>
        Styled Button
      </Button>,
    );

    const buttonElement = getByTestId("button");

    expect(buttonElement).toHaveStyle({
      backgroundColor: "purple",
      margin: 10,
    });
  });
});
