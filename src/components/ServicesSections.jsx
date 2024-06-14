import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ServicesSections = ({ ssImage, ssHeader, ssParagraph }) => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("");

  const handleServiceNav = (service) => {
    setSelectedService(service);
    navigate(`/services#${service}`);
  };
  return (
    <section className="font-lexend py-48 flex flex-col items-center gap-20">
      <div>
        <h2 className="text-5xl font-semibold">Services we offer</h2>
      </div>
      <div>
        <div className="border-b border-dkBlue ">
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
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => handleServiceNav(service.key)}
              >
                {service.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center gap-32 items-center mt-16">
          <div>
            <img src={ssImage} alt={ssHeader} />
          </div>
          <div className="w-[50%]">
            <h3 className="text-4xl font-semibold text-dkBlue">{ssHeader}</h3>
            <p className="text-base text-navGray">{ssParagraph}</p>
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
};

export default ServicesSections;
