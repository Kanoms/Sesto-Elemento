import { Link } from "react-router-dom";
import oneworkerImage from "../assets/oneworker.png";

const SectorHomePage = () => {
  return (
    <section className="grid grid-cols-2 items-center py-4 bg-skyBlue">
      <div>
        <img src={oneworkerImage} alt="one worker" />
      </div>
      <div className="mr-16">
        <h1 className="text-[56px] font-semibold text-dkBlue capitalize">
          <span className="text-ltBlue">Our expertise</span> spans for multiple{" "}
          <span className="text-ltBlue">industries</span>
        </h1>
        <p className="text-navGray mb-4">
          We offer comprehensive project and operations support across a diverse
          range of sectors. Our expertise spans multiple industries, enabling us
          to cater to the unique needs and requirements of each sector
        </p>
        <Link to="/contact-us">
          <button className="bg-dkBlue text-white px-36 py-4 text-sm rounded-lg">
            Work with us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SectorHomePage;
