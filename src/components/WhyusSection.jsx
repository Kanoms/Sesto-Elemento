import suitsImage from "../assets/suits.png";
import { Link } from "react-router-dom";

const WhyusSection = () => {
  return (
    <section className="grid grid-cols-2 items-center py-4 bg-skyBlue">
      <div>
        <img src={suitsImage} alt="Suits" />
      </div>
      <div className="mr-16">
        <h1 className="text-[64px] font-semibold text-dkBlue">Why us?</h1>
        <p className="text-navGray mb-4">
          Our track record speaks for itself. We have a long history of
          successfully executing projects of all sizes and complexities. Our
          satisfied clients have consistently praised our ability to deliver
          projects on time, within budget, and to the highest quality standards.
        </p>
        <Link to="/contact-us">
          <button className="bg-dkBlue text-white px-36 py-4 text-sm rounded-lg">
            Work with us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default WhyusSection;
