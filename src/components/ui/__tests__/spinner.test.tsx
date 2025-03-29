import { render } from "@testing-library/react-native";
import Spinner from "../spinner";
import { COLORS } from "../../../lib/constants";

describe("Spinner", () => {
  it("renders correctly", () => {
    const { UNSAFE_getByProps } = render(<Spinner />);
    const spinner = UNSAFE_getByProps({ size: "small" });
    expect(spinner).toBeTruthy();
  });

  it("has correct props", () => {
    const { UNSAFE_getByProps } = render(<Spinner />);
    const spinner = UNSAFE_getByProps({ size: "small" });
    expect(spinner.props.size).toBe("small");
    expect(spinner.props.color).toBe(COLORS.primary);
  });
});
