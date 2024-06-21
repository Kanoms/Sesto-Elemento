import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { NavigationContext } from "../context/NavigationContext.jsx";

const ServicesSections = ({
  ssImage,
  ssHeader,
  ssParagraph,
  ssParagraphTwo,
  ssParagraphTwoColor,
  ssListItems,
}) => {
  const navigate = useNavigate();
  const { selectedService, setSelectedService } = useContext(NavigationContext);

  useEffect(() => {
    if (location.pathname.startsWith("/services")) {
      setSelectedService(location.hash.substring(1));
    }
  }, [location, setSelectedService]);

  const handleServiceNav = (service) => {
    setSelectedService(service);
    navigate(`/services#${service}`);
  };

  return (
    <section className="font-lexend py-48 flex flex-col items-center gap-20 px-16">
      <div>
        <h2 className="text-5xl font-semibold">Services we offer</h2>
      </div>
      <div>
        <div className="border-b border-dkBlue text-navGray">
          <ul className="flex items-center justify-center gap-10">
            {[
              { label: "Procurement", key: "procurement" },
              { label: "Contracting", key: "contracting" },
              { label: "Marine", key: "marine" },
              { label: "Man power Supply", key: "manPowerSupply" },
              { label: "Technical Site Asst", key: "technicalSiteAsst" },
              { label: "Equipment Lease", key: "equipmentLease" },
            ].map((service) => (
              <li
                key={service.key}
                className={`cursor-pointer ${
                  selectedService === service.key
                    ? "text-dkBlue border-b-2 border-dkBlue font-semibold"
                    : ""
                }`}
                onClick={() => handleServiceNav(service.key)}
              >
                {service.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center gap-32 items-center mt-16 px-36">
          <div>
            <img src={ssImage} alt={ssHeader} />
          </div>
          <div className="w-[50%]">
            <h3 className="text-4xl font-semibold text-dkBlue mb-4">
              {ssHeader}
            </h3>
            <p className="text-base text-navGray mb-4">{ssParagraph}</p>
            <p className={`text-base mb-2 ${ssParagraphTwoColor}`}>
              {ssParagraphTwo}
            </p>
            {ssListItems && ssListItems.length > 0 && (
              <ul className="list-disc pl-5">
                {ssListItems.map((item, index) => (
                  <li key={index} className="text-navGray">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

ServicesSections.propTypes = {
  ssImage: PropTypes.string.isRequired,
  ssHeader: PropTypes.string.isRequired,
  ssParagraph: PropTypes.string.isRequired,
  ssParagraphTwo: PropTypes.string.isRequired,
  ssParagraphTwoColor: PropTypes.string,
  ssListItems: PropTypes.arrayOf(PropTypes.string),
};

ServicesSections.defaultProps = {
  ssParagraphTwoColor: "",
  ssListItems: [],
};

export default ServicesSections;
