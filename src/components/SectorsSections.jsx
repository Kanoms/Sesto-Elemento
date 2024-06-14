import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SectorsSections = ({ secImage, secHeader, secParagraph }) => {
  const navigate = useNavigate();
  const [selectedSector, setSelectedSector] = useState("oilngas");

  const handleSectorNav = (sector) => {
    setSelectedSector(sector);
    navigate(`/sectors#${sector}`);
  };
  return (
    <section className="font-lexend py-48 flex flex-col items-center gap-20">
      <div>
        <h2 className="text-5xl font-semibold">Our Sectors</h2>
      </div>
      <div>
        <div className="border-b border-dkBlue ">
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
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => handleSectorNav(sector.key)}
              >
                {sector.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center gap-32 items-center mt-16">
          <div>
            <img src={secImage} alt={secHeader} />
          </div>
          <div className="w-[50%]">
            <h3 className="text-4xl font-semibold text-dkBlue">{secHeader}</h3>
            <p className="text-base text-navGray">{secParagraph}</p>
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
};

export default SectorsSections;
