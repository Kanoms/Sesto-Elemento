import { Link } from "react-router-dom";
import twoworkersImage from "../assets/twoworkers.png";

const ServicesHomePage = () => {
  return (
    <section className="flex justify-between items-center py-4 bg-offWhite">
      <div className="w-[50%] ml-16">
        <h1 className="text-[48px] font-semibold text-dkBlue capitalize">
          <span className="text-ltBlue">Maximizing</span> operational efficiency
          for <span className="text-ltBlue">sustainable growth</span>{" "}
        </h1>
        <p className="text-navGray mb-4">
          At Sesto Elemento ltd. We pride ourselves in helping clients save
          time, reduce costs, enhance project efficiency, and mitigate risks.
        </p>
        <Link to="/about-us">
          <button className="bg-dkBlue text-white px-36 py-4 text-sm rounded-lg">
            Read More
          </button>
        </Link>
      </div>

      <div className="">
        <img src={twoworkersImage} alt="two workers" />
      </div>
    </section>
  );
};

export default ServicesHomePage;
