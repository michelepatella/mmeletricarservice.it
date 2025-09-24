import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BackButton from "./BackButton.js";

import { BACK_BUTTON_LABEL } from "./const.js";

// Definition of expected results
const backButtonLabel = "Back Button Label";
const customTextType = "body";

const leftOutlinedTestId = "left-outlined-icon";

// Mock constants
jest.mock("../../utils/const", () => ({
	BACK_BUTTON_LABEL: backButtonLabel,
}));

// Mock the LeftOutlined component
jest.mock("@ant-design/icons", () => ({
	LeftOutlined: () => (
		<span data-testid={leftOutlinedTestId} />
	),
}));

// Mock the CustomText component
jest.mock("../CustomText/CustomText", () => ({
	__esModule: true,
	default: ({ type, disableAnimation, text }) => (
		<span
			data-type={type}
			data-animation={disableAnimation}
		>
			{text}
		</span>
	),
}));

// Run the test
describe("CustomBackButton", () => {
	// Clear all mocks before running each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe("LeftOutlined", () => {
		// Test if it renders the LeftOutlined icon correctly
		test("renders icon correctly", () => {
			render(<BackButton />);

			expect(
				screen.getByTestId(leftOutlinedTestId)
			).toBeInTheDocument();
		});
	});

	describe("CustomText", () => {
		// Test if it renders the label correctly
		test("renders with correct text", () => {
			render(<BackButton />);

			expect(
				screen.getByText(BACK_BUTTON_LABEL)
			).toBeInTheDocument();
		});

		// Test if it sets the correct text type
		test("sets the correct text type", () => {
			render(<BackButton />);

			expect(
				screen
					.getByText(BACK_BUTTON_LABEL)
					.getAttribute("data-type")
			).toBe(customTextType);
		});

		// Test if it sets the correct disableAnimation prop
		test("sets the correct animation setting", () => {
			render(<BackButton />);

			expect(
				screen
					.getByText(BACK_BUTTON_LABEL)
					.getAttribute("data-animation")
			).toBeTruthy();
		});
	});
});
