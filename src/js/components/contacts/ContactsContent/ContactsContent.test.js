import React from "react";
import "@testing-library/jest-dom";
import {
	render,
	screen,
	fireEvent,
} from "@testing-library/react";
import ContactsContent from "./ContactsContent";

// Mock IntersectionObserver
beforeAll(() => {
	global.IntersectionObserver = class {
		observe() {}
		unobserve() {}
	};
});

// Definition of expected results
const contactsSectionName = "Contacts Section Name";
const contactsTitle = "Contacts Title";
const contactsSubtitle = "Contacts Subtitle";
const phone = "Phone";
const email = "Email";
const emailPec = "Email PEC";
const facebook = "Facebook";
const phoneIcon = "phone-icon";
const emailIcon = "email-icon";
const emailPecIcon = "email-pec-icon";
const facebookIcon = "facebook-icon";

// Mock the company contacts and section's texts
jest.mock("../../../utils/const", () => ({
	CONTACTS_SECTION_NAME: contactsSectionName,
	CONTACTS_TITLE: contactsTitle,
	CONTACTS_SUBTITLE: contactsSubtitle,
	CONTACTS: [
		{
			value: phone,
			icon: phoneIcon,
		},
		{
			value: email,
			icon: emailIcon,
		},
		{
			value: emailPec,
			icon: emailPecIcon,
		},
		{
			value: facebook,
			icon: facebookIcon,
		},
	],
}));

// Mock the contact click handlers
const mockPhoneHandler = jest.fn();
const mockEmailHandler = jest.fn();
const mockEmailPecHandler = jest.fn();
const mockFacebookHandler = jest.fn();
jest.mock(
	"../../../logic/handling/contactButtonHandler",
	() => ({
		contactClickHandler: {
			Phone: (...args) => mockPhoneHandler(...args),
			Email: (...args) => mockEmailHandler(...args),
			"Email PEC": (...args) =>
				mockEmailPecHandler(...args),
			Facebook: (...args) => mockFacebookHandler(...args),
		},
	})
);

// Mock CustomButton
jest.mock("../../custom/CustomButton/CustomButton", () => ({
	__esModule: true,
	default: ({ text, isContact, isCta, icon, onClick }) => (
		<button
			data-text={text}
			data-contact={isContact}
			data-cta={isCta}
			data-icon={icon}
			onClick={onClick}
		>
			{text}
		</button>
	),
}));

// Run the test
describe("ContactsContent", () => {
	// Clear all mocks before running each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	// Test SectionHeader used in ContactContent
	describe("SectionHeader", () => {

		// Test if it renders the section name correctly
		test("renders with correct section name", () => {
			render(<ContactsContent />);

			expect(
				screen.getByText((content) =>
					content.includes(contactsSectionName)
				)
			).toBeInTheDocument();
		});

		// Test if it renders the section title correctly
		test("renders with correct title", () => {
			render(<ContactsContent />);

			expect(
				screen.getByText(contactsTitle)
			).toBeInTheDocument();
		});

		// Test if it renders the section subtitle correctly
		test("renders with correct subtitle", () => {
			render(<ContactsContent />);

			expect(
				screen.getByText(contactsSubtitle)
			).toBeInTheDocument();
		});
	});

	// Test contact buttons visualized into ContactContent
	describe("Contact buttons", () => {
		// Test if all the buttons are rendered
		// with the expected texts
		test.each([[phone], [email], [emailPec], [facebook]])(
			"renders button with text: %s",
			(contactText) => {
				render(<ContactsContent />);

				expect(
					screen.getByText(contactText)
				).toBeInTheDocument();
			}
		);

		// Test if all buttons are set as contact buttons
		test.each([[phone], [email], [emailPec], [facebook]])(
			"sets %s button as contact button",
			(contactText) => {
				render(<ContactsContent />);

				expect(
					screen
						.getByText(contactText)
						.getAttribute("data-contact")
				).toBeTruthy();
			}
		);

		// Test if all buttons are not set as
		// CTA buttons
		test.each([[phone], [email], [emailPec], [facebook]])(
			"sets %s buttons not as CTA button",
			(contactText) => {
				render(<ContactsContent />);

				expect(
					screen
						.queryByText(contactText)
						.getAttribute("data-cta") === "true"
				).toBeFalsy();
			}
		);

		// Test if all buttons have the correct icon
		test.each([
			[phone, phoneIcon],
			[email, emailIcon],
			[emailPec, emailPecIcon],
			[facebook, facebookIcon],
		])(
			"sets the correct icon to %s button",
			(contactText, expectedIcon) => {
				render(<ContactsContent />);

				expect(
					screen.getByText(contactText)
				).toHaveAttribute("data-icon", expectedIcon);
			}
		);

		// Test if all the buttons, once clicked,
		// trigger the corresponding contact button handler
		test.each([
			[phone, mockPhoneHandler],
			[email, mockEmailHandler],
			[emailPec, mockEmailPecHandler],
			[facebook, mockFacebookHandler],
		])(
			"clicking %s button triggers the handler",
			(contactText, mockHandler) => {
				render(<ContactsContent />);

				fireEvent.click(screen.getByText(contactText));
				expect(mockHandler).toHaveBeenCalled();
			}
		);
	});
});
