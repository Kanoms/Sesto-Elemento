import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import logoImage from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { NavigationContext } from "../context/NavigationContext";
import { GoDotFill } from "react-icons/go";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    selectedService,
    setSelectedService,
    selectedSector,
    setSelectedSector,
  } = useContext(NavigationContext);

  useEffect(() => {
    if (location.pathname.startsWith("/services")) {
      setSelectedService(location.hash.substring(1));
    }
    if (location.pathname.startsWith("/sectors")) {
      setSelectedSector(location.hash.substring(1));
    }
  }, [location, setSelectedService, setSelectedSector]);

  const handleServiceNav = (service) => {
    setSelectedService(service);
    navigate(`/services#${service}`);
  };

  const handleSectorNav = (sector) => {
    setSelectedSector(sector);
    navigate(`/sectors#${sector}`);
  };

  const handleAboutusNav = (path) => {
    navigate(path);
  };

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => handleLinkClick("/")}>
              <img className="" src={logoImage} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-navGray hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => handleLinkClick("/")}
              >
                Home
              </Link>

              {/* About Us Dropdown */}
              <div className="relative group">
                <Link
                  to="/about-us"
                  className="text-navGray hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  onClick={() => handleLinkClick("/about-us")}
                >
                  About Us
                  <IoIosArrowDown />
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md p-4 text-sm w-[273px]">
                  <Link
                    to="/about-us#whoweare"
                    className="flex items-center gap-1 px-4 py-2 text-navGray"
                    onClick={() => handleAboutusNav("/about-us#whoweare")}
                  >
                    <GoDotFill />
                    Mission
                  </Link>
                  <Link
                    to="/about-us#whoweare"
                    className="flex items-center gap-1 px-4 py-2 text-navGray"
                    onClick={() => handleAboutusNav("/about-us#whoweare")}
                  >
                    <GoDotFill />
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
                      ? "text-dkBlue"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/services")}
                >
                  Services
                  <IoIosArrowDown />
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md text-sm p-4 w-[273px]">
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
                      className={`flex items-center gap-1 px-4 py-2 text-navGray cursor-pointer ${
                        selectedService === service.key ? "text-dkBlue" : ""
                      }`}
                    >
                      <GoDotFill />
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
                      ? "text-dkBlue"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/sectors")}
                >
                  Sectors
                  <IoIosArrowDown />
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md text-sm p-4 w-[273px]">
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
                      className={`flex items-center gap-1 px-4 py-2 text-navGray cursor-pointer ${
                        selectedSector === sector.key ? "text-dkBlue" : ""
                      }`}
                    >
                      <GoDotFill />
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
                  onClick={() => handleLinkClick("/our-partners")}
                >
                  Our Partners
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Link
              to="/contact-us"
              className="text-navGray hover:text-dkBlue px-3 py-2 rounded-md text-sm font-semibold"
              onClick={() => handleLinkClick("/contact-us")}
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
