/**
 * @jest-environment jsdom
 */

import { renderHook } from "@testing-library/react";
import { useUsedCarsOverview } from "./use-used-cars-overview";
import { useQuery } from "@tanstack/react-query";
import { USED_CARS_OVERVIEW_ENDPOINT } from "../../../utils/const.js";
import { USED_CARS_OVERVIEW_API_KEY } from "../const.js";
import { SentryReact } from "../../../index.js";

// Mocks
jest.mock("@tanstack/react-query", () => ({
	useQuery: jest.fn(),
}));
jest.mock("../../../utils/data-fetcher/data-fetcher.js", () => ({
	fetchData: jest.fn(),
}));
jest.mock("../../../index.js", () => ({
	SentryReact: {
		logger: {
			error: jest.fn(),
		},
	},
}));

/**
 * Test suite for useUsedCarsOverview hook.
 * The test suite contains:
 * 1. A test to verify correct data mapping.
 * 2. A test to verify fallback to empty array.
 * 3. A test to verify loading state propagation.
 * 4. A test to verify Sentry logging on error.
 */
describe("useUsedCarsOverview", () => {

	// Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: DATA MAPPING
	 * Should return used cars overview data correctly mapped.
	 */
	it("should return mapped used cars overview data", () => {

		useQuery.mockReturnValue({
			data: {
				used_cars_overview: [
					{ id: 1 },
					{ id: 2 },
				],
			},
			isLoading: false,
			isError: false,
		});

		const { result } = renderHook(() =>
			useUsedCarsOverview()
		);

		expect(result.current.usedCarsOverview).toEqual([
			{ id: 1 },
			{ id: 2 },
		]);
	});

	/**
	 * CASE 2: EMPTY FALLBACK
	 * Should return empty array when data is undefined.
	 */
	it("should return empty array when data is undefined", () => {

		useQuery.mockReturnValue({
			data: undefined,
			isLoading: false,
			isError: false,
		});

		const { result } = renderHook(() =>
			useUsedCarsOverview()
		);

		expect(result.current.usedCarsOverview).toEqual([]);
	});

	/**
	 * CASE 3: LOADING STATE
	 * Should expose isLoading from react-query.
	 */
	it("should return loading state correctly", () => {

		useQuery.mockReturnValue({
			data: undefined,
			isLoading: true,
			isError: false,
		});

		const { result } = renderHook(() =>
			useUsedCarsOverview()
		);

		expect(result.current.isLoading).toBe(true);
	});

	/**
	 * CASE 4: SENTRY ERROR LOGGING
	 * Should log error when isError is true.
	 */
	it("should log error to Sentry when query fails", () => {

		useQuery.mockReturnValue({
			data: undefined,
			isLoading: false,
			isError: true,
		});

		renderHook(() =>
			useUsedCarsOverview()
		);

		expect(SentryReact.logger.error).toHaveBeenCalledWith(
			"Error while fetching " +
				USED_CARS_OVERVIEW_API_KEY +
				" data",
			{
				endpoint: USED_CARS_OVERVIEW_ENDPOINT,
			}
		);
	});
});