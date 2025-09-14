import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BackgroundContainer from "./BackgroundContainer";
import { handleContainerStyle } from "../../styleLogic/backgroundContainerStyleHandler";

// Mock IntersectionObserver
beforeAll(() => {
	global.IntersectionObserver = class {
		observe() {
			return null;
		}
		unobserve() {
			return null;
		}
	};
});

// Definition of expected results
const childrenContentText = "Children Content";
const childrenContent = <div>Children Content</div>;
const imageUrl = "image-url";
const custStyle = { color: "red" };
const combinedStyle = {
	...handleContainerStyle(imageUrl),
	...custStyle,
};

const motionSectionTestId =
	"background-container-motion-section";

// Run tests
describe("BackgroundContainer", () => {
	// Clear all mocks before
	// running each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	// Test if it correctly renders
	// the children
	test("renders children correctly", () => {
		render(
			<BackgroundContainer children={childrenContent} />
		);

		expect(
			screen.getByText(childrenContentText)
		).toBeInTheDocument();
	});

	// Test if it correctly applies combined style
	test("applies combined style correctly", () => {
		render(
			<BackgroundContainer
				image={imageUrl}
				custStyle={custStyle}
			/>
		);

		expect(
			screen.getByTestId(motionSectionTestId)
		).toHaveStyle(combinedStyle);
	});
});
