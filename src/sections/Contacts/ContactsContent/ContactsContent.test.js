/**
 * @jest-environment jsdom
 */

import React from "react";
import {
	render,
	screen,
	fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactsContent from "./ContactsContent.js";
import CustomButton from "../../../components/CustomButton/CustomButton.js";
import {
	ALL_CONTACTS,
	CONTACTS_CLICK_HANDLERS,
	CONTACTS_SECTION_ID,
	CUSTOM_TEXT_TYPES,
	DOTTED_BACKGROUND_IMAGE_LINK,
} from "../../../utils/const.js";
import {
	CONTACTS_BUTTONS_CONTAINER_CLASS_NAME,
	CONTACTS_TITLE,
} from "./const.js";

// Mocks
jest.mock(
	"../../../components/SectionBackground/SectionBackground.js",
	() => ({
		__esModule: true,
		default: jest.fn(({ children, image }) => (
			<div
				data-testid="section-background"
				data-image={image}
			>
				{children}
			</div>
		)),
	})
);
jest.mock(
	"../../../components/SectionContainer/SectionContainer.js",
	() => ({
		__esModule: true,
		default: jest.fn(({ children, id }) => (
			<div data-testid="section-container" id={id}>
				{children}
			</div>
		)),
	})
);
jest.mock(
	"../../../components/CustomText/CustomText.js",
	() => ({
		__esModule: true,
		default: jest.fn(({ type, text }) => (
			<div data-testid={"custom-text-" + type}>{text}</div>
		)),
	})
);
jest.mock(
	"../../../components/BlockQuote/BlockQuote.js",
	() => ({
		__esModule: true,
		default: jest.fn(({ children }) => (
			<div data-testid="blockquote">{children}</div>
		)),
	})
);
jest.mock(
	"../../../components/CustomButton/CustomButton.js",
	() => ({
		__esModule: true,
		default: jest.fn(({ text, onClick }) => (
			<button
				data-testid={"contact-button-" + text}
				onClick={onClick}
			>
				{text}
			</button>
		)),
	})
);

/**
 * Test suite for the ContactsContent component.
 * The test suite contains:
 * 1. A test to verify correct rendering of main components.
 * 2. A test to verify that all contact buttons are rendered.
 * 3. A test to verify that clicking a button triggers the correct handler.
 */
describe("ContactsContent", () => {
	// Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();

		// Replace all handlers with mock functions
		Object.keys(CONTACTS_CLICK_HANDLERS).forEach((key) => {
			CONTACTS_CLICK_HANDLERS[key] = jest.fn();
		});
	});

	/**
	 * CASE 1: RENDERING MAIN COMPONENTS
	 * Should render background, container, title and blockquote.
	 */
	it("should render main components correctly", () => {
		render(<ContactsContent />);

		// Check background image
		const background = screen.getByTestId(
			"section-background"
		);
		expect(background.dataset.image).toBe(
			DOTTED_BACKGROUND_IMAGE_LINK
		);

		// Check container id
		const container = screen.getByTestId(
			"section-container"
		);
		expect(container.id).toBe(CONTACTS_SECTION_ID);

		// Check title
		const title = screen.getByTestId(
			"custom-text-" + CUSTOM_TEXT_TYPES.SUPER_HEADING
		);
		expect(title.textContent).toBe(CONTACTS_TITLE);

		// Check blockquote
		expect(
			screen.getByTestId("blockquote")
		).toBeInTheDocument();

		// Check buttons container class
		const buttonsContainer = screen
			.getByTestId("blockquote")
			// eslint-disable-next-line testing-library/no-node-access
			.querySelector("div");
		expect(buttonsContainer.className).toBe(
			CONTACTS_BUTTONS_CONTAINER_CLASS_NAME
		);
	});

	/**
	 * CASE 2: CONTACT BUTTONS RENDERING
	 * Should render a button for each contact.
	 */
	it("should render all contact buttons", () => {
		render(<ContactsContent />);

		ALL_CONTACTS.forEach((contact, index) => {
			expect(
				screen.getByTestId(
					"contact-button-" + contact.value
				)
			).toBeInTheDocument();

			const call = CustomButton.mock.calls[index][0];

			expect(call.text).toBe(contact.value);
			expect(call.icon).toBe(contact.icon);
			expect(call.isContact).toBe(true);
			expect(call.onClick).toBe(
				CONTACTS_CLICK_HANDLERS[contact.value]
			);
		});
	});

	/**
	 * CASE 3: BUTTON CLICK HANDLERS
	 * Clicking a contact button should call the corresponding handler.
	 */
	it("should call correct handler on contact button click", () => {
		render(<ContactsContent />);

		ALL_CONTACTS.forEach((contact) => {
			const button = screen.getByTestId(
				"contact-button-" + contact.value
			);

			fireEvent.click(button);

			expect(
				CONTACTS_CLICK_HANDLERS[contact.value]
			).toHaveBeenCalled();
		});
	});
});
