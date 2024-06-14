import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();

  const handleServiceNav = (service) => {
    navigate(`/services#${service}`);
  };

  const handleSectorNav = (sector) => {
    navigate(`/sector/${sector}`);
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
                  className="text-navGray hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer"
                >
                  Services
                  <IoIosArrowDown />
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md">
                  <div
                    onClick={() => handleServiceNav("procurement")}
                    className="block px-4 py-2 text-navGray cursor-pointer"
                  >
                    Procurement
                  </div>
                  <div
                    onClick={() => handleServiceNav("contracting")}
                    className="block px-4 py-2 text-navGray cursor-pointer"
                  >
                    Contracting
                  </div>
                  <div
                    onClick={() => handleServiceNav("marine")}
                    className="block px-4 py-2 text-navGray cursor-pointer"
                  >
                    Marine
                  </div>
                  <div
                    onClick={() => handleServiceNav("manPowerSupply")}
                    className="block px-4 py-2 text-navGray cursor-pointer"
                  >
                    Man Power Supply
                  </div>
                  <div
                    onClick={() => handleServiceNav("technicalSiteAsst")}
                    className="block px-4 py-2 text-navGray cursor-pointer"
                  >
                    Technical Site Asst
                  </div>
                  <div
                    onClick={() => handleServiceNav("equipmentLease")}
                    className="block px-4 py-2 text-navGray cursor-pointer"
                  >
                    Equipment Lease
                  </div>
                </div>
              </div>

              {/* Sectors Dropdown */}
              <div className="relative group">
                <Link
                  to="/sectors"
                  className="text-navGray hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer"
                >
                  Sectors
                  <IoIosArrowDown />
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md">
                  <div
                    onClick={() => handleSectorNav("oilngas")}
                    className="block px-4 py-2 text-navGray cursor-pointer"
                  >
                    Oil and Gas
                  </div>
                  <div
                    onClick={() => handleSectorNav("constructionnengineering")}
                    className="block px-4 py-2 text-navGray cursor-pointer"
                  >
                    Construction and Engineering
                  </div>
                  <div
                    onClick={() => handleSectorNav("defence")}
                    className="block px-4 py-2 text-navGray cursor-pointer"
                  >
                    Defence
                  </div>
                  <div
                    onClick={() => handleSectorNav("infrastructure")}
                    className="block px-4 py-2 text-navGray cursor-pointer"
                  >
                    Infrastructure
                  </div>
                  <div
                    onClick={() => handleSectorNav("renewable")}
                    className="block px-4 py-2 text-navGray cursor-pointer"
                  >
                    Renewable
                  </div>
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
