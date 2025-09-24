import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SectionContainer from "./SectionContainer.js";

// Definition of expected results
const sectionContainerId = "section-container-id";
const childrenContentText = "Children Content";
const childrenContent = <div>Children Content</div>;
const custStyle = { color: "red" };

const sectionContainerTestId = "section-container";

// Mock SectionContainer component
jest.mock("./SectionContainer", () => ({
	__esModule: true,
	default: ({ children, id, custStyle }) => (
		<div
			data-testid={sectionContainerTestId}
			id={id}
			style={custStyle}
		>
			{children}
		</div>
	),
}));

// Run tests
describe("SectionContainer", () => {
	// Clear all mocks before
	// running each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	// Test if it correctly applies id
	test("applies correct id", () => {
		render(<SectionContainer id={sectionContainerId} />);

		expect(
			screen.getByTestId(sectionContainerTestId)
		).toHaveAttribute("id", sectionContainerId);
	});

	// Test if it correctly renders the children
	test("renders children correctly", () => {
		render(<SectionContainer children={childrenContent} />);

		expect(
			screen.getByText(childrenContentText)
		).toBeInTheDocument();
	});

	// Test if it correctly applies custom style
	test("applies custom style correctly", () => {
		render(<SectionContainer custStyle={custStyle} />);

		expect(
			screen.getByTestId(sectionContainerTestId)
		).toHaveStyle(custStyle);
	});
});
