import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ContactsFooter from "./ContactsFooter";

// Definition of expected results
const footerText = "Contacts Footer Text";
const privacyPolicyText = "Privacy Policy Text";
const privacyPolicyHref = "privacy-policy-link";
const cookiePolicyText = "Cookie Policy Text";
const cookiePolicyHref = "cookie-policy-link";
const legalNotesText = "Legal Notes Text";
const legalNotesHref = "legal-notes-link";
const targetAttr = "_blank";
const relAttr = "noopener noreferrer";

// Definition of links to be tested
const links = [
	{
		text: privacyPolicyText,
		href: privacyPolicyHref,
	},
	{
		text: cookiePolicyText,
		href: cookiePolicyHref,
	},
	{
		text: legalNotesText,
		href: legalNotesHref,
	},
];

// Mock constants
jest.mock("../../../utils/const", () => ({
	CONTACT_FOOTER_TEXT: footerText,
	PRIVACY_POLICY_TEXT: privacyPolicyText,
	COOKIE_POLICY_TEXT: cookiePolicyText,
	LEGAL_NOTES_TEXT: legalNotesText,
}));

// Mock links
jest.mock("../../../utils/internalLinks", () => ({
	PRIVACY_POLICY_LINK: privacyPolicyHref,
	COOKIE_POLICY_LINK: cookiePolicyHref,
	LEGAL_NOTES_LINK: legalNotesHref,
}));

// Run the test
describe("ContactsFooter", () => {
	// Clear all mocks before running each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	// Test if it renders the footer text correctly
	test("renders with correct footer text", () => {
		render(<ContactsFooter />);

		expect(
			screen.getByText((content) =>
				content.includes(footerText)
			)
		).toBeInTheDocument();
	});

	// Test if it renders all the footer links correctly
	test.each(links)(
		"renders link %s correctly",
		({ text, href }) => {
			render(<ContactsFooter />);

			const domLink = screen.getByText(text);
			expect(domLink).toBeInTheDocument();
			expect(domLink).toHaveAttribute("href", href);
			expect(domLink).toHaveAttribute("target", targetAttr);
			expect(domLink).toHaveAttribute("rel", relAttr);
		}
	);
});
