import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import InfoCard from "./InfoCard.js";

// Definition of expected results
const infoCardTitle = "Info Card Title";
const infoCardDescription = "Info Card Description";
const infoCardIcon = "info-card-icon";
const infoCardTitleType = "subheading";
const infoCardDescriptionType = "body";

const infoCardIconAlt = "info-card-icon";

// Mock CustomText
jest.mock("../CustomText/CustomText", () => ({
	__esModule: true,
	default: ({ type, text, style }) => (
		<span data-type={type} style={style}>
			{text}
		</span>
	),
}));

// Run tests
describe("InfoCard", () => {
	// Clear all mocks before
	// running each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	// Test CustomText components
	describe("CustomText", () => {
		// Test if it correctly renders the title
		test("renders with correct title", () => {
			render(<InfoCard title={infoCardTitle} />);

			expect(
				screen.getByText(infoCardTitle)
			).toBeInTheDocument();
		});

		// Test if it correctly renders the description
		test("renders with correct description", () => {
			render(
				<InfoCard description={infoCardDescription} />
			);

			expect(
				screen.getByText(infoCardDescription)
			).toBeInTheDocument();
		});

		// Test if it sets the correct title type
		test("sets the correct title type", () => {
			render(<InfoCard title={infoCardTitle} />);

			expect(
				screen
					.getByText(infoCardTitle)
					.getAttribute("data-type")
			).toBe(infoCardTitleType);
		});

		// Test if it sets the correct description type
		test("sets the correct description type", () => {
			render(
				<InfoCard description={infoCardDescription} />
			);

			expect(
				screen
					.getByText(infoCardDescription)
					.getAttribute("data-type")
			).toBe(infoCardDescriptionType);
		});
	});

	// Test icon (if any)
	describe("Icon", () => {
		// Test if it correctly renders the
		// icon if provided
		test("renders with correct icon if provided", () => {
			render(<InfoCard icon={infoCardIcon} />);

			const iconNode = screen.getByAltText(infoCardIconAlt);

			expect(iconNode).toBeInTheDocument();
			expect(iconNode).toHaveAttribute("src", infoCardIcon);
		});

		// Test if it doesn't render the
		// icon if not provided
		test("doesn't render icon if not provided", () => {
			render(<InfoCard />);

			expect(
				screen.queryByAltText(infoCardIconAlt)
			).not.toBeInTheDocument();
		});
	});
});
