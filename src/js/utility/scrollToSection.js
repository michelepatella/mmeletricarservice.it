/**
 * Method to animate the transition to a section
 * @param sectionId
 * @param setVisible
 */
export const scrollToSection = (sectionId, setVisible) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
    if(setVisible != null) {
        setVisible(false);
    }
};