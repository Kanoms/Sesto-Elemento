import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { NavigationContext } from "../context/NavigationContext";
import { FiInstagram } from "react-icons/fi";
import { RiFacebookBoxLine } from "react-icons/ri";
import { LiaTwitterSquare } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import footerlogoImage from "../assets/footerlogo.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    setSelectedService,
    setSelectedSector,
    selectedSector,
    selectedService,
  } = useContext(NavigationContext);

  useEffect(() => {
    if (location.pathname.startsWith("/services")) {
      setSelectedService(location.hash.substring(1));
    }
    if (location.pathname.startsWith("/sectors")) {
      setSelectedSector(location.hash.substring(1));
    }
  }, [location, setSelectedService, setSelectedSector]);

  const handleServiceFooter = (service) => {
    setSelectedService(service);
    navigate(`/services#${service}`);
  };

  const handleSectorFooter = (sector) => {
    setSelectedSector(sector);
    navigate(`/sectors#${sector}`);
  };

  const handleAboutusFooter = (path) => {
    navigate(path);
  };

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col px-4 md:px-8 lg:px-16 py-20 bg-skyBlue gap-20 font-lexend">
      <div className="flex flex-col gap-4 lg:gap-8 xl:gap-16 lg:flex-row justify-between lg:items-start">
        <div className="lg:w-[50%]" data-aos="fade-right">
          <div className="mb-4">
            <img src={footerlogoImage} alt="footer logo" />
          </div>

          <span>
            Delivering maximum value by leveraging on our global sourcing
            networks
          </span>
        </div>

        <div className="hidden md:flex items-start w-full justify-between lg:gap-2 xl:gap-16">
          <ul>
            <li className="ftlinkhd">
              <Link
                to="/"
                className="text-navGray group transition duration-300 "
                onClick={() => handleLinkClick("/")}
              >
                Company
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/about-us"
                className="text-navGray group transition duration-300 "
                onClick={() => handleLinkClick("/about-us")}
              >
                About us
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/our-partners"
                className="text-navGray group transition duration-300"
                onClick={() => handleLinkClick("/our-partners")}
              >
                Our Partners
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/about-us#whoweare"
                className="text-navGray group transition duration-300"
                onClick={() => handleAboutusFooter("/about-us#whoweare")}
              >
                Faq
                <span className="lkhover"></span>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="ftlinkhd">
              <Link
                to="/services"
                className="text-navGray group transition duration-300"
                onClick={() => handleLinkClick("/services")}
              >
                Our Service
                <span className="lkhover"></span>
              </Link>
            </li>
            {[
              { label: "Procurement", key: "procurement" },
              { label: "Contracting", key: "contracting" },
              { label: "Marine", key: "marine" },
              { label: "Man Power Supply", key: "manPowerSupply" },
              { label: "Technical Site Asst", key: "technicalSiteAsst" },
              { label: "Equipment Lease", key: "equipmentLease" },
            ].map((service) => (
              <li
                key={service.key}
                onClick={() => handleServiceFooter(service.key)}
                className={`ftlist text-navGray cursor-pointer ${
                  selectedService === service.key ? "text-dkBlue" : ""
                }`}
              >
                {service.label}
              </li>
            ))}
          </ul>
          <ul>
            <li className="ftlinkhd">
              <Link
                to="/sectors"
                className="text-navGray group transition duration-300"
                onClick={() => handleLinkClick("/sectors")}
              >
                Our Sectors
                <span className="lkhover"></span>
              </Link>
            </li>
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
              <li
                key={sector.key}
                onClick={() => handleSectorFooter(sector.key)}
                className={`ftlist text-navGray cursor-pointer ${
                  selectedSector === sector.key ? "text-dkBlue" : ""
                }`}
              >
                {sector.label}
              </li>
            ))}
          </ul>
          <ul>
            <li className="ftlinkhd">
              <Link
                to="/contact-us"
                className="text-navGray group transition duration-300"
                onClick={() => handleLinkClick("/contact-us")}
              >
                Contact Us
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/contact-us"
                className="text-navGray group transition duration-300"
                onClick={() => handleLinkClick("/contact-us")}
              >
                Customer Support
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/contact-us"
                className="text-navGray group transition duration-300"
                onClick={() => handleLinkClick("/contact-us")}
              >
                Help
                <span className="lkhover"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row items-center md:items-start gap-4 justify-between"
        data-aos="fade-up"
      >
        <span>Follow us on all social media platforms</span>
        <div className="flex items-center gap-5 text-xl">
          <FiInstagram />
          <RiFacebookBoxLine />
          <LiaTwitterSquare />
          <CiLinkedin />
        </div>
      </div>
    </section>
  );
};

export default Footer;
