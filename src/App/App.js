import React from "react";
import {
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { HashRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { useCookieConsent } from "./useCookieConsent";
import Home from "../sections/Home/Home/Home";
import AboutUs from "../sections/AboutUs/AboutUs";
import OurValues from "../sections/OurValues/OurValues";
import Services from "../sections/Services/Services";
import UsedCars from "../sections/UsedCars/UsedCars/UsedCars";
import WhereWeAre from "../sections/WhereWeAre/WhereWeAre";
import Contacts from "../sections/Contacts/Contacts/Contacts";
import SectionsWrapper from "../components/SectionsWrapper/SectionsWrapper";
import MenuWrapper from "../components/Menu/MenuWrapper/MenuWrapper";
import CookieConsentBanner from "../components/CookieConsentBanner/CookieConsentBanner";
import CookieButton from "../components/CookieButton/CookieButton";
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
import "../components/CustomIconButton/CustomIconButton.css";
import "../components/CustomText/CustomText.css";
import "../components/CustomBackButton/CustomBackButton.css";
import "../components/CustomBlockQuote/CustomBlockQuote.css";
import "../components/CustomLink/CustomLink.css";
import "../components/InfoCard/InfoCard.css";
import "../components/SectionsWrapper/SectionsWrapper.css";
import "../components/SectionContainer/SectionContainer.css";
import "../components/BackgroundContainer/BackgroundContainer.css";
import "../components/Menu/MenuBigScreen/MenuBigScreen.css";
import "../components/Menu/MenuSmallScreen/MenuSmallScreen.css";
import "../components/CustomLoadingOutlined/CustomLoadingOutlined.css";
import "../design-tokens/colors.css";
import "../design-tokens/typography.css";
import "../design-tokens/elevations.css";
import "../design-tokens/borders.css";
import "../design-tokens/layout.css";
import "../design-tokens/background.css";
import "../design-tokens/animations.css";
import "../design-tokens/media.css";

/**
 * The entry-point of the web application.
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
