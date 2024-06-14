import SectorHomePage from "../components/SectorHomePage";
import SectorsSections from "../components/SectorsSections";
import ContactUs from "./ContactUs";
import oilngasImage from "../assets/oilngas.png";
import constructionnengineeringImage from "../assets/constructionnengineering.png";
import defence from "../assets/defence.png";
import infrastructureImage from "../assets/infrastructure.png";
import renewableImage from "../assets/renewable.png";

const Sectors = () => {
  return (
    <div>
      <SectorHomePage />
      <SectorsSections />
      <ContactUs />
    </div>
  );
};

export default Sectors;
