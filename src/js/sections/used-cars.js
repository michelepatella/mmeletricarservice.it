import { LoadingOutlined } from "@ant-design/icons";
import {
	USED_CAR_SCROLL_LABEL_TEXT,
	USED_CARS_UNAVAILABLE_DESCRIPTION,
} from "../utils/const";
import {
	handleScrollLabelStyle,
	handleUnavailableUsedCarDescriptionStyle,
} from "../logic/style-handling/usedCarsStyleHandler";
import SectionContainer from "../components/sections/SectionContainer/SectionContainer";
import UsedCarCard from "../components/used-cars/UsedCarCard";
import CustomText from "../components/custom/CustomText/CustomText";
import { useUsedCarsOverview } from "../hooks/useUsedCarsOverview";
import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";

/**
 * This component represents the Used car section.
 * This section shows all the used cars available via cards.
 * When the section is loaded, all the used car overview information
 * is loaded from the backend, in order to show them in the cards.
 * @returns {JSX.Element}
 * @constructor
 */
function UsedCars() {
	const { usedCarsOverview, isLoading } =
		useUsedCarsOverview();

	const rotatingTexts = [
		{ text: "di qualità.", color: "#FF6B6B" },
		{ text: "garantita.", color: "#4D9EFF" },
		{ text: "conveniente.", color: "#4DFF8D" },
		{ text: "wow.", color: "#f8de4d" },
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [displayedText, setDisplayedText] = useState("");

	useEffect(() => {
		let timeout;

		const fullText = rotatingTexts[currentIndex].text;

		function typeWriter(i = 0) {
			if (i <= fullText.length) {
				setDisplayedText(fullText.slice(0, i));
				timeout = setTimeout(() => typeWriter(i + 1), 100); // velocità scrittura
			} else {
				timeout = setTimeout(
					() => eraseWriter(fullText.length - 1),
					1000
				); // attesa prima di cancellare
			}
		}

		function eraseWriter(i) {
			if (i >= 0) {
				setDisplayedText(fullText.slice(0, i));
				timeout = setTimeout(() => eraseWriter(i - 1), 50); // velocità cancellazione
			} else {
				// passa al prossimo testo
				setCurrentIndex(
					(prev) => (prev + 1) % rotatingTexts.length
				);
			}
		}

		typeWriter();

		return () => clearTimeout(timeout);
	}, [currentIndex]);

	return (
		<SectionContainer id="auto-usate">
			<div style={{ margin: "1rem 0" }}>
				{/* Titolo fisso */}
				<h1
					style={{
						fontSize: "clamp(43px, 6vw, 120px)",
						color: "white",
						margin: 0,
						padding: 0,
						lineHeight: 1.2,
					}}
				>
					La tua prossima auto usata è
				</h1>

				{/* Testo dinamico sotto */}
				<div
					style={{
						margin: 0,
						padding: 0,
						display: "inline-flex",
						alignItems: "center",
						marginTop: "0.5rem",
						minHeight: "clamp(43px, 6vw, 120px)", // blocca l’altezza per evitare "salti"
					}}
				>
					<animated.span
						style={{
							margin: 0,
							padding: 0,
							fontSize: "clamp(43px, 6vw, 120px)",
							fontWeight: "bold",
							color: rotatingTexts[currentIndex].color,
							lineHeight: 1.2,
						}}
					>
						{
							displayedText ||
								"\u00A0" /* spazio invisibile se vuoto */
						}
					</animated.span>
					<span
						className="cursor"
						style={{
							fontSize: "clamp(43px, 6vw, 120px)",
							color: rotatingTexts[currentIndex].color,
							marginLeft: "2px",
							fontWeight: "bold",
							animation: "blink 1s step-start infinite",
						}}
					>
						|
					</span>
				</div>
			</div>

			{/* Loading */}
			{isLoading && (
				<LoadingOutlined
					className="loading-outlined"
					spin
				/>
			)}

			{/* Cars available */}
			{!isLoading && usedCarsOverview?.length > 0 && (
				<>
					<div className="used-cars-container">
						{usedCarsOverview.map((car) => (
							<UsedCarCard
								key={car.id}
								usedCarOverview={car}
							/>
						))}
					</div>
					<CustomText
						type="body"
						text={USED_CAR_SCROLL_LABEL_TEXT}
						style={handleScrollLabelStyle()}
					/>
				</>
			)}

			{/* No cars available */}
			{!isLoading &&
				(!usedCarsOverview ||
					usedCarsOverview.length === 0) && (
					<div className="unavailable-used-cars-container">
						<CustomText
							type="body"
							text={USED_CARS_UNAVAILABLE_DESCRIPTION}
							style={handleUnavailableUsedCarDescriptionStyle()}
						/>
						<img
							src="/images/empty-used-cars-image.avif"
							alt="unavailable-used-cars"
							loading="lazy"
						/>
					</div>
				)}
		</SectionContainer>
	);
}

export default UsedCars;
