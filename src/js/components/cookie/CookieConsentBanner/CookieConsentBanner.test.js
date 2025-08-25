import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import CookieConsentBanner from "./CookieConsentBanner";

// Definition of expected results
const cookieExpirationDate = 365;
const cookieAcceptButtonText = "Cookie Accept Button Text";
const cookieDeclineButtonText = "Cookie Decline Button Text";
const cookieConsentBannerDescription = "Cookie Consent Banner Description";
const cookiePolicyText = "Cookie Policy Text";
const privacyPolicyText = "Privacy Policy Text";
const cookiePolicyHref = "cookie-policy-link";
const privacyPolicyHref = "privacy-policy-link";
const targetAttr = "_blank";
const relAttr = "noopener noreferrer";
const cookieConsentTestId = "mock-cookie-consent"

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
];

// Mock the 'react-cookie-consent' library component
jest.mock("react-cookie-consent", () => {
  return ({
    buttonText,
    declineButtonText,
    children,
    onAccept,
    onDecline,
    ...props
  }) => (
    <div data-testid={cookieConsentTestId} {...props}>
      {children}
      <button onClick={onAccept}>{buttonText}</button>
      <button onClick={onDecline}>{declineButtonText}</button>
    </div>
  );
});

// Mock constants
jest.mock("../../../utils/const", () => ({
  COOKIE_EXPIRATION_DATE: cookieExpirationDate,
  COOKIE_ACCEPT_BUTTON_TEXT: cookieAcceptButtonText,
  COOKIE_DECLINE_BUTTON_TEXT: cookieDeclineButtonText,
  COOKIE_CONSENT_BANNER_DESCRIPTION: cookieConsentBannerDescription,
  COOKIE_POLICY_TEXT: cookiePolicyText,
  PRIVACY_POLICY_TEXT: privacyPolicyText,
}));

// Mock links
jest.mock("../../../utils/links", () => ({
  COOKIE_POLICY_LINK: cookiePolicyHref,
  PRIVACY_POLICY_LINK: privacyPolicyHref,
}));

// Mock the cookies click handlers
const mockHandleAcceptCookies = jest.fn();
const mockHandleDeclineCookies = jest.fn();

// Run the test
describe("CookieConsentBanner", () => {
  // Clear all mocks before running the test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test if it renders the banner when visible
  test("renders the content of cookie consent banner when visible", () => {
    render(
        <CookieConsentBanner isCookiesBannerVisible={true} />
    );

    expect(
      screen.getByText((content) =>
        content.includes(cookieConsentBannerDescription),
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) =>
          content.includes(cookieAcceptButtonText)
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) =>
          content.includes(cookieDeclineButtonText)
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) =>
          content.includes(privacyPolicyText)
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) =>
          content.includes(cookiePolicyText)
      ),
    ).toBeInTheDocument();
  });

  // Test if it doesn't render the banner when not visible
  test("doesn't render the content of cookie consent banner when not visible", () => {
    render(
        <CookieConsentBanner isCookiesBannerVisible={false} />
    );

    expect(
      screen.queryByText((content) =>
        content.includes(cookieConsentBannerDescription),
      ),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText((content) =>
          content.includes(cookieAcceptButtonText)
      ),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText((content) =>
        content.includes(cookieDeclineButtonText),
      ),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText((content) =>
          content.includes(privacyPolicyText)
      ),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText((content) =>
          content.includes(cookiePolicyText)
      ),
    ).not.toBeInTheDocument();
  });

  // Test if it renders links to privacy and cookie policies correctly
  test("renders links to privacy and cookie policies correctly", () => {
    render(
        <CookieConsentBanner isCookiesBannerVisible={true} />
    );

    // Test if each link is correctly displayed
    links.forEach((link) => {
      const domLink = screen.getByText(link.text);
      expect(domLink).toBeInTheDocument();
      expect(domLink).toHaveAttribute("href", link.href);
      expect(domLink).toHaveAttribute("target", targetAttr);
      expect(domLink).toHaveAttribute("rel", relAttr);
    });
  });

  // Test if it calls the proper method when the accept button is clicked
  test("calls the proper method when the accept button is clicked", () => {
    render(
      <CookieConsentBanner
        isCookiesBannerVisible={true}
        handleAcceptCookies={mockHandleAcceptCookies}
        handleDeclineCookies={mockHandleDeclineCookies}
      />,
    );

    fireEvent.click(screen.getByText(cookieAcceptButtonText));
    expect(mockHandleAcceptCookies).toHaveBeenCalledTimes(1);
  });

  // Test if it calls the proper method when the decline button is clicked
  test("calls the proper method when the decline button is clicked", () => {
    render(
      <CookieConsentBanner
        isCookiesBannerVisible={true}
        handleAcceptCookies={mockHandleAcceptCookies}
        handleDeclineCookies={mockHandleDeclineCookies}
      />,
    );

    fireEvent.click(screen.getByText(cookieDeclineButtonText));
    expect(mockHandleDeclineCookies).toHaveBeenCalledTimes(1);
  });

  // Test if it sets the correct cookie expiration date
  test("sets the correct cookie expiration date", () => {
    // Render the component with the visibility active
    render(
        <CookieConsentBanner isCookiesBannerVisible={true} />
    );

    const mockCookieConsent = screen.getByTestId(cookieConsentTestId);
    expect(mockCookieConsent).toHaveAttribute(
      "expires",
      cookieExpirationDate.toString(),
    );
  });
});
