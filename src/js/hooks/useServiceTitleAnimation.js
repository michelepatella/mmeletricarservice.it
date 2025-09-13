import { useEffect } from "react";
import { SERVICES_TITLE } from "../utils/const";

/**
 * Custom hook to animate services title.
 * @param inView
 * @param setDisplayedWords
 */
export const useServiceTitleAnimation = (
	inView,
	setDisplayedWords
) => {
	useEffect(() => {
		// Animate the section title iff the
		// section is visible
		if (!inView) return;

		let currentIndex = 0;

		/**
		 * Method to type each word composing
		 * the overall title.
		 * @param word
		 * @param i
		 */
		function typeWord(word, i = 0) {
			// Until there is a letter of the
			// word to be typed
			if (i <= word.length) {
				// Type that letter
				setDisplayedWords((prev) => {
					const copy = [...prev];
					copy[currentIndex] = word.slice(0, i);
					return copy;
				});

				// To add delay before typing the next
				// letter (if any)
				setTimeout(() => typeWord(word, i + 1), 50);
			} else {
				// If the whole word has been typed
				currentIndex++;

				// Check whether that word was the last one
				// or not
				if (currentIndex < SERVICES_TITLE.length) {
					// If that word wasn't the last one, add
					// delay before typing the next word
					setTimeout(
						() =>
							typeWord(SERVICES_TITLE[currentIndex].text),
						200
					);
				}
			}
		}

		// Call the function to type
		// the current word
		typeWord(SERVICES_TITLE[currentIndex].text);
	}, [inView]);
};
