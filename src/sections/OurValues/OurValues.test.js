/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import OurValues from "./OurValues.js";
import {
	OUR_VALUES_ALL_STEPS,
	OUR_VALUES_STEPS_CLASS_NAME,
	OUR_VALUES_STEPS_DIRECTION,
	OUR_VALUES_TITLE,
} from "./const.js";
import {
	CUSTOM_TEXT_TYPES,
	DOTTED_BACKGROUND_IMAGE_LINK,
	OUR_VALUES_SECTION_ID,
} from "../../utils/const.js";

// Mocks
jest.mock(
	"../../components/SectionBackground/SectionBackground.js",
	() => ({
		__esModule: true,
		default: jest.fn(({ children, image }) => (
			<div
				data-testid="section-background"
				data-image={image}
			>
				{children}
			</div>
		)),
	})
);
jest.mock(
	"../../components/SectionContainer/SectionContainer.js",
	() => ({
		__esModule: true,
		default: jest.fn(({ children, id }) => (
			<div data-testid="section-container" id={id}>
				{children}
			</div>
		)),
	})
);
jest.mock(
	"../../components/CustomText/CustomText.js",
	() => ({
		__esModule: true,
		default: jest.fn(({ type, text, disableAnimation }) => (
			<div
				data-testid={"custom-text-" + type}
				data-disableanimation={disableAnimation}
			>
				{text}
			</div>
		)),
	})
);
jest.mock("antd", () => ({
	Steps: jest.fn(
		({
			className,
			direction,
			progressDot,
			current,
			items,
		}) => (
			<div
				data-testid="steps"
				data-classname={className}
				data-direction={direction}
				data-progressdot={progressDot}
				data-current={current}
			>
				{items.map((item, i) => (
					<div key={i} data-testid={"step-" + i}>
						{item.title}
						{item.description}
					</div>
				))}
			</div>
		)
	),
}));

/**
 * Test suite for the OurValues component.
 * The test suite contains:
 * 1. A test to verify that the OurValues component renders
 *    correctly with the expected background, container, title, and steps.
 */
describe("OurValues", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: RENDERING
	 * Should render OurValues component with background, container, title, and steps.
	 */
	it("should render with correct background, container, title, and steps", () => {
		render(<OurValues />);

		// Check background image
		const background = screen.getByTestId(
			"section-background"
		);
		expect(background.dataset.image).toBe(
			DOTTED_BACKGROUND_IMAGE_LINK
		);

		// Check section container id
		const container = screen.getByTestId(
			"section-container"
		);
		expect(container.id).toBe(OUR_VALUES_SECTION_ID);

		// Check title text
		const title = screen.getByTestId(
			"custom-text-" + CUSTOM_TEXT_TYPES.SUPER_HEADING
		);
		expect(title.textContent).toBe(OUR_VALUES_TITLE);
		expect(title.dataset.disableanimation).toBe("true");

		// Check Steps component props
		const steps = screen.getByTestId("steps");
		expect(steps.dataset.classname).toBe(
			OUR_VALUES_STEPS_CLASS_NAME
		);
		expect(steps.dataset.direction).toBe(
			OUR_VALUES_STEPS_DIRECTION
		);
		expect(steps.dataset.progressdot).toBe("true");
		expect(Number(steps.dataset.current)).toBe(
			OUR_VALUES_ALL_STEPS.length
		);

		// Check that each step title and description are rendered
		OUR_VALUES_ALL_STEPS.forEach((step, i) => {
			const stepEl = screen.getByTestId("step-" + i);
			expect(stepEl.textContent).toContain(step.title);
			expect(stepEl.textContent).toContain(
				step.description
			);
		});
	});
});
