import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactsContent from "./ContactsContent";

// Mock IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
  };
});

// Definition of expected results
const contacts_section_name = "Contacts Section Name";
const contacts_title = "Contacts Title";
const contacts_subtitle = "Contacts Subtitle";
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
  CONTACTS_SECTION_NAME: contacts_section_name,
  CONTACTS_TITLE: contacts_title,
  CONTACTS_SUBTITLE: contacts_subtitle,
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
jest.mock("../../../logic/handling/contactButtonHandler", () => ({
  contactClickHandler: {
    Phone: (...args) => mockPhoneHandler(...args),
    Email: (...args) => mockEmailHandler(...args),
    "Email PEC": (...args) => mockEmailPecHandler(...args),
    Facebook: (...args) => mockFacebookHandler(...args),
  },
}));

// Run the test
describe("ContactsContent", () => {
  // Clear all mocks before running the test
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
            content.includes(contacts_section_name)
        ),
      ).toBeInTheDocument();
    });

    // Test if it renders the section title correctly
    test("renders with correct title", () => {
      render(<ContactsContent />);
      expect(
          screen.getByText(contacts_title)
      ).toBeInTheDocument();
    });

    // Test if it renders the section subtitle correctly
    test("renders with correct subtitle", () => {
      render(<ContactsContent />);
      expect(
          screen.getByText(contacts_subtitle)
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
      },
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
        const button = screen.getByText(contactText);
        fireEvent.click(button);
        expect(mockHandler).toHaveBeenCalled();
      },
    );
  });
});
