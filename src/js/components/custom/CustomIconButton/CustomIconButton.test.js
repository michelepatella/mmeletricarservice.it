import React from "react";
import "@testing-library/jest-dom";
import {
	render,
	screen,
	fireEvent,
} from "@testing-library/react";
import CustomIconButton from "./CustomIconButton";

// Definition of expected results
const customIconButtonImg = "custom-button-icon";
const customIconButtonImgAltAttr = "button-icon";

// Mock custom icon button click handler
const customIconButtonClickHandler = jest.fn();

// Run tests
describe("CustomIconButton", () => {
	// Clear all mocks before running each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	// Test if it correctly renders the icon
	test("renders with correct icon", () => {
		render(<CustomIconButton src={customIconButtonImg} />);

		const icon = screen.getByAltText(
			customIconButtonImgAltAttr
		);

		expect(icon).toBeInTheDocument();
		expect(icon).toHaveAttribute(
			"src",
			customIconButtonImg
		);
	});

	// Test if it calls the passed onClick handler
	// when clicked
	test("calls onClick handler when clicked", () => {
		render(
			<CustomIconButton
				src={customIconButtonImg}
				onClick={customIconButtonClickHandler}
			/>
		);

		fireEvent.click(screen.getByRole("button"));
		expect(customIconButtonClickHandler).toHaveBeenCalled();
	});
});
