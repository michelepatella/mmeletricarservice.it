import { useEffect } from "react";
import {
	SERVICES_TITLE,
	SERVICES_TITLE_ANIMATION_LETTERS_DELAY,
	SERVICES_TITLE_ANIMATION_WORDS_DELAY,
} from "./const";

/**
 * Custom hook to animate services title.
 * @param inView
 * @param setDisplayedWords
 * @param setActiveIndex
 */
export const useServiceTitleAnimation = (
	inView,
	setDisplayedWords,
	setActiveIndex
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
			// Update the current index (active word)
			setActiveIndex(currentIndex);

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
				setTimeout(
					() => typeWord(word, i + 1),
					SERVICES_TITLE_ANIMATION_LETTERS_DELAY
				);
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
						SERVICES_TITLE_ANIMATION_WORDS_DELAY
					);
				} else {
					// Everything is finished, set the current
					// index to an out of range value
					setActiveIndex(-1);
				}
			}
		}

		// Call the function to type
		// the current word
		typeWord(SERVICES_TITLE[currentIndex].text);
	}, [inView, setActiveIndex, setDisplayedWords]);
};
