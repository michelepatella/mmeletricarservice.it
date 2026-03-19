import React from "react";
import {
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { HashRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { useCookieConsent } from "./use-cookie-consent/useCookieConsent.js";
import Home from "../sections/Home/Home/Home.js";
import AboutUs from "../sections/AboutUs/AboutUs.js";
import OurValues from "../sections/OurValues/OurValues.js";
import Services from "../sections/Services/Services.js";
import UsedCars from "../sections/UsedCars/UsedCars/UsedCars.js";
import WhereWeAre from "../sections/WhereWeAre/WhereWeAre.js";
import Contacts from "../sections/Contacts/Contacts/Contacts.js";
import SectionsWrapper from "../components/SectionsWrapper/SectionsWrapper.js";
import MenuWrapper from "../components/Menu/MenuWrapper/MenuWrapper.js";
import CookieConsentBanner from "../components/CookieConsentBanner/CookieConsentBanner.js";
import CookieButton from "../components/CookieButton/CookieButton.js";
import "../index.css";
import "./App.css";
import "../sections/Home/Home/Home.css";
import "../sections/Home/HomeHeader/HomeHeader.css";
import "../sections/Home/HomeContent/HomeContent.css";
import "../sections/AboutUs/AboutUs.css";
import "../sections/OurValues/OurValues.css";
import "../sections/Services/Services.css";
import "../sections/UsedCars/UsedCars/UsedCars.css";
import "../sections/UsedCars/UsedCarOverview/UsedCarOverview.css";
import "../sections/UsedCars/UsedCarCard/UsedCarCard.css";
import "../sections/UsedCars/UsedCarDrawer/UsedCarDrawer/UsedCarDrawer.css";
import "../sections/UsedCars/UsedCarDrawer/UsedCarDrawerCarousel/UsedCarDrawerCarousel.css";
import "../sections/UsedCars/UsedCarDrawer/UsedCarDrawerCollapse/UsedCarDrawerCollapse.css";
import "../sections/WhereWeAre/WhereWeAre.css";
import "../sections/Contacts/Contacts/Contacts.css";
import "../sections/Contacts/ContactsContent/ContactsContent.css";
import "../sections/Contacts/ContactsFooter/ContactsFooter.css";
import "../components/CookieButton/CookieButton.css";
import "../components/CookieConsentBanner/CookieConsentBanner.css";
import "../components/CustomButton/CustomButton.css";
import "../components/IconButton/IconButton.css";
import "../components/CustomText/CustomText.css";
import "../components/BackButton/BackButton.css";
import "../components/BlockQuote/BlockQuote.css";
import "../components/Link/Link.css";
import "../components/InfoCard/InfoCard.css";
import "../components/SectionsWrapper/SectionsWrapper.css";
import "../components/SectionContainer/SectionContainer.css";
import "../components/Menu/MenuBigScreen/MenuBigScreen.css";
import "../components/Menu/MenuSmallScreen/MenuSmallScreen.css";
import "../components/LoadingOutlined/LoadingOutlined.css";
import "../design-tokens/colors.css";
import "../design-tokens/typography.css";
import "../design-tokens/elevations.css";
import "../design-tokens/borders.css";
import "../design-tokens/background.css";
import "../design-tokens/animations.css";
import "../design-tokens/images.css";
import "../design-tokens/layout/size.css";
import "../design-tokens/layout/position.css";
import "../design-tokens/layout/spacing.css";
import "../design-tokens/layout/scroll.css";
import "../design-tokens/layout/other.css";

/**
 * The entry-point of the web application.
 * @returns {Element} — The main React element of the app.
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
						{/* Cookie button (to show only if the cookie
						 consent banner is not visible) */}
						{!isCookiesBannerVisible && (
							<CookieButton
								setIsCookiesBannerVisible={
									setIsCookiesBannerVisible
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

						{/* Menu Wrapper for both anchor
						and drawer menu */}
						<MenuWrapper />

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
