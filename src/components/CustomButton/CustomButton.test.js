import React from "react";
import "@testing-library/jest-dom";
import {
	render,
	screen,
	fireEvent,
} from "@testing-library/react";
import CustomButton from "./CustomButton";

// Definition of expected results
const customButtonText = "Custom Button Text";
const customButtonIcon = "custom-button-icon";
const genericCustomButtonClass = "custom-button";
const contactCustomButtonClass = "contact-button";
const ctaCustomButtonClass = "cta-button";
const customButtonIconAltAttr = "button-icon";
const customButtonStyle = { backgroundColor: "red" };

// Mock custom button click handler
const customButtonClickHandler = jest.fn();

// Run tests
describe("CustomButton", () => {
	// Clear all mocks before running each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	// Test if it applies the correct button's class
	// based on the passed props
	test.each([
		[{}, genericCustomButtonClass],
		[{ isContact: true }, contactCustomButtonClass],
		[
			{ isContact: true, isCta: true },
			ctaCustomButtonClass,
		],
	])("applies correct class %#", (props, expectedClass) => {
		render(
			<CustomButton text={customButtonText} {...props} />
		);

		expect(
			screen.getByRole("button", { name: customButtonText })
		).toHaveClass(expectedClass);
	});

	// Test if it renders the text correctly
	test("renders with correct text", () => {
		render(<CustomButton text={customButtonText} />);

		expect(
			screen.getByText((content) =>
				content.includes(customButtonText)
			)
		).toBeInTheDocument();
	});

	// Test if it correctly renders the icon if provided
	test("renders with correct icon if provided", () => {
		render(<CustomButton icon={customButtonIcon} />);

		const icon = screen.getByAltText(
			customButtonIconAltAttr
		);

		expect(icon).toBeInTheDocument();
		expect(icon).toHaveAttribute("src", customButtonIcon);
	});

	// Test if it doesn't render the icon if not provided
	test("doesn't render the icon if not provided", () => {
		render(<CustomButton />);

		const icon = screen.queryByAltText(
			customButtonIconAltAttr
		);

		expect(icon).not.toBeInTheDocument();
	});

	// Test if it applies the custom style
	// when passed
	test("applies custom style correctly", () => {
		render(
			<CustomButton
				text={customButtonText}
				style={customButtonStyle}
			/>
		);

		expect(
			screen.getByRole("button", { name: customButtonText })
		).toHaveStyle(customButtonStyle);
	});

	// Test if it calls the passed onClick handler
	// when clicked
	test("calls onClick handler when clicked", () => {
		render(
			<CustomButton
				text={customButtonText}
				onClick={customButtonClickHandler}
			/>
		);

		fireEvent.click(
			screen.getByRole("button", { name: customButtonText })
		);
		expect(customButtonClickHandler).toHaveBeenCalled();
	});
});
