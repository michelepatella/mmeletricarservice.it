/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UsedCarDrawer from "./UsedCarDrawer";

// Mocks
jest.mock("antd", () => {
	const React = require("react");

	return {
		Drawer: ({ children }) =>
			React.createElement(
				"div",
				{ "data-testid": "drawer" },
				children
			),
		Flex: ({ children }) =>
			React.createElement(
				"div",
				{ "data-testid": "flex" },
				children
			),
	};
});
jest.mock(
	"./UsedCarDrawerInfoPanel/UsedCarDrawerInfoPanel.js",
	() => {
		const React = require("react");

		return {
			__esModule: true,
			default: () =>
				React.createElement("div", {
					"data-testid": "info-panel",
				}),
		};
	}
);
jest.mock(
	"./UsedCarDrawerCarousel/UsedCarDrawerCarousel.js",
	() => {
		const React = require("react");

		return {
			__esModule: true,
			default: () =>
				React.createElement("div", {
					"data-testid": "carousel",
				}),
		};
	}
);
jest.mock(
	"../../../components/BackButton/BackButton.js",
	() => {
		const React = require("react");

		return {
			__esModule: true,
			default: () =>
				React.createElement("div", {
					"data-testid": "back-button",
				}),
		};
	}
);
jest.mock(
	"../../../components/LoadingOutlined/LoadingOutlined.js",
	() => {
		const React = require("react");

		return {
			__esModule: true,
			default: () =>
				React.createElement("div", {
					"data-testid": "loading",
				}),
		};
	}
);
jest.mock(
	"./hooks/use-used-car-info/use-used-car-info.js",
	() => ({
		useUsedCarInfo: jest.fn(),
	})
);
jest.mock(
	"./hooks/use-drawer-back-button/use-drawer-back-button.js",
	() => ({
		useDrawerBackButtonHandler: jest.fn(),
	})
);
jest.mock("../handler/handler.js", () => ({
	onUsedCarDrawerClose: jest.fn(),
}));

/**
 * Test suite for UsedCarDrawer component.
 * The test suite contains:
 * 1. A test verifying the rendering of the loading state during data loading.
 * 2. A test verifying the rendering of content after data loading.
 */
describe("UsedCarDrawer", () => {
	// Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: LOADING STATE
	 * Should render loading indicator when data is loading.
	 */
	it("should render loading state when data is loading", () => {
		require("./hooks/use-used-car-info/use-used-car-info.js").useUsedCarInfo.mockReturnValue(
			{
				usedCarInfo: null,
				isLoading: true,
			}
		);

		render(
			<UsedCarDrawer
				usedCarOverview={{ id: "1", name: "Car Name" }}
				setIsDrawerOpen={jest.fn()}
			/>
		);

		expect(
			screen.getByTestId("loading")
		).toBeInTheDocument();
	});

	/**
	 * CASE 2: CONTENT RENDERING
	 * Should render info panel and carousel when data loading is finished.
	 */
	it("should render info panel and carousel after data loading", () => {
		require("./hooks/use-used-car-info/use-used-car-info.js").useUsedCarInfo.mockReturnValue(
			{
				usedCarInfo: { images: [] },
				isLoading: false,
			}
		);

		render(
			<UsedCarDrawer
				usedCarOverview={{ id: "1", name: "Car Name" }}
				setIsDrawerOpen={jest.fn()}
			/>
		);

		expect(
			screen.getByTestId("info-panel")
		).toBeInTheDocument();
		expect(
			screen.getByTestId("carousel")
		).toBeInTheDocument();
	});
});
