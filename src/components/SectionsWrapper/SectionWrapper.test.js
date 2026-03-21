/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionsWrapper from "./SectionsWrapper.js";
import { SECTIONS_WRAPPER_CLASS_NAME } from "./const.js";

/**
 * Test suite for the SectionsWrapper component.
 * This suite contains:
 * 1. A test to verify that the wrapper renders correctly.
 * 2. A test to verify that children are rendered inside the wrapper.
 */
describe("SectionsWrapper", () => {

    /**
     * CASE 1: RENDERS WRAPPER CONTAINER
     * This test checks that the wrapper div is rendered
     * with the correct class name.
     */
	it("renders wrapper container correctly", () => {
		render(
			<SectionsWrapper>
				<div>Test child</div>
			</SectionsWrapper>
		);

		// eslint-disable-next-line testing-library/no-node-access
		const wrapper = document.querySelector("." + SECTIONS_WRAPPER_CLASS_NAME);

		expect(wrapper).toBeInTheDocument();
	});

    /**
     * CASE 2: RENDERS CHILDREN
     * This test verifies that children are correctly rendered
     * inside the wrapper component.
     */
	it("renders children correctly", () => {
		render(
			<SectionsWrapper>
				<div>Test child</div>
			</SectionsWrapper>
		);

		expect(screen.getByText("Test child")).toBeInTheDocument();
	});
});