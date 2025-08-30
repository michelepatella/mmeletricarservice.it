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
	// Clear all mocks before running the test
	beforeEach(() => {
		jest.clearAllMocks();
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

	// Test if it applies the correct button's class
	// based on the passed props
	test("applies correct class for generic custom button", () => {
		render(<CustomButton text={customButtonText} />);

		expect(
			screen.getByRole("button", { name: customButtonText })
		).toHaveClass(genericCustomButtonClass);
	});
	test("applies correct class for contact button", () => {
		render(
			<CustomButton text={customButtonText} isContact />
		);

		expect(
			screen.getByRole("button", { name: customButtonText })
		).toHaveClass(contactCustomButtonClass);
	});
	test("applies correct class for CTA button", () => {
		render(
			<CustomButton
				text={customButtonText}
				isContact
				isCta
			/>
		);

		expect(
			screen.getByRole("button", { name: customButtonText })
		).toHaveClass(ctaCustomButtonClass);
	});

	// Test if it correctly renders the icon when provided
	test("renders icon when provided", () => {
		render(<CustomButton icon={customButtonIcon} />);

		const icon = screen.getByAltText(
			customButtonIconAltAttr
		);

		expect(icon).toBeInTheDocument();
		expect(icon).toHaveAttribute("src", customButtonIcon);
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
		expect(customButtonClickHandler).toHaveBeenCalledTimes(
			1
		);
	});

	// Test if it applies the custom style
	// when passed
	test("applies custom style if any", () => {
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
});
