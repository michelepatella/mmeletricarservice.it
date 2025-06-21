/**
 * Method to animate the transition to a section
 * @param sectionId
 * @param setVisible
 */
export const scrollToSection = (sectionId, setVisible) => {
	//get the section id
	const section = document.getElementById(sectionId);

	//move to the section
	if (section) {
		section.scrollIntoView({ behavior: "smooth" });
	}

	//make the menu not visible (if the method has been called by the menu)
	//and make the page scrollable again
	if (setVisible != null) {
		setVisible(false);
		document.documentElement.style.overflowY = "auto";
	}
};
