import { useContext, useEffect } from "react";
import { NavigationContext } from "../context/NavigationContext.jsx";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

const SectorsSections = ({
  secImage,
  secHeader,
  secParagraph,
  secParagraphTwo,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSector, setSelectedSector } = useContext(NavigationContext);

  useEffect(() => {
    if (location.pathname.startsWith("/sectors")) {
      setSelectedSector(location.hash.substring(1));
    }
  }, [location, setSelectedSector]);

  const handleSectorNav = (sector) => {
    setSelectedSector(sector);
    navigate(`/sectors#${sector}`);
  };
  return (
    <section className="font-lexend py-48 flex flex-col items-center gap-20 px-16">
      <div>
        <h2 className="text-5xl font-semibold">Our Sectors</h2>
      </div>
      <div>
        <div className="border-b border-dkBlue text-navGray">
          <ul className="flex items-center justify-center gap-10">
            {[
              { label: "Oil & Gas", key: "oilngas" },
              {
                label: "Construction & Engineering",
                key: "constructionnengineering",
              },
              { label: "Defence", key: "defence" },
              { label: "Infrastructure", key: "infrastructure" },
              { label: "Renewable", key: "renewable" },
            ].map((sector) => (
              <li
                key={sector.key}
                className={`cursor-pointer ${
                  selectedSector === sector.key
                    ? "text-dkBlue border-b-2 border-dkBlue font-semibold"
                    : ""
                }`}
                onClick={() => handleSectorNav(sector.key)}
              >
                {sector.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center gap-32 items-center mt-16 px-36">
          <div>
            <img src={secImage} alt={secHeader} />
          </div>
          <div className="w-[50%]">
            <h3 className="text-4xl font-semibold text-dkBlue mb-4">
              {secHeader}
            </h3>
            <p className="text-base text-navGray mb-4">{secParagraph}</p>
            <p className="text-base text-navGray">{secParagraphTwo}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

SectorsSections.propTypes = {
  secImage: PropTypes.string.isRequired,
  secHeader: PropTypes.string.isRequired,
  secParagraph: PropTypes.string.isRequired,
  secParagraphTwo: PropTypes.string.isRequired,
};

export default SectorsSections;
