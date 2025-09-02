import { ALL_SERVICES } from "../../utils/const";
import { handleSectionNameStyle } from "../../logic/style-handling/sectionHeaderStyleHandler";
import InfoCard from "../../components/other/InfoCard/InfoCard";
import SectionContainer from "../../components/sections/SectionContainer/SectionContainer";
import CustomText from "../../components/custom/CustomText/CustomText";

/**
 * This section represents Workshop section. The
 * section shows all the specialized services that the company
 * offers via informative cards (characterized by icon, title, and description).
 * @returns {Element}
 * @constructor
 */
function Workshop() {
	return (
		<>
			<SectionContainer id="officina">
				{/* Section title */}
				<CustomText
					type="body"
					text="• OFFICINA"
					style={handleSectionNameStyle()}
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
		</>
	);
}

export default Workshop;
