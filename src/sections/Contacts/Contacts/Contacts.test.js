/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contacts from "./Contacts.js";
import {
	CONTACTS_CONTENT_CLASS_NAME,
	CONTACTS_FOOTER_CLASS_NAME,
	CONTACTS_LAYOUT_CLASS_NAME,
} from "./const.js";
import { CONTACTS_SECTION_ID } from "../../../utils/const.js";

// Mocks
jest.mock("antd", () => {
	const Layout = ({ children, className, id }) => (
		<div data-testid="layout" className={className} id={id}>
			{children}
		</div>
	);
	Layout.Content = ({ children, className }) => (
		<div data-testid="layout-content" className={className}>
			{children}
		</div>
	);
	Layout.Footer = ({ children, className }) => (
		<div data-testid="layout-footer" className={className}>
			{children}
		</div>
	);

	return { Layout };
});
jest.mock("../ContactsContent/ContactsContent.js", () => ({
	__esModule: true,
	default: jest.fn(() => <div data-testid="contacts-content" />),
}));
jest.mock("../ContactsFooter/ContactsFooter.js", () => ({
	__esModule: true,
	default: jest.fn(() => <div data-testid="contacts-footer" />),
}));

/**
 * Test suite for the Contacts component.
 * The test suite contains:
 * 1. A test to verify that the layout renders correctly.
 * 2. A test to verify that content and footer are rendered correctly.
 */
describe("Contacts", () => {

	// Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: LAYOUT RENDERING
	 * Should render layout with correct class and id.
	 */
	it("should render layout correctly", () => {
		render(<Contacts />);

		const layout = screen.getByTestId("layout");

		expect(layout.className).toBe(CONTACTS_LAYOUT_CLASS_NAME);
		expect(layout.id).toBe(CONTACTS_SECTION_ID);
	});

	/**
	 * CASE 2: CONTENT AND FOOTER RENDERING
	 * Should render content and footer with correct classes
	 * and include corresponding components.
	 */
	it("should render content and footer correctly", () => {
		render(<Contacts />);

		// Check content
		const content = screen.getByTestId("layout-content");
		expect(content.className).toBe(CONTACTS_CONTENT_CLASS_NAME);
		expect(screen.getByTestId("contacts-content")).toBeInTheDocument();

		// Check footer
		const footer = screen.getByTestId("layout-footer");
		expect(footer.className).toBe(CONTACTS_FOOTER_CLASS_NAME);
		expect(screen.getByTestId("contacts-footer")).toBeInTheDocument();
	});
});