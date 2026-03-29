/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BlockQuote from "./BlockQuote.js";

/**
 * Test suite for the BlockQuote component.
 * This suite contains:
 * 1. A test to check if the component correctly renders its children.
 * 2. A test to verify that the component renders a blockquote HTML element.
 */
describe("BlockQuote", () => {
	/**
	 * CASE 1: RENDERS CHILDREN
	 * This test checks if the BlockQuote component correctly renders its children.
	 */
	it("renders children", () => {
		render(
			<BlockQuote>Some text within block quote</BlockQuote>
		);
		expect(
			screen.getByText("Some text within block quote")
		).toBeInTheDocument();
	});

	/**
	 * CASE 2: RENDERS BLOCKQUOTE ELEMENT
	 * This test verifies that the BlockQuote component renders a blockquote HTML element.
	 */
	it("renders a blockquote element", () => {
		render(
			<BlockQuote>Some text within block quote</BlockQuote>
		);
		// eslint-disable-next-line testing-library/no-node-access
		expect(
			screen
				.getByText("Some text within block quote")
				// eslint-disable-next-line testing-library/no-node-access
				.closest("blockquote")
		).toBeInTheDocument();
	});
});
