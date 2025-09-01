import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Menu from "./Menu";

const menuBigTestId = "menu-big";
const menuSmallTestId = "menu-small";

// Mock both big and small menu
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

	// Test if it renders big menu
	test("renders big menu", () => {
		render(<Menu />);

		expect(
			screen.getByTestId(menuBigTestId)
		).toBeInTheDocument();
	});

	// Test if it renders small menu
	test("renders small menu", () => {
		render(<Menu />);

		expect(
			screen.getByTestId(menuSmallTestId)
		).toBeInTheDocument();
	});
});
