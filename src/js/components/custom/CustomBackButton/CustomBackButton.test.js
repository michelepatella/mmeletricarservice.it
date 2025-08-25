import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BACK_BUTTON_LABEL } from "../../../utils/const";
import CustomBackButton from "./CustomBackButton";

// Definition of expected results
const backButtonLabel = "Back Button Label";
const customTextType = "body";
const customTextDisableAnimation = "true";
const leftOutlinedTestId = "left-outlined-icon";

// Mock constants
jest.mock("../../../utils/const", () => ({
    BACK_BUTTON_LABEL: backButtonLabel,
}));

// Mock the LeftOutlined component
jest.mock("@ant-design/icons", () => ({
    LeftOutlined: () => <span data-testid={leftOutlinedTestId} />,
}));

// Mock the CustomText component
jest.mock("../CustomText", () => ({
    __esModule: true,
    default: ({ type, disableAnimation, text }) =>
        <span data-type={type} data-animation={disableAnimation}>{text}</span>
}));

// Run the test
describe("CustomBackButton", () => {

    // Clear all mocks before running the test
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("LeftOutlined", () => {
        // Test if it renders the LeftOutlined icon correctly
        test("renders LeftOutlined", () => {
            render(<CustomBackButton />);
            expect(
                screen.getByTestId(leftOutlinedTestId)
            ).toBeInTheDocument();
        });
    });

    describe("CustomText", () => {
        // Test if it renders the label correctly
        test("renders with correct text", () => {
            render(<CustomBackButton />);
            expect(
                screen.getByText(BACK_BUTTON_LABEL)
            ).toBeInTheDocument();
        });

        // Test if it passes the correct props to
        // CustomText component
        test("passes the correct props to CustomText", () => {
            const { getByText } = render(<CustomBackButton />);
            const customTextElement = screen.getByText(BACK_BUTTON_LABEL);

            expect(
                customTextElement.getAttribute('data-type')
            ).toBe(customTextType);
            expect(
                customTextElement.getAttribute('data-animation')
            ).toBe(customTextDisableAnimation);
        });
    });
});