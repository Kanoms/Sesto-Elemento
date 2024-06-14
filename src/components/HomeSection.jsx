import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomeSection = ({ bgImage, header, paragraph }) => {
  return (
    <div
      className="relative w-full h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#EDEDED",
      }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative z-10 flex flex-col justify-center h-full w-[50%] px-16">
        <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 capitalize">
          {header.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 === 0 ? "text-ltBlue" : "text-dkBlue"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <p className="text-2xl text-navGray mb-4">{paragraph}</p>
        <Link to="/contact-us">
          <button className="bg-dkBlue text-white px-36 py-4 text-sm rounded-lg">
            Work with us
          </button>
        </Link>
      </div>
    </div>
  );
};

HomeSection.propTypes = {
  bgImage: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default HomeSection;
