import React from "react";
import { HashRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import {
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { Button } from "antd";
import { COOKIE_BUTTON_ARIA_LABEL } from "./utils/const";
import { useCookieConsent } from "./hooks/useCookieConsent";
import { handleCookieButtonClick } from "./logic/handling/cookieButtonHandler";
import Home from "./sections/home";
import AboutUs from "./sections/about-us";
import OurValues from "./sections/our-values";
import Services from "./sections/services";
import UsedCars from "./sections/used-cars";
import WhereWeAre from "./sections/where-we-are";
import Contacts from "./sections/contacts";
import SectionsWrapper from "./components/other/SectionsWrapper";
import Menu from "./components/menu/Menu/Menu";
import CookieConsentBanner from "./components/cookie/CookieConsentBanner/CookieConsentBanner";
import "../index.css";
import "../styles/App.css";
import "../styles/sections/home.css";
import "../styles/sections/our-values.css";
import "../styles/sections/services.css";
import "../styles/sections/used-cars.css";
import "../styles/sections/where-we-are.css";
import "../styles/sections/contacts.css";
import "../styles/components/home/HomeHeader.css";
import "../styles/components/home/HomeContent.css";
import "../styles/components/contacts/ContactsContent.css";
import "../styles/components/contacts/ContactsFooter.css";
import "../styles/components/cookie/CookieButton.css";
import "../styles/components/cookie/CookieConsentBanner.css";
import "../styles/components/custom/CustomButton.css";
import "../styles/components/custom/CustomIconButton.css";
import "../styles/components/custom/CustomText.css";
import "../styles/components/custom/CustomBackButton.css";
import "../styles/components/custom/CustomBlockQuote.css";
import "../styles/components/custom/CustomLink.css";
import "../styles/components/used-cars/UsedCarOverview.css";
import "../styles/components/used-cars/UsedCarCard.css";
import "../styles/components/used-cars/drawer/UsedCarDrawer.css";
import "../styles/components/used-cars/drawer/UsedCarDrawerCarousel.css";
import "../styles/components/used-cars/drawer/UsedCarDrawerCollapse.css";
import "../styles/components/other/Menu.css";
import "../styles/components/other/InfoCard.css";
import "../styles/components/other/LoadingOutlined.css";
import "../styles/components/other/SectionContainer.css";
import "../styles/components/other/SectionsWrapper.css";
import "../styles/variables.css";

/**
 * The entry-point of the web application
 * @returns {Element}
 * @constructor
 */
function App() {
	// State to manage cookie accepting/refusing
	const {
		cookiesAccepted,
		isCookiesBannerVisible,
		handleAcceptCookies,
		handleDeclineCookies,
		setIsCookiesBannerVisible,
	} = useCookieConsent();

	const queryClient = new QueryClient();

	return (
		<>
			{/* Vercel Analytics (cookie-free and
			privacy-friendly) */}
			<Analytics />
			{/* React Router (HashRouter for the navigation
			across the web application) */}
			<HashRouter>
				{/* To fetch and cache data from backend */}
				<QueryClientProvider client={queryClient}>
					<>
						{/* Cookies button (to show only if the cookie
						 consent banner is not visible) */}
						{!isCookiesBannerVisible && (
							<Button
								className="cookie-button"
								aria-label={COOKIE_BUTTON_ARIA_LABEL}
								onClick={() =>
									handleCookieButtonClick(
										setIsCookiesBannerVisible
									)
								}
							/>
						)}

						{/* Cookie Consent Banner */}
						<CookieConsentBanner
							isCookiesBannerVisible={
								isCookiesBannerVisible
							}
							handleAcceptCookies={handleAcceptCookies}
							handleDeclineCookies={handleDeclineCookies}
						/>

						{/* Menu */}
						<Menu />

						{/* Sections */}
						<Home />
						<SectionsWrapper>
							<AboutUs />
							<OurValues />
							<Services />
							<UsedCars />
							<WhereWeAre
								cookiesAccepted={cookiesAccepted}
							/>
							<Contacts />
						</SectionsWrapper>
					</>
				</QueryClientProvider>
			</HashRouter>
		</>
	);
}

export default App;
