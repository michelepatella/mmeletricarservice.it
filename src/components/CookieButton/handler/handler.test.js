/**
 * @jest-environment jsdom
 */

import { onCookieButtonClick } from "./handler.js";

/**
 * Test suite for onCookieButtonClick function.
 * The suite contains:
 * 1. Test to verify that clicking the cookie button sets
 *    the banner visible.
 */
describe("onCookieButtonClick", () => {

  /**
   * CASE 1: SET COOKIE BANNER VISIBLE
   * Calling the function should call the setter
   * with "true".
   */
  it("should set the cookie banner visible when called", () => {
    const setIsCookiesBannerVisible = jest.fn();

    onCookieButtonClick(setIsCookiesBannerVisible);

    expect(setIsCookiesBannerVisible).toHaveBeenCalledTimes(1);
    expect(setIsCookiesBannerVisible).toHaveBeenCalledWith(true);
  });
});