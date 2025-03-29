import { render, fireEvent } from "@testing-library/react-native";
import { View } from "react-native";
import Input from "../input";

describe("Input", () => {
  it("renders with default props", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" />);
    const input = getByPlaceholderText("Enter text");
    expect(input).toBeTruthy();
  });

  it("renders different variants correctly", () => {
    const variants = ["primary", "outlined"] as const;

    variants.forEach(variant => {
      const { UNSAFE_getByType } = render(
        <Input
          variant={variant}
          testID="test-input"
          placeholder="Test Input"
        />,
      );

      const inputContainer = UNSAFE_getByType(View);

      expect(inputContainer).toBeTruthy();
    });
  });

  it("handles error state correctly", () => {
    const { getByText } = render(
      <Input
        error={true}
        errorMessage="This is an error message"
        testID="test-input"
        placeholder="Error Input"
      />,
    );

    const errorMessage = getByText("This is an error message");
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.props.children).toBe("This is an error message");
  });

  it("renders label correctly", () => {
    const { getByText } = render(
      <Input label="Input Label" placeholder="Labeled Input" />,
    );

    const label = getByText("Input Label");
    expect(label).toBeTruthy();
    expect(label.props.children).toBe("Input Label");
  });

  it("handles text input events correctly", () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <Input onChangeText={onChangeText} placeholder="Type here" />,
    );

    const input = getByPlaceholderText("Type here");
    fireEvent.changeText(input, "Hello World");
    expect(onChangeText).toHaveBeenCalledWith("Hello World");
  });

  it("renders left icon correctly", () => {
    const { UNSAFE_getByProps } = render(
      <Input
        leftIcon={<View testID="left-icon" />}
        placeholder="Input with left icon"
      />,
    );

    const leftIconContainer = UNSAFE_getByProps({ testID: "left-icon" });
    expect(leftIconContainer).toBeTruthy();
  });

  it("renders right icon correctly", () => {
    const { UNSAFE_getByProps } = render(
      <Input
        rightIcon={<View testID="right-icon" />}
        placeholder="Input with right icon"
      />,
    );

    const rightIconContainer = UNSAFE_getByProps({ testID: "right-icon" });
    expect(rightIconContainer).toBeTruthy();
  });

  it("passes additional TextInput props correctly", () => {
    const { getByPlaceholderText } = render(
      <Input
        placeholder="Test props"
        maxLength={10}
        autoCapitalize="none"
        secureTextEntry={true}
      />,
    );

    const input = getByPlaceholderText("Test props");
    expect(input.props.maxLength).toBe(10);
    expect(input.props.autoCapitalize).toBe("none");
    expect(input.props.secureTextEntry).toBe(true);
  });
});
