/**
 * @jest-environment jsdom
 */

import { renderHook } from "@testing-library/react";
import { useUsedCarInfo } from "./use-used-car-info";
import { useQuery } from "@tanstack/react-query";
import { USED_CAR_INFO_ENDPOINT } from "../../../../../../utils/const.js";
import { USED_CAR_INFO_API_KEY } from "../../const.js";
import { SentryReact } from "../../../../../../index.js";

// Mocks
jest.mock("@tanstack/react-query", () => ({
	useQuery: jest.fn(),
}));
jest.mock("../../../../../../utils/data-fetcher/data-fetcher.js", () => ({
	fetchData: jest.fn(),
}));
jest.mock("../../../../../../index.js", () => ({
	SentryReact: {
		logger: {
			error: jest.fn(),
		},
	},
}));

/**
 * Test suite for useUsedCarInfo hook.
 * The test suite contains:
 * 1. A test verifying the data mapping from API response.
 * 2. A test verifying fallback to null when data is undefined.
 * 3. A test verifying the loading state propagation.
 * 4. A test verifying error logging to Sentry.
 */
describe("useUsedCarInfo", () => {

    // Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: DATA MAPPING
	 * Should return used car info correctly mapped.
	 */
	it("should return mapped used car info", () => {
		useQuery.mockReturnValue({
			data: {
				used_car_info: {
					images: ["img1.jpg"],
				},
			},
			isLoading: false,
			isError: false,
		});

		const { result } = renderHook(() =>
			useUsedCarInfo({ usedCarId: "12" })
		);

		expect(result.current.usedCarInfo).toEqual({
			images: ["img1.jpg"],
		});
	});

    /**
	 * CASE 2: EMPTY FALLBACK
	 * Should return null when data is undefined.
	 */
	it("should return null when data is undefined", () => {
		useQuery.mockReturnValue({
			data: undefined,
			isLoading: false,
			isError: false,
		});

		const { result } = renderHook(() =>
			useUsedCarInfo({ usedCarId: "12" })
		);

		expect(result.current.usedCarInfo).toBeNull();
	});

    /**
	 * CASE 3: LOADING STATE
	 * Should expose isLoading correctly.
	 */
	it("should return loading state correctly", () => {
		useQuery.mockReturnValue({
			data: undefined,
			isLoading: true,
			isError: false,
		});

		const { result } = renderHook(() =>
			useUsedCarInfo({ usedCarId: "12" })
		);

		expect(result.current.isLoading).toBe(true);
	});

    /**
	 * CASE 4: ERROR LOGGING
	 * Should log error to Sentry when query fails.
	 */
	it("should log error to Sentry when query fails", () => {
		useQuery.mockReturnValue({
			data: undefined,
			isLoading: false,
			isError: true,
		});

		renderHook(() =>
			useUsedCarInfo({ usedCarId: "12" })
		);

		expect(SentryReact.logger.error).toHaveBeenCalledWith(
			"Error while fetching " + USED_CAR_INFO_API_KEY + " data",
			{
				carId: "12",
				endpoint: USED_CAR_INFO_ENDPOINT,
			}
		);
	});
});