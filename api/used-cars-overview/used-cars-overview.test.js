/* eslint-disable import/first */
jest.mock("../utils/setup.js", () => ({
	SentryNode: {
		logger: {
			error: jest.fn(),
			info: jest.fn(),
			warn: jest.fn(),
		},
		flush: jest.fn().mockResolvedValue(true),
	},
}));

import { getUsedCarData } from "../utils/getters/used-cars-data-getter.js";
import { getUsedCarImages } from "../utils/getters/used-car-images-getter.js";
import {
	USED_CAR_OVERVIEW_TABLE,
	USED_CAR_OVERVIEW_IMAGE_LIMIT,
	NO_USED_CAR_AVAILABLE_MESSAGE,
} from "./const.js";
import { P_LIMIT_CONCURRENCY } from "../utils/const.js";
import usedCarsOverviewHandler from "./used-cars-overview.js";
import { SentryNode } from "../utils/setup.js";
import pLimit from "p-limit";

// Mock p-limit
jest.mock("p-limit", () => {
	return jest.fn(() => (fn) => fn());
});

// Mock data retrieval functions
jest.mock("../utils/getters/used-cars-data-getter.js", () => ({
	getUsedCarData: jest.fn(),
}));
jest.mock("../utils/getters/used-car-images-getter.js", () => ({
	getUsedCarImages: jest.fn(),
}));

/**
 * Test suite for the handler function in used-cars-overview.js.
 * This suite includes:
 * 1. A test for successful retrieval of used cars overview, verifying
 *    the correct calls to data retrieval functions and the response structure.
 * 2. A test for the case where no used cars are available, verifying the
 *    correct response with an error message.
 * 3. A test for the case where getUsedCarImages returns an error, verifying
 *    that the handler handles it gracefully and still returns a valid response.
 * 4. A test for the case where getUsedCarData throws an error, verifying that
 *    the error is logged with Sentry and that a 500 response is returned.
 * 5. A test for the case where getUsedCarData returns null, verifying that the
 *    handler returns a 400 response with an appropriate error message.
 * 6. A test for the correct calculation of filledFieldsCount, verifying that
 *    null and empty string fields are excluded from the count of filled fields.
 */
describe("usedCarsOverviewHandler", () => {
	// Define behavior after each test
	afterEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: SUCCESSFUL RETRIEVAL OF USED CARS OVERVIEW
	 * Verify that, if everything works as expected, the handler:
	 * - Calls getUsedCarData with the correct table name.
	 * - Calls getUsedCarImages with the correct ID and limit.
	 * - Returns a response with status 200 and a JSON object containing the used cars overview.
	 */
	it("should return used cars overview with status 200 if successful", async () => {
		// Mock data for used cars overview
		const carsData = [
			{
				id: "1",
				name: "First Car",
				price: 10000,
				year: 2020,
				mileage: 50000,
				fuel: "Gasoline",
				status: "Good",
			},
			{
				id: "2",
				name: "Second Car",
				price: 15000,
				year: 2019,
				mileage: 60000,
				fuel: "Diesel",
				status: "Very Good",
			},
		];

		// Mock the data retrieval functions to
		// return the mock data
		getUsedCarData.mockResolvedValueOnce(carsData);
		getUsedCarImages.mockImplementation((id) =>
			Promise.resolve(["image_for_" + id])
		);

		// Mock the response object
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		// Call the handler function with a mock request
		// and the mocked response
		await usedCarsOverviewHandler({ query: {} }, res);

		// Assertions about the calls to the data retrieval functions
		expect(getUsedCarData).toHaveBeenCalledWith(
			USED_CAR_OVERVIEW_TABLE
		);
		expect(getUsedCarImages).toHaveBeenCalledWith(
			"1",
			USED_CAR_OVERVIEW_IMAGE_LIMIT
		);
		expect(getUsedCarImages).toHaveBeenCalledWith(
			"2",
			USED_CAR_OVERVIEW_IMAGE_LIMIT
		);

		// Assertions about the response
		expect(pLimit).toHaveBeenCalled();
		expect(pLimit).toHaveBeenCalledWith(
			P_LIMIT_CONCURRENCY
		);
		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith({
			used_cars_overview: [
				{
					id: "1",
					name: "First Car",
					price: 10000,
					year: 2020,
					mileage: 50000,
					fuel: "Gasoline",
					status: "Good",
					image: "image_for_1",
					fieldsCount: 7,
					filledFieldsCount: 7,
				},
				{
					id: "2",
					name: "Second Car",
					price: 15000,
					year: 2019,
					mileage: 60000,
					fuel: "Diesel",
					status: "Very Good",
					image: "image_for_2",
					fieldsCount: 7,
					filledFieldsCount: 7,
				},
			],
		});
	});

	/**
	 * CASE 2: NO USED CARS AVAILABLE
	 * Verify that, if getUsedCarData returns an empty array, the handler:
	 * - Returns a response with status 400 and a JSON object containing an
	 *   error message and the table name.
	 */
	it("should return 400 if no used cars are available", async () => {
		// Mock getUsedCarData to return an empty array,
		// simulating no used cars available
		getUsedCarData.mockResolvedValueOnce([]);

		// Mock the response object
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		// Call the handler function with a mock request
		await usedCarsOverviewHandler({ query: {} }, res);

		// Assertions about the response
		expect(res.status).toHaveBeenCalledWith(400);
		expect(res.json).toHaveBeenCalledWith({
			error: NO_USED_CAR_AVAILABLE_MESSAGE,
			table: USED_CAR_OVERVIEW_TABLE,
		});
	});

	/**
	 * CASE 3: getUsedCarImages RETURNS EMPTY
	 * Verify that, if getUsedCarImages throws an error, the handler:
	 * - Handles the error gracefully by setting the image field to null for the affected car.
	 * - Still returns a response with status 200 and a JSON object containing the used cars overview,
	 *   with the image field set to null for the car that had the image retrieval issue.
	 */
	it("should handle empty images gracefully", async () => {
		// Mock data for used cars overview
		const carsData = [
			{
				id: "1",
				name: "First Car",
				price: 10000,
				year: 2020,
				mileage: 50000,
				fuel: "Gasoline",
				status: "Good",
			},
		];

		// Mock the data retrieval functions
		getUsedCarData.mockResolvedValueOnce(carsData);
		getUsedCarImages.mockRejectedValueOnce(
			new Error("Something went wrong")
		);

		// Mock the response object
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		// Call the handler function with a mock request
		await usedCarsOverviewHandler({ query: {} }, res);

		// Assertions about the response
		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith({
			used_cars_overview: [
				{
					id: "1",
					name: "First Car",
					price: 10000,
					year: 2020,
					mileage: 50000,
					fuel: "Gasoline",
					status: "Good",
					image: null,
					fieldsCount: 7,
					filledFieldsCount: 7,
				},
			],
		});
	});

	/**
	 * CASE 4: ERROR DURING DATA RETRIEVAL
	 * Verify that, if getUsedCarData throws an error, the handler:
	 * - Logs the error with Sentry, including the endpoint, request query, and request body.
	 * - Returns a response with status 500 and a JSON object containing the error message.
	 */
	it("should log error and return 500 on error", async () => {
		// Define an error to be thrown by the data retrieval function
		const error = new Error("Something went wrong");
		getUsedCarData.mockRejectedValueOnce(error);

		// Mock the response object
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		// Call the handler function with a mock request
		await usedCarsOverviewHandler({ query: {} }, res);

		// Assertions about the error logging and response
		expect(SentryNode.logger.error).toHaveBeenCalledWith(
			expect.any(Error),
			expect.objectContaining({
				endpoint: expect.any(String),
				requestQuery: {},
				requestBody: undefined,
			})
		);
		expect(SentryNode.flush).toHaveBeenCalledWith(500);
		expect(res.status).toHaveBeenCalledWith(500);
		expect(res.json).toHaveBeenCalledWith({
			error: "Something went wrong",
		});
	});

	/**
	 * CASE 5: getUsedCarData RETURNS NULL
	 * Verify that, if getUsedCarData returns null, the handler:
	 * - Returns a response with status 400 and a JSON object containing an
	 *   error message and the table name.
	 */
	it("should return 400 if usedCarsOverviewInfo is null", async () => {
		// Mock getUsedCarData to return null
		getUsedCarData.mockResolvedValueOnce(null);

		// Mock the response object
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		// Call the handler function with a mock request
		await usedCarsOverviewHandler({ query: {} }, res);

		// Assertions about the response
		expect(res.status).toHaveBeenCalledWith(400);
		expect(res.json).toHaveBeenCalledWith({
			error: NO_USED_CAR_AVAILABLE_MESSAGE,
			table: USED_CAR_OVERVIEW_TABLE,
		});
	});

	/**
	 * CASE 6: FILLED FIELDS COUNT EXCLUDES NULL AND EMPTY STRING
	 * Verify that, when calculating the filledFieldsCount for each car,
	 * the handler:
	 * - Correctly excludes fields that are null or empty strings from the
	 *   count of filled fields.
	 * - Returns the correct filledFieldsCount in the response for a car that
	 *   has some null and empty string fields.
	 */
	it("should correctly calculate filledFieldsCount excluding null and empty string", async () => {
		// Mock data for used cars overview with
		// some null and empty string fields
		const carsData = [
			{
				id: "1",
				name: "First Car",
				price: null,
				year: 2020,
				mileage: 50000,
				fuel: "",
				status: "",
			},
		];

		// Mock the data retrieval functions
		getUsedCarData.mockResolvedValueOnce(carsData);
		getUsedCarImages.mockResolvedValueOnce(["image_for_1"]);

		// Mock the response object
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		// Call the handler function with a mock request
		await usedCarsOverviewHandler({ query: {} }, res);

		// Assertions about the response
		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith({
			used_cars_overview: [
				expect.objectContaining({
					id: "1",
					name: "First Car",
					price: null,
					year: 2020,
					mileage: 50000,
					fuel: "",
					status: "",
					image: "image_for_1",
					fieldsCount: 7,
					filledFieldsCount: 4,
				}),
			],
		});
	});
});
