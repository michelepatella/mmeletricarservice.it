/**
 * @jest-environment jsdom
 */

/* eslint-disable import/first */

// Mocks
jest.mock(
	"./use-cookie-consent/use-cookie-consent.js",
	() => ({
		useCookieConsent: () => ({
			cookiesAccepted: true,
			isCookiesBannerVisible: false,
			handleAcceptCookies: jest.fn(),
			handleDeclineCookies: jest.fn(),
			setIsCookiesBannerVisible: jest.fn(),
		}),
	})
);
jest.mock(
	"@vercel/analytics/react",
	() => ({
		Analytics: () => <div data-testid="analytics" />,
	}),
	{ virtual: true }
);
jest.mock(
	"react-router-dom",
	() => ({
		HashRouter: ({ children }) => (
			<div data-testid="hash-router">{children}</div>
		),
	}),
	{ virtual: true }
);
jest.mock(
	"../components/Menu/MenuWrapper/MenuWrapper.js",
	() => () => <div data-testid="menu-wrapper" />
);
jest.mock(
	"../components/CookieConsentBanner/CookieConsentBanner.js",
	() => () => <div data-testid="cookie-banner" />
);
jest.mock(
	"../components/CookieButton/CookieButton.js",
	() => () => <div data-testid="cookie-button" />
);
jest.mock(
	"../components/SectionsWrapper/SectionsWrapper.js",
	() =>
		({ children }) => (
			<div data-testid="sections-wrapper">{children}</div>
		)
);
jest.mock("../sections/Home/Home/Home.js", () => () => (
	<div data-testid="home-section" />
));
jest.mock("../sections/AboutUs/AboutUs.js", () => () => (
	<div data-testid="about-us-section" />
));
jest.mock(
	"../sections/OurValues/OurValues.js",
	() => () => <div data-testid="our-values-section" />
);
jest.mock("../sections/Services/Services.js", () => () => (
	<div data-testid="services-section" />
));
jest.mock("../sections/UsedCars/UsedCars.js", () => () => (
	<div data-testid="used-cars-section" />
));
jest.mock(
	"../sections/WhereWeAre/WhereWeAre.js",
	() => () => <div data-testid="where-we-are-section" />
);
jest.mock(
	"../sections/Contacts/Contacts/Contacts.js",
	() => () => <div data-testid="contacts-section" />
);

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App.js";

/**
 * Test suite for the main App component.
 * The suite contains:
 * 1. Rendering of the app without crashing.
 * 2. Presence of key elements (analytics, menu, cookie banner/button, sections).
 */
describe("App", () => {
	/**
	 * CASE 1: SMOKE TEST
	 * The app should render without crashing.
	 */
	it("should render without crashing", () => {
		render(<App />);
	});

	/**
	 * CASE 2: CHECK KEY COMPONENTS
	 * The app should render:
	 * - Analytics
	 * - Menu wrapper
	 * - Cookie banner / button
	 * - All main sections
	 */
	it("should render key components correctly", () => {
		render(<App />);

		// Analytics component
		expect(
			screen.getByTestId("analytics")
		).toBeInTheDocument();

		// Menu wrapper
		expect(
			screen.getByTestId("menu-wrapper")
		).toBeInTheDocument();

		// Cookie banner / button
		expect(
			screen.getByTestId("cookie-banner")
		).toBeInTheDocument();
		expect(
			screen.getByTestId("cookie-button")
		).toBeInTheDocument();

		// Main sections
		expect(
			screen.getByTestId("home-section")
		).toBeInTheDocument();
		expect(
			screen.getByTestId("about-us-section")
		).toBeInTheDocument();
		expect(
			screen.getByTestId("our-values-section")
		).toBeInTheDocument();
		expect(
			screen.getByTestId("services-section")
		).toBeInTheDocument();
		expect(
			screen.getByTestId("used-cars-section")
		).toBeInTheDocument();
		expect(
			screen.getByTestId("where-we-are-section")
		).toBeInTheDocument();
		expect(
			screen.getByTestId("contacts-section")
		).toBeInTheDocument();

		// Sections wrapper
		expect(
			screen.getByTestId("sections-wrapper")
		).toBeInTheDocument();
	});
});
