import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomeContent from "./HomeContent.js";

// Definition of expected results
const homeTitle = "Home Title";
const homeSubtitle = "Home Subtitle";

// Mock constants
jest.mock("../../../utils/const", () => ({
	HOME_TITLE: homeTitle,
	HOME_SUBTITLE: homeSubtitle,
}));

// Run the test
describe("HomeContent", () => {
	// Clear all mocks before running each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	// Test if it correctly renders the title
	test("renders with correct title", () => {
		render(<HomeContent />);

		expect(screen.getByText(homeTitle)).toBeInTheDocument();
	});

	// Test if it correctly renders the subtitle
	test("renders with correct subtitle", () => {
		render(<HomeContent />);

		expect(
			screen.getByText(homeSubtitle)
		).toBeInTheDocument();
	});
});
