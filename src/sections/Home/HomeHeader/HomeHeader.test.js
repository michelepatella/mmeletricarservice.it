import React from "react";
import "@testing-library/jest-dom";
import {
	render,
	screen,
	fireEvent,
} from "@testing-library/react";
import HomeHeader from "./HomeHeader";
import { homeHeaderContactButtons } from "../../../logic/contactButtonHandler";

const customIconButtonTestId = "custom-button";

// Mock CustomIconButton
jest.mock(
	"../../../components/CustomIconButton/CustomIconButton",
	() => {
		return {
			__esModule: true,
			default: ({ src, onClick }) => (
				<button
					data-testid={customIconButtonTestId}
					onClick={onClick}
				>
					{src}
				</button>
			),
		};
	}
);

// Mock contact buttons
jest.mock("../../../logic/contactButtonHandler", () => ({
	homeHeaderContactButtons: [
		{ src: "email", onClick: jest.fn() },
		{ src: "facebook", onClick: jest.fn() },
		{ src: "phone", onClick: jest.fn() },
	],
}));

// Run tests
describe("HomeHeader", () => {
	beforeEach(() => {
		// Clear all mocks before running each test
		jest.clearAllMocks();
	});

	// Test if all the contact buttons
	// to be shown are rendered
	test("renders all the contact buttons", () => {
		render(<HomeHeader />);

		const contactButtons = screen.getAllByTestId(
			customIconButtonTestId
		);
		expect(contactButtons.length).toBe(
			homeHeaderContactButtons.length
		);
	});

	// Test if all the contact buttons
	// are rendered correctly
	test("renders the correct contact buttons", () => {
		render(<HomeHeader />);

		const contactButtons = screen.getAllByTestId(
			customIconButtonTestId
		);
		homeHeaderContactButtons.forEach(({ src }, index) => {
			expect(contactButtons[index]).toHaveTextContent(src);
		});
	});

	// Test if all the contact buttons, once clicked,
	// trigger the corresponding contact button handler
	test("calls onClick when a contact button is clicked", () => {
		render(<HomeHeader />);

		const contactButtons = screen.getAllByTestId(
			customIconButtonTestId
		);

		// Trigger each contact button and test if
		// the corresponding click handler has been triggered
		contactButtons.forEach((button) =>
			fireEvent.click(button)
		);
		homeHeaderContactButtons.forEach((btn) => {
			expect(btn.onClick).toHaveBeenCalled();
		});
	});
});
