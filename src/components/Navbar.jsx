import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logoImage from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedService, setSelectedService] = useState("");
  const [selectedSector, setSelectedSector] = useState("");

  useEffect(() => {
    if (location.pathname.startsWith("/services")) {
      setSelectedService(location.hash.substring(1));
    }
    if (location.pathname.startsWith("/sectors")) {
      setSelectedSector(location.hash.substring(1));
    }
  }, [location]);

  const handleServiceNav = (service) => {
    setSelectedService(service);
    navigate(`/services#${service}`);
  };

  const handleSectorNav = (sector) => {
    setSelectedSector(sector);
    navigate(`/sectors#${sector}`);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="" src={logoImage} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-navGray hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>

              {/* About Us Dropdown */}
              <div className="relative group">
                <Link
                  to="/about-us"
                  className="text-navGray hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  About Us
                  <IoIosArrowDown />
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md">
                  <Link
                    to="/about-us/mission"
                    className="block px-4 py-2 text-navGray"
                  >
                    Mission
                  </Link>
                  <Link
                    to="/about-us/vision"
                    className="block px-4 py-2 text-navGray"
                  >
                    Vision
                  </Link>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <Link
                  to="/services"
                  className={`text-navGray hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer ${
                    location.pathname.startsWith("/services") &&
                    selectedService === ""
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : ""
                  }`}
                >
                  Services
                  <IoIosArrowDown />
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md">
                  {[
                    { label: "Procurement", key: "procurement" },
                    { label: "Contracting", key: "contracting" },
                    { label: "Marine", key: "marine" },
                    { label: "Man Power Supply", key: "manPowerSupply" },
                    { label: "Technical Site Asst", key: "technicalSiteAsst" },
                    { label: "Equipment Lease", key: "equipmentLease" },
                  ].map((service) => (
                    <div
                      key={service.key}
                      onClick={() => handleServiceNav(service.key)}
                      className={`block px-4 py-2 text-navGray cursor-pointer ${
                        selectedService === service.key
                          ? "text-blue-500 border-b-2 border-blue-500"
                          : ""
                      }`}
                    >
                      {service.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sectors Dropdown */}
              <div className="relative group">
                <Link
                  to="/sectors"
                  className={`text-navGray hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer ${
                    location.pathname.startsWith("/sectors") &&
                    selectedSector === ""
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : ""
                  }`}
                >
                  Sectors
                  <IoIosArrowDown />
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md">
                  {[
                    { label: "Oil and Gas", key: "oilngas" },
                    {
                      label: "Construction and Engineering",
                      key: "constructionnengineering",
                    },
                    { label: "Defence", key: "defence" },
                    { label: "Infrastructure", key: "infrastructure" },
                    { label: "Renewable", key: "renewable" },
                  ].map((sector) => (
                    <div
                      key={sector.key}
                      onClick={() => handleSectorNav(sector.key)}
                      className={`block px-4 py-2 text-navGray cursor-pointer ${
                        selectedSector === sector.key
                          ? "text-blue-500 border-b-2 border-blue-500"
                          : ""
                      }`}
                    >
                      {sector.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Partners Dropdown */}
              <div className="relative group">
                <Link
                  to="/our-partners"
                  className="text-navGray hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Our Partners
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md">
                  <Link
                    to="/our-partners/suppliers"
                    className="block px-4 py-2 text-navGray"
                  >
                    Suppliers
                  </Link>
                  <Link
                    to="/our-partners/past-projects"
                    className="block px-4 py-2 text-navGray"
                  >
                    Past Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link
              to="/contact-us"
              className="text-navGray hover:text-dkBlue px-3 py-2 rounded-md text-sm font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
