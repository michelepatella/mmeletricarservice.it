import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SectionBlock from "./SectionBlock";

// Definition of expected results
const sectionHeaderName = "Section Header Name";
const sectionHeaderTitle = "Section Header Title";
const sectionHeaderSubtitle = "Section Header Subtitle";
const sectionHeaderNameType = "body";
const sectionHeaderTitleType = "heading";
const sectionHeaderSubtitleType = "subheading";
const childrenContentText = "Children Content";
const childrenContent = <div>{childrenContentText}</div>;

// Mock IntersectionObserver hook
jest.mock("../../../hooks/useIntersectionObserver", () => ({
	__esModule: true,
	default: jest.fn(),
}));

// Mock CustomText component
jest.mock("../../custom/CustomText/CustomText", () => {
	return ({ type, text }) => (
		<div data-type={type}>{text}</div>
	);
});

// Run tests
describe("SectionHeader", () => {
	// Clear all mocks before
	// running each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	// Test CustomText components
	describe("CustomText", () => {
		// Test if it correctly renders
		// the section name
		test("renders with correct section name", () => {
			render(<SectionBlock section={sectionHeaderName} />);

			expect(
				screen.getByText("• " + sectionHeaderName)
			).toBeInTheDocument();
		});

		// Test if it correctly renders the title
		test("renders with correct title", () => {
			render(<SectionBlock title={sectionHeaderTitle} />);

			expect(
				screen.getByText(sectionHeaderTitle)
			).toBeInTheDocument();
		});

		// Test if it correctly renders the subtitle
		test("renders with correct subtitle", () => {
			render(
				<SectionBlock subtitle={sectionHeaderSubtitle} />
			);

			expect(
				screen.getByText(sectionHeaderSubtitle)
			).toBeInTheDocument();
		});

		// Test if it sets the correct section name type
		test("sets the correct section name type", () => {
			render(<SectionBlock section={sectionHeaderName} />);

			expect(
				screen
					.getByText("• " + sectionHeaderName)
					.getAttribute("data-type")
			).toBe(sectionHeaderNameType);
		});

		// Test if it sets the correct title type
		test("sets the correct title type", () => {
			render(<SectionBlock title={sectionHeaderTitle} />);

			expect(
				screen
					.getByText(sectionHeaderTitle)
					.getAttribute("data-type")
			).toBe(sectionHeaderTitleType);
		});

		// Test if it sets the correct subtitle type
		test("sets the correct subtitle type", () => {
			render(
				<SectionBlock subtitle={sectionHeaderSubtitle} />
			);

			expect(
				screen
					.getByText(sectionHeaderSubtitle)
					.getAttribute("data-type")
			).toBe(sectionHeaderSubtitleType);
		});
	});

	test("renders children correctly", () => {
		render(<SectionBlock children={childrenContent} />);

		expect(
			screen.getByText(childrenContentText)
		).toBeInTheDocument();
	});
});
