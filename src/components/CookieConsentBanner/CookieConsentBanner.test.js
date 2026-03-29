/**
 * @jest-environment jsdom
 */

/* eslint-disable import/first */

// Mocks
jest.mock("../../utils/const.js", () => ({
	COOKIE_NAME: "test-cookie",
	COOKIE_POLICY_LINK: "#",
	COOKIE_POLICY_TEXT: "Cookie Policy",
	PRIVACY_POLICY_LINK: "#",
	PRIVACY_POLICY_TEXT: "Privacy Policy",
}));
jest.mock("react-cookie-consent", () => (props) => {
	return (
		<div>
			<p>{props.children}</p>
			<button onClick={props.onAccept}>
				{props.buttonText}
			</button>
			<button onClick={props.onDecline}>
				{props.declineButtonText}
			</button>
		</div>
	);
});
jest.mock("../Link/Link.js", () => ({
	__esModule: true,
	default: ({ text }) => <span>{text}</span>,
}));

import React from "react";
import {
	render,
	screen,
	fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import CookieConsentBanner from "./CookieConsentBanner.js";
import {
	COOKIE_CONSENT_BANNER_ACCEPT_BUTTON_TEXT,
	COOKIE_CONSENT_BANNER_DECLINE_BUTTON_TEXT,
	COOKIE_CONSENT_BANNER_DESCRIPTION,
} from "./const.js";

/**
 * Test suite for the CookieConsentBanner component.
 * This suite contains:
 * 1. A test to verify that the banner is not rendered when visibility is false.
 * 2. A test to verify that the banner renders correctly when visible.
 * 3. A test to verify that clicking accept calls the handler.
 * 4. A test to verify that clicking decline calls the handler.
 */
describe("CookieConsentBanner", () => {
	/**
	 * CASE 1: DOES NOT RENDER WHEN NOT VISIBLE
	 * This test checks that the banner is not rendered when
	 * isCookiesBannerVisible is false.
	 */
	it("does not render when not visible", () => {
		render(
			<CookieConsentBanner
				isCookiesBannerVisible={false}
				handleAcceptCookies={jest.fn()}
				handleDeclineCookies={jest.fn()}
			/>
		);

		expect(
			screen.queryByText(COOKIE_CONSENT_BANNER_DESCRIPTION)
		).not.toBeInTheDocument();
	});

	/**
	 * CASE 2: RENDERS BANNER WHEN VISIBLE
	 * This test verifies that the banner is rendered with
	 * description and buttons.
	 */
	it("renders banner when visible", () => {
		render(
			<CookieConsentBanner
				isCookiesBannerVisible={true}
				handleAcceptCookies={jest.fn()}
				handleDeclineCookies={jest.fn()}
			/>
		);

		expect(
			screen.getByText((content) =>
				content.includes(COOKIE_CONSENT_BANNER_DESCRIPTION)
			)
		).toBeInTheDocument();
		expect(
			screen.getByText(
				COOKIE_CONSENT_BANNER_ACCEPT_BUTTON_TEXT
			)
		).toBeInTheDocument();

		expect(
			screen.getByText(
				COOKIE_CONSENT_BANNER_DECLINE_BUTTON_TEXT
			)
		).toBeInTheDocument();
	});

	/**
	 * CASE 3: ACCEPT BUTTON CLICK
	 * This test verifies that clicking the accept button
	 * triggers the accept handler.
	 */
	it("calls handleAcceptCookies when accept button is clicked", () => {
		const mockAccept = jest.fn();

		render(
			<CookieConsentBanner
				isCookiesBannerVisible={true}
				handleAcceptCookies={mockAccept}
				handleDeclineCookies={jest.fn()}
			/>
		);

		fireEvent.click(
			screen.getByText(
				COOKIE_CONSENT_BANNER_ACCEPT_BUTTON_TEXT
			)
		);

		expect(mockAccept).toHaveBeenCalled();
	});

	/**
	 * CASE 4: DECLINE BUTTON CLICK
	 * This test verifies that clicking the decline button
	 * triggers the decline handler.
	 */
	it("calls handleDeclineCookies when decline button is clicked", () => {
		const mockDecline = jest.fn();

		render(
			<CookieConsentBanner
				isCookiesBannerVisible={true}
				handleAcceptCookies={jest.fn()}
				handleDeclineCookies={mockDecline}
			/>
		);

		fireEvent.click(
			screen.getByText(
				COOKIE_CONSENT_BANNER_DECLINE_BUTTON_TEXT
			)
		);

		expect(mockDecline).toHaveBeenCalled();
	});
});
