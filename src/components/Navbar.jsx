import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isTechnicalDropdownOpen, setTechnicalDropdownOpen] = useState(false);

  const toggleTechnicalDropdown = () => {
    setTechnicalDropdownOpen(!isTechnicalDropdownOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img className="h-8 w-8" src="/logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>

                {/* About Us Dropdown */}
                <div className="relative group">
                  <Link
                    to="/about-us"
                    className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About Us
                  </Link>
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md">
                    <Link
                      to="/about-us/mission"
                      className="block px-4 py-2 text-gray-900"
                    >
                      Mission
                    </Link>
                    <Link
                      to="/about-us/vision"
                      className="block px-4 py-2 text-gray-900"
                    >
                      Vision
                    </Link>
                  </div>
                </div>

                {/* Services Dropdown */}
                <div className="relative group">
                  <Link
                    to="/services"
                    className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </Link>
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md">
                    <Link
                      to="/services/procurement"
                      className="block px-4 py-2 text-gray-900 list-disc"
                    >
                      Procurement
                    </Link>
                    <Link
                      to="/services/contracting"
                      className="block px-4 py-2 text-gray-900 list-disc"
                    >
                      Contracting
                    </Link>
                    <Link
                      to="/services/man-power-supply"
                      className="block px-4 py-2 text-gray-900 list-disc"
                    >
                      Man Power Supply
                    </Link>
                    <div className="relative group">
                      <div
                        className="flex items-center justify-between px-4 py-2 text-gray-900 list-disc cursor-pointer"
                        onClick={toggleTechnicalDropdown}
                      >
                        <span>Technical Site Asst</span>
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </div>
                      {isTechnicalDropdownOpen && (
                        <div className=" bg-white shadow-lg rounded-md">
                          <Link
                            to="/services/technical-site-asst/mechanical"
                            className="block px-4 py-2 text-gray-900 list-disc"
                          >
                            Mechanical
                          </Link>
                          <Link
                            to="/services/technical-site-asst/electrical"
                            className="block px-4 py-2 text-gray-900 list-disc"
                          >
                            Electrical
                          </Link>
                          <Link
                            to="/services/technical-site-asst/instrumentation"
                            className="block px-4 py-2 text-gray-900 list-disc"
                          >
                            Instrumentation
                          </Link>
                        </div>
                      )}
                    </div>
                    <Link
                      to="/services/equipment-lease"
                      className="block px-4 py-2 text-gray-900"
                    >
                      Equipment Lease
                    </Link>
                  </div>
                </div>

                {/* Sectors Dropdown */}
                <div className="relative group">
                  <Link
                    to="/sectors"
                    className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sectors
                  </Link>
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md">
                    <Link
                      to="/sectors/oil-and-gas"
                      className="block px-4 py-2 text-gray-900"
                    >
                      Oil and Gas
                    </Link>
                    <Link
                      to="/sectors/defence"
                      className="block px-4 py-2 text-gray-900"
                    >
                      Defence
                    </Link>
                    <Link
                      to="/sectors/power-generation"
                      className="block px-4 py-2 text-gray-900"
                    >
                      Power Generation
                    </Link>
                    <Link
                      to="/sectors/infrastructure"
                      className="block px-4 py-2 text-gray-900"
                    >
                      Infrastructure
                    </Link>
                    <Link
                      to="/sectors/renewable"
                      className="block px-4 py-2 text-gray-900"
                    >
                      Renewable
                    </Link>
                  </div>
                </div>

                {/* Our Partners Dropdown */}
                <div className="relative group">
                  <Link
                    to="/our-partners"
                    className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Our Partners
                  </Link>
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md">
                    <Link
                      to="/our-partners/suppliers"
                      className="block px-4 py-2 text-gray-900"
                    >
                      Suppliers
                    </Link>
                    <Link
                      to="/our-partners/past-projects"
                      className="block px-4 py-2 text-gray-900"
                    >
                      Past Projects
                    </Link>
                  </div>
                </div>

                <Link
                  to="/collaborations"
                  className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Collaborations
                </Link>
                <Link
                  to="/contact-us"
                  className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
