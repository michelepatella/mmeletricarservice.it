import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CustomText from "./CustomText";

// Mock intersection observer
jest.mock("../../../hooks/useIntersectionObserver", () => ({
	__esModule: true,
	default: jest.fn(),
}));

// Definition of expected results
const customText = "Test Text";
const customTextHeadingClass = "custom-heading";
const customTextSubheadingClass = "custom-subheading";
const customTextBodyClass = "custom-body";
const customTextCaptionClass = "custom-caption";
const customTextStyle = { color: "black" };

// Run tests
describe("CustomText", () => {
	// Clear all mocks before running each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	// Test if it applies the correct class
	// based on text type
	test.each([
		["heading", customTextHeadingClass],
		["subheading", customTextSubheadingClass],
		["body", customTextBodyClass],
		["caption", customTextCaptionClass]
	])("applies correct class for %s", (type, expectedClass) => {
		render(<CustomText text={customText} type={type} />);
		expect(screen.getByText(customText)).toHaveClass(expectedClass);
	});

	// Test if it renders the text correctly
	test("renders with correct text", () => {
		render(<CustomText text={customText} />);

		expect(
			screen.getByText((content) =>
				content.includes(customText)
			)
		).toBeInTheDocument();
	});

	// Test if it applies custom style when passed
	test("applies custom style if any", () => {
		render(
			<CustomText
				text={customText}
				style={customTextStyle}
			/>
		);

		expect(screen.getByText(customText)).toHaveStyle(
			customTextStyle
		);
	});

	// Test if disableAnimation sets opacity to 1
	test("sets opacity to 1 when disableAnimation is true", () => {
		render(
			<CustomText text={customText} disableAnimation />
		);

		expect(screen.getByText(customText).style.opacity).toBe(
			"1"
		);
	});
});
