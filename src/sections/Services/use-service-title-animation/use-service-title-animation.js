import { useEffect } from "react";
import {
	SERVICES_TITLE,
	SERVICES_TITLE_ANIMATION_LETTERS_DELAY,
	SERVICES_TITLE_ANIMATION_WORDS_DELAY,
} from "../const.js";

/**
 * Custom hook to animate the 'Services' section's title.
 * @param inView — State keeping track whether
 * the 'Services' section is in view or not.
 * @param setDisplayedWords — State setter to keep track of
 * words displayed so far.
 * @param setActiveIndex — State setter to keep track of
 * current letter (index) that is going to be displayed.
 */
export const useServiceTitleAnimation = (
	inView,
	setDisplayedWords,
	setActiveIndex
) => {
	useEffect(() => {
		// Animate the title if and only 
		// if the section is visible
		if (!inView) 
			return;

		// Check whether the title is not valid
		if (!SERVICES_TITLE || SERVICES_TITLE.length === 0)
			return;

		let currentIndex = 0;

		/**
		 * Method to type each word composing the overall title.
		 * @param word — The word to be typed.
		 * @param i — The index of the letter to be typed.
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

				// Add a delay before typing the next
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
