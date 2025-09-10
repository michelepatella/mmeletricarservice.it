import { ALL_SERVICES, SERVICES_TITLE } from "../utils/const";
import { handleSectionNameStyle } from "../logic/style-handling/sectionHeaderStyleHandler";
import InfoCard from "../components/other/InfoCard/InfoCard";
import SectionContainer from "../components/sections/SectionContainer/SectionContainer";
import CustomText from "../components/custom/CustomText/CustomText";

/**
 * This section represents Services section. The
 * section shows all the specialized services that the company
 * offers via informative cards (characterized by icon, title, and description).
 * @returns {Element}
 * @constructor
 */
function Services() {
	return (
		<SectionContainer id="servizi">
			{/* Section title */}
			<CustomText
				type="heading"
				style={{ color: "white" }}
				text={"● " +  SERVICES_TITLE}
			/>

			{/* Add an informative card for each
        service offered by the company */}
			{ALL_SERVICES?.map((service) => (
				<InfoCard
					key={service.title}
					title={service?.title}
					description={service?.description}
					icon={service?.icon}
				/>
			))}
		</SectionContainer>
	);
}

export default Services;
