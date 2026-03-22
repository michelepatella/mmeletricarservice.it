/* eslint-disable import/first */

// Mock
jest.mock("../../index.js", () => ({
    SentryReact: { logger: { error: jest.fn() } },
}));

import { fetchData } from "./data-fetcher.js";
import { API_FOLDER_PATH } from "../const.js";
import { SentryReact } from "../../index.js";

// Mocks
global.fetch = jest.fn();
SentryReact.logger = {
	error: jest.fn(),
};

/**
 * Test suite for fetchData utility.
 * This test suite contains:
 * 1. A test for successful fetch that returns JSON data.
 * 2. A test for fetch that returns an error response.
 * 3. A test for fetch that throws other errors.
 */
describe("fetchData", () => {
    const endpoint = "test-endpoint";
    const mockResponse = { data: "test" };

    // Define the behavior before each test
    beforeEach(() => {
        jest.clearAllMocks();
    });

    /**
     * CASE 1: SUCCESSFUL FETCH
     * Should return parsed JSON when fetch is successful.
     */
    it("should return JSON data on successful fetch", async () => {
        fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => mockResponse,
		});

		const result = await fetchData(endpoint);

		expect(result).toEqual(mockResponse);
		expect(fetch).toHaveBeenCalledWith(API_FOLDER_PATH + endpoint);
    });

    /**
     * CASE 2: FETCH RETURNS ERROR
     * Should log error to Sentry and throw the error.
     */
    it("should log error and throw if fetch response is not ok", async () => {
        const errorData = { error: "Test error" };
		fetch.mockResolvedValueOnce({
			ok: false,
			json: async () => errorData,
		});

		await expect(fetchData(endpoint)).rejects.toThrow(errorData.error);
		expect(SentryReact.logger.error).toHaveBeenCalled();
    });

    /**
     * CASE 3: OTHER FETCH ERRORS
     * Should log error to Sentry and throw the error.
     */
    it("should log error and throw if fetch throws", async () => {
        const otherError = new Error("Test error");
		fetch.mockRejectedValueOnce(otherError);

		await expect(fetchData(endpoint)).rejects.toThrow("Test error");
		expect(SentryReact.logger.error).toHaveBeenCalledWith(
			otherError,
			expect.objectContaining({ context: "Data fetching" })
		);
    });
});