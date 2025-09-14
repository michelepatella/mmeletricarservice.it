import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MenuWrapper from "./MenuWrapper";

const menuBigTestId = "Menu-big";
const menuSmallTestId = "Menu-small";

// Mock both big and small Menu
jest.mock("../MenuBigScreen/MenuBigScreen", () => () => (
	<div data-testid={menuBigTestId} />
));
jest.mock(
	"../MenuSmallScreen/MenuSmallScreen",
	() => () => <div data-testid={menuSmallTestId} />
);

// Run tests
describe("Menu", () => {
	// Clear all mocks before running each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	// Test if it renders big Menu
	test("renders big Menu", () => {
		render(<MenuWrapper />);

		expect(
			screen.getByTestId(menuBigTestId)
		).toBeInTheDocument();
	});

	// Test if it renders small Menu
	test("renders small Menu", () => {
		render(<MenuWrapper />);

		expect(
			screen.getByTestId(menuSmallTestId)
		).toBeInTheDocument();
	});
});
