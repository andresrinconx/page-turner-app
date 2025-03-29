import { render } from "@testing-library/react-native";
import Typography from "../typography";
import { COLORS } from "../../../lib/constants";

describe("Typography", () => {
  it("renders with default props", () => {
    const { getByText } = render(<Typography>Hello World</Typography>);
    const text = getByText("Hello World");
    expect(text).toBeTruthy();
    expect(text.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontSize: 16,
          lineHeight: 24,
        }),
      ]),
    );
  });

  it("renders with different variants", () => {
    const variants = [
      "paragraph1",
      "paragraph2",
      "paragraph3",
      "headline1",
      "headline2",
      "headline3",
      "headline4",
      "label1",
      "label2",
    ] as const;

    variants.forEach(variant => {
      const { getByText } = render(
        <Typography variant={variant}>Test Text</Typography>,
      );
      const text = getByText("Test Text");
      expect(text).toBeTruthy();
    });
  });

  it("applies primary and secondary types correctly", () => {
    const { getByText: getPrimary } = render(
      <Typography type="primary">Primary</Typography>,
    );
    const { getByText: getSecondary } = render(
      <Typography type="secondary">Secondary</Typography>,
    );

    const primaryText = getPrimary("Primary");
    const secondaryText = getSecondary("Secondary");

    expect(primaryText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: COLORS.text,
        }),
      ]),
    );

    expect(secondaryText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: COLORS.secondaryText,
        }),
      ]),
    );
  });

  it("applies different font weights", () => {
    const weights = ["light", "normal", "medium", "semibold", "bold"] as const;

    weights.forEach(weight => {
      const { getByText } = render(
        <Typography weight={weight}>Weight Test</Typography>,
      );
      const text = getByText("Weight Test");
      expect(text.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            fontWeight: expect.any(String),
          }),
        ]),
      );
    });
  });

  it("applies custom color", () => {
    const customColor = "#FF0000";
    const { getByText } = render(
      <Typography color={customColor}>Colored Text</Typography>,
    );
    const text = getByText("Colored Text");
    expect(text.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: customColor,
        }),
      ]),
    );
  });

  it("applies different text alignments", () => {
    const alignments = ["left", "center", "right"] as const;

    alignments.forEach(align => {
      const { getByText } = render(
        <Typography textAlign={align}>Aligned Text</Typography>,
      );
      const text = getByText("Aligned Text");
      expect(text.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            textAlign: align,
          }),
        ]),
      );
    });
  });

  it("applies custom styles", () => {
    const customStyle = { marginTop: 10 };
    const { getByText } = render(
      <Typography style={customStyle}>Styled Text</Typography>,
    );
    const text = getByText("Styled Text");
    expect(text.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining(customStyle)]),
    );
  });
});
