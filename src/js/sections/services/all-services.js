import { ALL_SERVICES } from "../../utils/const";
import { handleSectionNameStyle } from "../../logic/sectionHeaderStyleHandler";
import InfoCard from "../../components/other/InfoCard";
import SectionContainer from "../../components/sections/SectionContainer";
import CustomText from "../../components/custom/CustomText";
import { Helmet } from "react-helmet";

/**
 * All services section
 * @returns {Element}
 * @constructor
 */
function AllServices() {
  return (
    <>
      {/* React Helmet */}
      <Helmet>
        <title>MM Eletricar Service - Tutti i servizi</title>
        <meta
          name="description"
          content="Servizi di manutenzione auto: riparazione parabrezza, centralina, conta km, diagnosi elettronica, ricarica aria condizionata, duplicazione chiavi e installazione antifurti e tanto altro a Gravina in Puglia (BA)."
        />
      </Helmet>

      <SectionContainer id="tutti-i-servizi">
        {/* Section title */}
        <CustomText
          type="body"
          text="• TUTTI I SERVIZI"
          style={handleSectionNameStyle()}
        />

        {/* Info Card for each service */}
        {ALL_SERVICES?.map((service, index) => (
          <InfoCard
            key={index}
            title={service?.title}
            description={service?.description}
            icon={service?.icon}
          />
        ))}
      </SectionContainer>
    </>
  );
}

export default AllServices;
