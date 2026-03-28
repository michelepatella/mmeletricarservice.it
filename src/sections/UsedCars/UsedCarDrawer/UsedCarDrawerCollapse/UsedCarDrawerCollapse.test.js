/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UsedCarDrawerCollapse from "./UsedCarDrawerCollapse";
import { ALL_USED_CAR_INFO } from "./const.js";

// Mocks
jest.mock("antd", () => {
	const React = require("react");

	return {
		Collapse: ({ items }) =>
			React.createElement(
				"div",
				{ "data-testid": "collapse" },
				items?.map((item) =>
					React.createElement(
						"div",
						{
							key: item.key,
							"data-testid": "collapse-item-" + item.key,
						},
						"item"
					)
				)
			),
	};
});
jest.mock("@ant-design/icons", () => ({
	MinusOutlined: () => "MinusIcon",
	PlusOutlined: () => "PlusIcon",
}));

/**
 * Test suite for UsedCarDrawerCollapse component.
 * The test suite contains:
 * 1. A test verifying the rendering of collapse structure with all
 *    information groups.
 */
describe("UsedCarDrawerCollapse", () => {
	// Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: COLLAPSE RENDERING
	 * Should render all collapse groups defined in configuration.
	 */
	it("should render collapse with all information groups", () => {
		render(
			<UsedCarDrawerCollapse
				usedCarInfo={{
					cylinders: "4",
					internal_color: "black",
                    external_color: "gray",
				}}
			/>
		);

		const collapse = screen.getByTestId("collapse");
		expect(collapse).toBeInTheDocument();

		const items = screen.getAllByTestId(/collapse-item-/i);
		expect(items.length).toBe(ALL_USED_CAR_INFO.length);
	});
});