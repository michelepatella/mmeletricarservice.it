import { useState, useEffect } from "react";
import { SECTIONS } from "../utils/const";
import { scrollToSection } from "../utils/scrollToSection";
import { useAnimation } from "framer-motion";

/**
 * Custom hook to manage (anchor and hamburger) menu behavior.
 * @returns {{
 * visible: boolean,
 * menuItems: {
 * onClick: function(): void,
 * children: *|undefined,
 * href: string,
 * title: *, key: string}[],
 * section: string,
 * toggleDrawer: toggleDrawer
 * }}
 */
export const useMenu = () => {
  // For the item animation
  const menuItemControls = useAnimation();

  // State to track menu visibility
  const [visible, setVisible] = useState(false);

  // State to track the current active section
  const [section, setSection] = useState("home");

  /**
   * Method to toggle the menu visibility
   */
  const toggleDrawer = () => {
    // Enable/disable the scroll of the rest of the page
    // depending on if the menu is open/closed
    if (visible) document.documentElement.style.overflowY = "auto";
    else document.documentElement.style.overflowY = "hidden";

    // Change menu visibility
    setVisible(!visible);
  };

  useEffect(() => {
    // Menu animation
    menuItemControls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    });

    /**
     * Method to handle menu scrolling
     */
    const handleScroll = () => {
      let currentSection = "";
      let closestDistance = Infinity;

      /**
       * Helper method to check element visibility
       * and update current section
       */
      const checkAndUpdateSection = (id) => {
        // Read the element
        const element = document.getElementById(id);

        if (element) {
          // Calculate the distance element-top
          const rect = element.getBoundingClientRect();
          const distanceToTop = Math.abs(rect?.top);

          // Check if the section is within the viewport
          if (rect?.top < window.innerHeight && rect?.bottom > 0) {
            // If the current element is the closest
            // to the top, track it
            if (distanceToTop < closestDistance) {
              // New closest distance and new
              // current section identified
              closestDistance = distanceToTop;
              currentSection = id;
            }
          }
        }
      };

      // Loop through each section to determine which is in view
      SECTIONS?.forEach((sec) => {
        // Check for sections
        checkAndUpdateSection(sec?.id);

        // Check for child sections
        if (sec?.children) {
          sec?.children?.forEach((child) => {
            checkAndUpdateSection(child?.id);
          });
        }
      });

      // Update the state with the current section
      setSection(currentSection);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove scroll event listener on cleanup
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItemControls]);

  /**
   * Method to generate menu items dynamically.
   * @type {unknown[] | undefined}
   */
  const menuItems = SECTIONS?.map((section, index) => ({
    key: "section-" + (index + 1),
    href: "#" + section?.id,
    title: section?.title,
    onClick: () => scrollToSection(section?.id, setVisible),
    children: section?.children
      ? section?.children?.map((child, childIndex) => ({
          key: "section-" + (index + 1) + "-child-" + (childIndex + 1),
          href: "#" + child?.id,
          title: child?.title,
          onClick: () => scrollToSection(child?.id, setVisible),
        }))
      : undefined,
  }));

  return {
    menuItems,
    menuItemControls,
    section,
    visible,
    toggleDrawer,
  };
};
