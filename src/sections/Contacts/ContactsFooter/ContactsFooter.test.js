/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactsFooter from "./ContactsFooter.js";
import {
	CONTACTS_FOOTER_TEXT,
	CONTACTS_FOOTER_TEXT_CLASS_NAME,
	LEGAL_NOTES_LINK,
	LEGAL_NOTES_TEXT,
} from "./const.js";
import {
	COOKIE_POLICY_LINK,
	COOKIE_POLICY_TEXT,
	PRIVACY_POLICY_LINK,
	PRIVACY_POLICY_TEXT,
} from "../../../utils/const.js";
import Link from "../../../components/Link/Link.js";

// Mocks
jest.mock("../../../components/Link/Link.js", () => ({
	__esModule: true,
	default: jest.fn(({ href, text }) => (
        <a data-testid={"link-" + text.trim()} href={href}>
            {text}
        </a>
    )),
}));

/**
 * Test suite for the ContactsFooter component.
 * The test suite contains:
 * 1. A test to verify correct rendering of footer text.
 * 2. A test to verify correct rendering of all links.
 */
describe("ContactsFooter", () => {

	// Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: FOOTER TEXT
	 * Should render footer text with correct class name.
	 */
	it("should render footer text correctly", () => {
		render(<ContactsFooter />);

		const footer = screen.getByText(CONTACTS_FOOTER_TEXT);

		expect(footer).toBeInTheDocument();
		expect(footer.className).toBe(CONTACTS_FOOTER_TEXT_CLASS_NAME);
	});

	/**
     * CASE 2: LINKS RENDERING
     * Should render all links with correct href and text.
     */
    it("should render all links correctly", () => {
        render(<ContactsFooter />);

        // Check links are in the document
        expect(screen.getByTestId(
            "link-" + (PRIVACY_POLICY_TEXT + " |"))
        ).toBeInTheDocument();
        expect(screen.getByTestId(
            "link-" + (COOKIE_POLICY_TEXT + " |"))
        ).toBeInTheDocument();
        expect(screen.getByTestId(
            "link-" + LEGAL_NOTES_TEXT)
        ).toBeInTheDocument();

        // Check mock calls
        const calls = Link.mock.calls.map(args => args[0]);
        expect(calls).toEqual(
            expect.arrayContaining([
                expect.objectContaining(
                    { href: PRIVACY_POLICY_LINK, text: PRIVACY_POLICY_TEXT + " | " }
                ),
                expect.objectContaining(
                    { href: COOKIE_POLICY_LINK, text: COOKIE_POLICY_TEXT + " | " }
                ),
                expect.objectContaining(
                    { href: LEGAL_NOTES_LINK, text: LEGAL_NOTES_TEXT }
                ),
            ])
        );
    });
});