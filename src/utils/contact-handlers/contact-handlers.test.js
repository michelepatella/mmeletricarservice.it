/**
 * @jest-environment jsdom
 */

import {
	onPecButtonClick,
	onFacebookButtonClick,
	onPhoneButtonClick,
	onEmailButtonClick,
} from "./contact-handlers.js";

/**
 * Test suite for contact button handlers.
 * This suite contains tests for:
 * 1. PEC email button click handler.
 * 2. Facebook button click handler.
 * 3. Phone button click handler.
 * 4. Regular email button click handler.
 */
describe("contact-handlers", () => {
	let originalLocation;
	let originalWindowOpen;

	// Define behavior before all tests
	beforeAll(() => {
		// eslint-disable-next-line no-undef
		originalLocation = globalThis.location;
		originalWindowOpen = window.open;
	});

	// Define behavior after all tests
	afterAll(() => {
		// eslint-disable-next-line no-undef
		globalThis.location = originalLocation;
		window.open = originalWindowOpen;
	});

	/**
	 * CASE 1: PEC EMAIL BUTTON
	 * Should set globalThis.location.href to the correct mailto link.
	 */
	it("should set location.href correctly for PEC email", () => {
		const testEmail = "test@pec.com";
		const mockLocation = {};

		// eslint-disable-next-line no-undef
		Object.defineProperty(globalThis, "location", {
			value: mockLocation,
			writable: true,
		});

		onPecButtonClick(testEmail);

		expect(mockLocation.href).toBe("mailto:" + testEmail);
	});

	/**
	 * CASE 2: FACEBOOK BUTTON
	 * Should call window.open with the correct link and target.
	 */
	it("should call window.open correctly for Facebook button", () => {
		const testLink = "https://facebook.com/testpage";
		const mockOpen = jest.fn();
		window.open = mockOpen;

		onFacebookButtonClick(testLink);

		expect(mockOpen).toHaveBeenCalledWith(
			testLink,
			"_blank"
		);
	});

	/**
	 * CASE 3: PHONE BUTTON
	 * Should set globalThis.location.href to the correct tel link.
	 */
	it("should set location.href correctly for phone button", () => {
		const testPhone = "+39123456789";
		const mockLocation = {};

		// eslint-disable-next-line no-undef
		Object.defineProperty(globalThis, "location", {
			value: mockLocation,
			writable: true,
		});

		onPhoneButtonClick(testPhone);

		expect(mockLocation.href).toBe("tel:" + testPhone);
	});

	/**
	 * CASE 4: EMAIL BUTTON
	 * Should set globalThis.location.href to the correct mailto link.
	 */
	it("should set location.href correctly for regular email button", () => {
		const testEmail = "test@example.com";
		const mockLocation = {};

		// eslint-disable-next-line no-undef
		Object.defineProperty(globalThis, "location", {
			value: mockLocation,
			writable: true,
		});

		onEmailButtonClick(testEmail);

		expect(mockLocation.href).toBe("mailto:" + testEmail);
	});
});
