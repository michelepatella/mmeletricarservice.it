/**
 * @jest-environment jsdom
 */

import { renderHook, act } from "@testing-library/react";
import useIntersectionObserver from "./use-intersection-observer.js";

// Mock
let callbackSpy;
let observeSpy;
let unobserveSpy;

class IntersectionObserverMock {
	constructor(callback) {
		callbackSpy = callback;
		observeSpy = jest.fn();
		unobserveSpy = jest.fn();
		this.observe = observeSpy;
		this.unobserve = unobserveSpy;
	}
}

global.IntersectionObserver = IntersectionObserverMock;

/**
 * Test suite for the custom hook useIntersectionObserver.
 * This suite contains:
 * 1. A test to check the initial state when the element is not found.
 * 2. A test to verify that the hook initializes with isVisible = false.
 * 3. A test to verify that the hook updates isVisible when the element 
 *    enters the viewport.
 * 4. A test to verify that the hook updates isVisible when the element 
 *    leaves the viewport.
 * 5. A test to verify that the hook calls unobserve on cleanup.
 */
describe("useIntersectionObserver", () => {
	let element;

	// Define behavior before each test
	beforeEach(() => {
		element = document.createElement("div");
		document.body.appendChild(element);

		callbackSpy = null;
		observeSpy = null;
		unobserveSpy = null;
	});

	// Define behavior after each test
	afterEach(() => {
		document.body.removeChild(element);
		element = null;
	});

	/**
	 * CASE 1: ELEMENT NOT FOUND
	 * Hook should return false if the element if not found.
	 */
	it("should return false if element is not found", () => {
		const ref = { current: null };
		const { result } = renderHook(() =>
			useIntersectionObserver(ref, 0.5)
		);

		expect(result.current).toBe(false);
	});

	/**
	 * CASE 2: INITIAL STATE
	 * Hook should initialize with isVisible = false.
	 */
	it("should return false initially", () => {
		const ref = { current: element };
		const { result } = renderHook(() =>
			useIntersectionObserver(ref, 0.5)
		);

		expect(result.current).toBe(false);
		expect(observeSpy).toHaveBeenCalledWith(element);
	});

	/**
	 * CASE 3: ELEMENT ENTERS VIEW
	 * When the element enters the viewport, the hook should:
	 * - Set isVisible to true
	 * - Add "in-view" class
	 * - Unobserve the element
	 */
	it("should set isVisible to true and add 'in-view' class when element enters view", () => {
		const ref = { current: element };
		const { result } = renderHook(() =>
			useIntersectionObserver(ref, 0.5)
		);

		act(() => {
    		callbackSpy(
        		[{ isIntersecting: true, target: element }],
        		{ unobserve: unobserveSpy }
   			 );
		});

		expect(result.current).toBe(true);
		expect(element.classList.contains("in-view")).toBe(true);
	});

	/**
	 * CASE 4: ELEMENT LEAVES VIEW
	 * When the element exits the viewport, the hook should:
	 * - Set isVisible to false
	 */
	it("should set isVisible to false when element leaves view", () => {
		const ref = { current: element };
		const { result } = renderHook(() =>
			useIntersectionObserver(ref, 0.5)
		);

		act(() => {
			callbackSpy([{ isIntersecting: false, target: element }], {});
		});

		expect(result.current).toBe(false);
	});

	/**
	 * CASE 5: CLEANUP
	 * The hook should call unobserve on the element when unmounting.
	 */
	it("should unobserve element on cleanup", () => {
		const ref = { current: element };
		const { unmount } = renderHook(() =>
			useIntersectionObserver(ref, 0.5)
		);

		unmount();

		expect(unobserveSpy).toHaveBeenCalledWith(element);
	});
});