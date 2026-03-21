/**
 * @jest-environment jsdom
 */

/* eslint-disable import/first */

// Mocks
jest.mock("js-cookie", () => ({
	get: jest.fn(),
}));
jest.mock("../../index.js", () => ({
	SentryReact: {
		logger: {
			error: jest.fn(),
		},
	},
}));
const reloadMock = jest.fn();
Object.defineProperty(window, 'location', {
  value: { reload: reloadMock },
  writable: true,
});

import { renderHook, act } from "@testing-library/react";
import Cookies from "js-cookie";
import { SentryReact } from "../../index.js";
import { useCookieConsent } from "./use-cookie-consent.js";


/**
 * Test suite for the custom hook useCookieConsent.
 * This suite includes:
 * 1. A test for cookies already accepted.
 * 2. A test for cookies already refused.
 * 3. A test for no explicit cookie choice.
 * 4. A test for accepting cookies via handler.
 * 5. A test for declining cookies when previously refused.
 * 6. A test for declining cookies when previously accepted (with page refresh).
 * 7. A test for error during cookie reading.
 * 8. A test for error during page refresh after decline.
 */
describe("useCookieConsent", () => {
    let originalLocation;

    // Define behavior before all tests
    beforeAll(() => {
        /* eslint-disable-next-line no-undef */
        originalLocation = globalThis.location;
    });

    // Define behavior before each test
    beforeEach(() => {
        reloadMock.mockClear();
        jest.clearAllMocks();
    });

    // Define behavior after all tests
    afterAll(() => {
        /* eslint-disable-next-line no-undef */
        globalThis.location = originalLocation;
    });

	/**
	 * CASE 1: COOKIES ALREADY ACCEPTED
	 * If the cookie value is "true", the hook should:
	 * - Set cookiesAccepted to true
	 * - Keep the cookie banner hidden
	 */
	it("should set cookiesAccepted to true and hide banner if cookies already accepted", () => {
		// Mock cookie value
		Cookies.get.mockReturnValue("true");

		// Render hook
		const { result } = renderHook(() =>
			useCookieConsent()
		);

		// Assertions
		expect(result.current.cookiesAccepted).toBe(true);
		expect(result.current.isCookiesBannerVisible).toBe(
			false
		);
	});

	/**
	 * CASE 2: COOKIES ALREADY REFUSED
	 * If the cookie value is "false", the hook should:
	 * - Set cookiesAccepted to false
	 * - Keep the cookie banner hidden
	 */
	it("should set cookiesAccepted to false and hide banner if cookies already refused", () => {
		// Mock cookie value
		Cookies.get.mockReturnValue("false");

		// Render hook
		const { result } = renderHook(() =>
			useCookieConsent()
		);

		// Assertions
		expect(result.current.cookiesAccepted).toBe(false);
		expect(result.current.isCookiesBannerVisible).toBe(
			false
		);
	});

	/**
	 * CASE 3: NO EXPLICIT COOKIE CHOICE
	 * If no cookie choice is found, the hook should:
	 * - Set cookiesAccepted to false
	 * - Show the cookie banner
	 */
	it("should set cookiesAccepted to false and show banner if no cookie choice is found", () => {
		// Mock cookie value
		Cookies.get.mockReturnValue(undefined);

		// Render hook
		const { result } = renderHook(() =>
			useCookieConsent()
		);

		// Assertions
		expect(result.current.cookiesAccepted).toBe(false);
		expect(result.current.isCookiesBannerVisible).toBe(
			true
		);
	});

	/**
	 * CASE 4: ACCEPT COOKIES ACTION
	 * When handleAcceptCookies is called, the hook should:
	 * - Set cookiesAccepted to true
	 * - Hide the cookie banner
	 */
	it("should set cookiesAccepted to true and hide banner if cookies accepted", () => {
		// Mock cookie value
		Cookies.get.mockReturnValue(undefined);

		// Render hook
		const { result } = renderHook(() =>
			useCookieConsent()
		);

		// Trigger accept action
		act(() => {
			result.current.handleAcceptCookies();
		});

		// Assertions
		expect(result.current.cookiesAccepted).toBe(true);
		expect(result.current.isCookiesBannerVisible).toBe(
			false
		);
	});

	/**
	 * CASE 5: DECLINE COOKIES (ALREADY REFUSED)
	 * When handleDeclineCookies is called and cookies were already false:
	 * - cookiesAccepted remains false
	 * - banner is hidden
	 * - page is NOT refreshed
	 */
	it("should set cookiesAccepted to false and hide banner without refreshing the page if cookies refused again", () => {
		// Mock cookie value
		Cookies.get.mockReturnValue("false");

		// Render hook
		const { result } = renderHook(() =>
			useCookieConsent()
		);

		// Trigger decline action
		act(() => {
			result.current.handleDeclineCookies();
		});

		// Assertions
		expect(result.current.cookiesAccepted).toBe(false);
		expect(result.current.isCookiesBannerVisible).toBe(
			false
		);
		expect(reloadMock).not.toHaveBeenCalled();
	});

	/**
	 * CASE 6: DECLINE COOKIES (PREVIOUSLY ACCEPTED)
	 * When handleDeclineCookies is called and cookies were true:
	 * - cookiesAccepted becomes false
	 * - banner is hidden
	 * - page is refreshed
	 */
	it("should set cookiesAccepted to false and hide banner while refreshing the page if cookies were previously accepted", () => {
		// Mock cookie value
		Cookies.get.mockReturnValue("true");

		// Render hook
		const { result } = renderHook(() =>
			useCookieConsent()
		);

		// Trigger decline action
		act(() => {
			result.current.handleDeclineCookies();
		});

		// Assertions
		expect(result.current.cookiesAccepted).toBe(false);
		expect(result.current.isCookiesBannerVisible).toBe(
			false
		);
		expect(reloadMock).toHaveBeenCalled();
	});

	/**
	 * CASE 7: ERROR DURING COOKIE READ
	 * If Cookies.get throws an error, the hook should:
	 * - Log error to Sentry
	 * - Set cookiesAccepted to false
	 * - Hide the banner
	 */
	it("should correctly handle error during cookie read", () => {
		// Mock error
		Cookies.get.mockImplementation(() => {
			throw new Error("Cookie error");
		});

		// Render hook
		const { result } = renderHook(() =>
			useCookieConsent()
		);

		// Assertions
		expect(SentryReact.logger.error).toHaveBeenCalled();
		expect(result.current.cookiesAccepted).toBe(false);
		expect(result.current.isCookiesBannerVisible).toBe(
			false
		);
	});

	/**
	 * CASE 8: ERROR DURING PAGE REFRESH
	 * If reload throws an error, the hook should:
	 * - Log error to Sentry
	 */
	it("should correctly handle error during page refresh", () => {
		// Mock cookie value
		Cookies.get.mockReturnValue("true");

		reloadMock.mockImplementation(() => {
            throw new Error("Something went wrong");
        });

		// Render hook
		const { result } = renderHook(() =>
			useCookieConsent()
		);

		// Trigger decline action
		act(() => {
			result.current.handleDeclineCookies();
		});

		// Assertions
		expect(SentryReact.logger.error).toHaveBeenCalled();
	});
});