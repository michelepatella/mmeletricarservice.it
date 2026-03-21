/**
 * @jest-environment jsdom
 */

/* eslint-disable import/first */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Link from "./Link.js";

/**
 * Test suite for the Link component.
 * This suite contains:
 * 1. A test to verify that the link renders correctly with text and href.
 * 2. A test to verify that the link opens in a new tab with proper rel attributes.
 */
describe("Link", () => {

    /**
     * CASE 1: RENDERS LINK CORRECTLY
     * This test checks that the <a> element renders the correct text and href.
     */
	it("renders link with correct text and href", () => {
		render(<Link href="https://example.com" text="Some text" />);
		
		const linkElement = screen.getByText("Some text");
        
		expect(linkElement).toBeInTheDocument();
		expect(linkElement).toHaveAttribute("href", "https://example.com");
	});

    /**
     * CASE 2: OPENS LINK IN NEW TAB WITH NOOPENER AND NOREFERRER
     * This test verifies that the link opens in a new tab and has proper 
     * security attributes.
     */
	it("has target _blank and rel attributes", () => {
		render(<Link href="https://example.com" text="Some text" />);
		
		const linkElement = screen.getByText("Some text");

		expect(linkElement).toHaveAttribute("target", "_blank");
		expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
	});
});