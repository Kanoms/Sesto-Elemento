import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className=" px-4 sm:px-6 lg:px-8 py-4">
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
                  className="text-navGray hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  Services
                  <IoIosArrowDown />
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md">
                  <Link
                    to="/services/procurement"
                    className="block px-4 py-2 text-navGray list-disc"
                  >
                    Procurement
                  </Link>
                  <Link
                    to="/services/contracting"
                    className="block px-4 py-2 text-navGray list-disc"
                  >
                    Contracting
                  </Link>
                  <Link
                    to="/services/marine"
                    className="block px-4 py-2 text-navGray list-disc"
                  >
                    Marine
                  </Link>
                  <Link
                    to="/services/man-power-supply"
                    className="block px-4 py-2 text-navGray list-disc"
                  >
                    Man Power Supply
                  </Link>
                  <Link
                    to="/services/technical-site-asst"
                    className="block px-4 py-2 text-navGray list-disc"
                  >
                    Technical Site Asst
                  </Link>
                  <Link
                    to="/services/equipment-lease"
                    className="block px-4 py-2 text-navGray"
                  >
                    Equipment Lease
                  </Link>
                </div>
              </div>

              {/* Sectors Dropdown */}
              <div className="relative group">
                <Link
                  to="/sectors"
                  className="text-navGray hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  Sectors
                  <IoIosArrowDown />
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md">
                  <Link
                    to="/sectors/oil-and-gas"
                    className="block px-4 py-2 text-navGray"
                  >
                    Oil and Gas
                  </Link>
                  <Link
                    to="/sectors/defence"
                    className="block px-4 py-2 text-navGray"
                  >
                    Defence
                  </Link>
                  <Link
                    to="/sectors/power-generation"
                    className="block px-4 py-2 text-navGray"
                  >
                    Power Generation
                  </Link>
                  <Link
                    to="/sectors/infrastructure"
                    className="block px-4 py-2 text-navGray"
                  >
                    Infrastructure
                  </Link>
                  <Link
                    to="/sectors/renewable"
                    className="block px-4 py-2 text-navGray"
                  >
                    Renewable
                  </Link>
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
