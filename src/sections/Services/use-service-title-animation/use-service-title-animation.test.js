/**
 * @jest-environment jsdom
 */

import { renderHook, act } from "@testing-library/react";
import { useServiceTitleAnimation } from "./use-service-title-animation.js";

// Mock
jest.mock("../const.js", () => ({
	SERVICES_TITLE: [
		{ text: "SERVICES" },
		{ text: "QUALITY" },
	],
	SERVICES_TITLE_ANIMATION_LETTERS_DELAY: 0,
	SERVICES_TITLE_ANIMATION_WORDS_DELAY: 0,
}));

/**
 * Test suite for useServiceTitleAnimation hook.
 * The test suite contains:
 * 1. A test to verify that animation does not start when inView is false.
 * 2. A test to verify that animation functions are called when inView is true.
 * 3. A test to verify that activeIndex is set to -1 when animation completes.
 * 4. A test to verify that displayed words are updated during animation.
 */
describe("useServiceTitleAnimation", () => {

	// Mock state setters
	let setDisplayedWords;
	let setActiveIndex;

	// Define behavior before each test
	beforeEach(() => {
		jest.useFakeTimers();

		setDisplayedWords = jest.fn();
		setActiveIndex = jest.fn();
	});

    // Define behavior after each test
	afterEach(() => {
		jest.useRealTimers();
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: IN VIEW FALSE
	 * Should not trigger animation when section is not visible.
	 */
	it("should not start animation when inView is false", () => {
		renderHook(() =>
			useServiceTitleAnimation(false, setDisplayedWords, setActiveIndex)
		);

		expect(setActiveIndex).not.toHaveBeenCalled();
		expect(setDisplayedWords).not.toHaveBeenCalled();
	});

	/**
	 * CASE 2: IN VIEW TRUE
	 * Should start animation when section is visible.
	 */
	it("should start animation when inView is true", () => {
		renderHook(() =>
			useServiceTitleAnimation(true, setDisplayedWords, setActiveIndex)
		);

		act(() => {
			jest.runOnlyPendingTimers();
		});

		expect(setActiveIndex).toHaveBeenCalled();
	});

    /**
     * CASE 3: ANIMATION END
     * Should set activeIndex to -1 when animation completes.
     */
    it("should set activeIndex to -1 when animation completes", () => {
        renderHook(() =>
            useServiceTitleAnimation(true, setDisplayedWords, setActiveIndex)
        );

        act(() => {
            jest.runAllTimers();
        });

        expect(setActiveIndex).toHaveBeenCalledWith(-1);
    });

    /**
     * CASE 4: DISPLAYED WORDS UPDATE
     * Should update displayed words during animation.
     */
    it("should update displayed words during animation", () => {
        renderHook(() =>
            useServiceTitleAnimation(true, setDisplayedWords, setActiveIndex)
        );

        act(() => {
            jest.runOnlyPendingTimers();
        });

        expect(setDisplayedWords).toHaveBeenCalled();
    });
});