import { render } from "@testing-library/react-native";
import Typography from "../../components/ui/typography";

jest.mock("../../lib/hooks/useThemeColor", () => ({
  useThemeColor: jest.fn().mockReturnValue("#000000"),
}));

describe("Typography", () => {
  it("renders default text correctly", () => {
    const { getByText } = render(<Typography>Hello World</Typography>);
    const textElement = getByText("Hello World");
    expect(textElement).toBeTruthy();
    expect(textElement.props.className).toBe("text-base leading-6");
  });

  it("renders different typography types correctly", () => {
    const types = ["title", "subtitle", "defaultSemiBold", "link"] as const;

    types.forEach((type) => {
      const { getByText } = render(
        <Typography type={type}>Test Text</Typography>,
      );
      const textElement = getByText("Test Text");
      expect(textElement).toBeTruthy();

      switch (type) {
        case "title":
          expect(textElement.props.className).toBe(
            "text-3xl font-bold leading-8",
          );
          break;
        case "subtitle":
          expect(textElement.props.className).toBe("text-xl font-bold");
          break;
        case "defaultSemiBold":
          expect(textElement.props.className).toBe(
            "text-base leading-6 font-semibold",
          );
          break;
        case "link":
          expect(textElement.props.className).toBe(
            "text-base leading-[30px] text-[#0a7ea4]",
          );
          break;
      }
    });
  });

  it("applies custom styles correctly", () => {
    const customStyle = { marginTop: 10 };
    const { getByText } = render(
      <Typography style={customStyle}>Styled Text</Typography>,
    );
    const textElement = getByText("Styled Text");
    expect(textElement.props.style).toEqual([
      { color: "#000000" },
      { marginTop: 10 },
    ]);
  });

  it("passes through additional Text props", () => {
    const { getByText } = render(
      <Typography numberOfLines={2} ellipsizeMode="tail">
        Long Text Content
      </Typography>,
    );
    const textElement = getByText("Long Text Content");
    expect(textElement.props.numberOfLines).toBe(2);
    expect(textElement.props.ellipsizeMode).toBe("tail");
  });
});
