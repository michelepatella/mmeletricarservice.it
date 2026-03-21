/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionContainer from "./SectionContainer.js";
import { SECTION_CONTAINER_CLASS_NAME } from "./const.js";

/**
 * Test suite for the SectionContainer component.
 * This suite contains:
 * 1. A test to verify that the component renders children correctly.
 */
describe("SectionContainer", () => {

	/**
	 * CASE 1: RENDERS CHILDREN
	 * This test checks that the component correctly renders its children.
	 */
	it("renders children", () => {
		render(
			<SectionContainer>
				Test content
			</SectionContainer>
		);

		expect(screen.getByText("Test content")).toBeInTheDocument();
	});
});