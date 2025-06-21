/**
 * Method to make animate the transition from a
 * section to another one.
 * @param sectionId
 * @param setVisible
 */
export const scrollToSection = (sectionId, setVisible) => {
  // Get the section ID
  const section = document.getElementById(sectionId);

  // Move to the section smoothly
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  // Make the menu not visible (if the method has been called by the menu)
  // and make the page scrollable again
  if (setVisible != null) {
    setVisible(false);
    document.documentElement.style.overflowY = "auto";
  }
};
