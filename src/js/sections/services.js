import { ALL_SERVICES } from "../utils/const";
import InfoCard from "../components/other/InfoCard/InfoCard";
import SectionContainer from "../components/sections/SectionContainer/SectionContainer";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

/**
 * This section represents Services section. The
 * section shows all the specialized services that the company
 * offers via informative cards (characterized by icon, title, and description).
 * @returns {Element}
 * @constructor
 */
function Services() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});
	const containerRef = useRef(null);
	const [scrollDirection, setScrollDirection] = useState(1); // 1 = destra, -1 = sinistra

	const words = [
		{
			text: "Prestazioni.",
			gradient: "linear-gradient(90deg, #FF4D4D, #FF8E53)",
		},
		{
			text: "Sicurezza.",
			gradient: "linear-gradient(90deg, #4D9EFF, #7CDFFF)",
		},
		{
			text: "Affidabilità.",
			gradient: "linear-gradient(90deg, #3AC775, #7DFFCC)",
		},
	];

	const [displayedWords, setDisplayedWords] = useState([
		"",
		"",
		"",
	]);
	const [scales, setScales] = useState(
		Array(ALL_SERVICES.length).fill(1)
	);
	const [userInteracted, setUserInteracted] =
		useState(false);

	useEffect(() => {
		if (!inView) return;

		let currentIndex = 0;

		function typeWord(word, i = 0) {
			if (i <= word.length) {
				setDisplayedWords((prev) => {
					const copy = [...prev];
					copy[currentIndex] = word.slice(0, i);
					return copy;
				});
				setTimeout(() => typeWord(word, i + 1), 50);
			} else {
				currentIndex++;
				if (currentIndex < words.length) {
					setTimeout(
						() => typeWord(words[currentIndex].text),
						200
					);
				}
			}
		}

		typeWord(words[currentIndex].text);
	}, [inView]);

	useEffect(() => {
		const container = containerRef.current;
		if (!container || userInteracted) return;

		let animationFrameId;

		const step = () => {
			if (!container || userInteracted) return;

			const speed = 0.3; // velocità dello scroll automatico
			container.scrollLeft += speed * scrollDirection;

			if (
				container.scrollLeft + container.clientWidth >=
				container.scrollWidth
			) {
				setScrollDirection(-1);
			} else if (container.scrollLeft <= 0) {
				setScrollDirection(1);
			}

			animationFrameId = requestAnimationFrame(step);
		};

		animationFrameId = requestAnimationFrame(step);

		// Blocca auto-scroll al primo input dell'utente
		const handleUserInteraction = () =>
			setUserInteracted(true);

		// desktop: click, scroll con mouse/trackpad
		container.addEventListener(
			"mousedown",
			handleUserInteraction
		);
		container.addEventListener(
			"wheel",
			handleUserInteraction
		);

		// mobile: touch o swipe
		container.addEventListener(
			"touchstart",
			handleUserInteraction
		);
		container.addEventListener(
			"touchmove",
			handleUserInteraction
		);

		return () => {
			cancelAnimationFrame(animationFrameId);
			container.removeEventListener(
				"mousedown",
				handleUserInteraction
			);
			container.removeEventListener(
				"wheel",
				handleUserInteraction
			);
			container.removeEventListener(
				"touchstart",
				handleUserInteraction
			);
			container.removeEventListener(
				"touchmove",
				handleUserInteraction
			);
		};
	}, [scrollDirection, userInteracted]);

	return (
		<SectionContainer id="servizi">
			<h1
				ref={ref}
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "0.5rem",
					minHeight: "calc(4 * clamp(43px, 6vw, 120px))",
					marginBottom: "2rem",
					fontSize: "clamp(43px, 6vw, 120px)",
					lineHeight: 1.2,
				}}
			>
				{words.map((word, index) => (
					<span
						key={index}
						style={{
							minHeight: "clamp(43px, 6vw, 120px)",
							display: "flex",
							alignItems: "center",
							background: word.gradient,
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						{displayedWords[index]}
					</span>
				))}
			</h1>

			<div
				ref={containerRef}
				style={{
					width: "130%",
					overflowY: "hidden",
					overflowX: "auto",
					display: "flex",
					flexDirection: "row",
					gap: "5rem",
				}}
			>
				{ALL_SERVICES?.map((service, index) => (
					<div
						key={service.title}
						style={{
							transform: `scale(${scales[index]})`,
							transition: "transform 0.2s",
							transformOrigin: "center",
						}}
					>
						<InfoCard
							title={service?.title}
							description={service?.description}
							icon={service?.icon}
						/>
					</div>
				))}
			</div>
		</SectionContainer>
	);
}

export default Services;
