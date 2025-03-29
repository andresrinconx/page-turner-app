/* eslint-disable prettier/prettier */
import { render, fireEvent } from "@testing-library/react-native";
import { View } from "react-native";
import Button from "../button";
import { COLORS } from "../../../lib/constants";

describe("Button", () => {
  it("renders with default props", () => {
    const { getByText } = render(<Button>Click me</Button>);
    const button = getByText("Click me");
    expect(button).toBeTruthy();
  });

  it("renders different variants correctly", () => {
    const variants = ["primary", "outline", "ghost"] as const;

    variants.forEach(variant => {
      const { getByTestId } = render(
        <Button variant={variant} testID="test-button">
          Test Button
        </Button>,
      );
      const button = getByTestId("test-button");
      expect(button.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining(
            variant === "primary"
              ? { backgroundColor: COLORS.primary, borderWidth: 0 }
              : variant === "outline"
                ? {
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: COLORS.primary,
                }
                : { backgroundColor: "transparent", borderWidth: 0 },
          ),
        ]),
      );
    });
  });

  it("renders different sizes correctly", () => {
    const sizes = ["sm", "md", "lg", "icon"] as const;

    sizes.forEach(size => {
      const { getByTestId } = render(
        <Button size={size} testID="test-button">
          Size Test
        </Button>,
      );
      const button = getByTestId("test-button");
      expect(button.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining(
            size === "sm"
              ? { paddingHorizontal: 12, paddingVertical: 6 }
              : size === "md"
                ? { paddingHorizontal: 16, paddingVertical: 8 }
                : size === "lg"
                  ? { paddingHorizontal: 24, paddingVertical: 12 }
                  : { padding: 8 },
          ),
        ]),
      );
    });
  });

  it("handles loading state correctly", () => {
    const { getByTestId, queryByText } = render(
      <Button loading testID="test-button">
        Loading Button
      </Button>,
    );

    expect(queryByText("Loading Button")).toBeNull();
    expect(getByTestId("test-button")).toBeTruthy();
  });

  it("handles disabled state correctly", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Button disabled onPress={onPress} testID="test-button">
        Disabled Button
      </Button>,
    );

    const button = getByTestId("test-button");
    expect(button.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          opacity: 0.5,
        }),
      ]),
    );

    fireEvent.press(button);
    expect(onPress).not.toHaveBeenCalled();
  });

  it("handles fullWidth prop correctly", () => {
    const { getByTestId } = render(
      <Button fullWidth testID="test-button">
        Full Width
      </Button>,
    );
    const button = getByTestId("test-button");
    expect(button.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          width: "100%",
        }),
      ]),
    );
  });

  it("handles press events correctly", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Button onPress={onPress} testID="test-button">
        Press Me
      </Button>,
    );
    const button = getByTestId("test-button");

    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("renders children correctly when not a string", () => {
    const { getByTestId } = render(
      <Button testID="test-button">
        <View testID="custom-child" />
      </Button>,
    );
    expect(getByTestId("custom-child")).toBeTruthy();
  });
});
