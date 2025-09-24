import React from "react";
import "@testing-library/jest-dom";
import {
	render,
	screen,
	fireEvent,
} from "@testing-library/react";
import HomeHeader from "./HomeHeader.js";

import { HOME_HEADER_CONTACT_BUTTONS } from "./const.js";

const customIconButtonTestId = "custom-button";

// Mock CustomIconButton
jest.mock(
	"../../../components/IconButton/IconButton",
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
jest.mock("../../../utils/contactHandlers", () => ({
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
			HOME_HEADER_CONTACT_BUTTONS.length
		);
	});

	// Test if all the contact buttons
	// are rendered correctly
	test("renders the correct contact buttons", () => {
		render(<HomeHeader />);

		const contactButtons = screen.getAllByTestId(
			customIconButtonTestId
		);
		HOME_HEADER_CONTACT_BUTTONS.forEach(
			({ src }, index) => {
				expect(contactButtons[index]).toHaveTextContent(
					src
				);
			}
		);
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
		HOME_HEADER_CONTACT_BUTTONS.forEach((btn) => {
			expect(btn.onClick).toHaveBeenCalled();
		});
	});
});
