import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeSection from "../components/HomeSection";
import industryImage from "../assets/industry.png";
import workerImage from "../assets/worker.png";
import shipsImage from "../assets/ships.png";
import suitsImage from "../assets/suits.png";
import twoworkersImage from "../assets/twoworkers.png";
import oneworkerImage from "../assets/oneworker.png";
import ClientsSection from "../components/ClientsSection";
import ContactUs from "./ContactUs";

const sections = [
  {
    bgImage: industryImage,
    header: "Empowering success in projects and operations",
    paragraph:
      "We are an indigenous oil and gas project and operational support servicing company, purposed to provide best-in-class services in markets across Africa and other regions.",
  },
  {
    bgImage: workerImage,
    header: "Global Technology, Local Inclusion",
    paragraph:
      "Guaranteed by our global partnerships, products and services delivered are aligned with advanced technology, giving us the leverage to provide solutions while the required standards are maintained locally.",
  },
  {
    bgImage: shipsImage,
    header: "Procurement and technical services for critical applications",
    paragraph:
      "Pioneering procurement and technical solutions to drive efficiency, reliability and critical performance.",
  },
];

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prevSection) => (prevSection + 1) % sections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-lexend">
      <HomeSection {...sections[currentSection]} />
      <section className="bg-offWhite py-36 flex flex-col items-center justify-center gap-36">
        <h1 className="text-dkBlue text-[44px] font-semibold capitalize">
          Our core values
        </h1>
        <div className="flex items-center justify-center gap-6">
          <div className="recsize">
            <div className="smrecsize">
              <div className="xsrecsizetop bg-dkBlue"></div>
              <div className="xsrecsizebtm bg-ltBlue"></div>
            </div>
            <p>Integrity</p>
          </div>
          <div className="recsize">
            <div className="smrecsize">
              <div className="xsrecsizetop bg-dkBlue z-10"></div>
              <div className="xsrecsizebtm bg-ltBlue z-0"></div>
            </div>
            <p>Team work</p>
          </div>
          <div className="recsize">
            <div className="smrecsize">
              <div className="xsrecsizetop bg-ltBlue"></div>
              <div className="xsrecsizebtm bg-dkBlue"></div>
            </div>
            <p className="text-center relative">
              Customer
              <span className="absolute left-[-10%] top-5">satisfaction</span>
            </p>
          </div>
          <div className="recsize">
            <div className="smrecsize">
              <div className="xsrecsizetop bg-ltBlue z-10"></div>
              <div className="xsrecsizebtm bg-dkBlue z-0"></div>
            </div>
            <p>Accountability</p>
          </div>
          <div className="recsize">
            <div className="smrecsize">
              <div className="xsrecsizetop bg-ltBlue left-[10px] z-10"></div>
              <div className="xsrecsizebtm bg-dkBlue right-[10px] z-0"></div>
            </div>
            <p>Reliability</p>
          </div>
        </div>
      </section>
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
            projects on time, within budget, and to the highest quality
            standards.
          </p>
          <Link to="/contact-us">
            <button className="bg-dkBlue text-white px-36 py-4 text-sm rounded-lg">
              Work with us
            </button>
          </Link>
        </div>
      </section>
      <section className="flex justify-between items-center py-4 bg-offWhite">
        <div className="w-[50%] ml-16">
          <h1 className="text-[48px] font-semibold text-dkBlue capitalize">
            <span className="text-ltBlue">Maximizing</span> operational
            efficiency for{" "}
            <span className="text-ltBlue">sustainable growth</span>{" "}
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
      <section className="grid grid-cols-2 items-center py-4 bg-skyBlue">
        <div>
          <img src={oneworkerImage} alt="one worker" />
        </div>
        <div className="mr-16">
          <h1 className="text-[56px] font-semibold text-dkBlue capitalize">
            <span className="text-ltBlue">Our expertise</span> spans for
            multiple <span className="text-ltBlue">industries</span>
          </h1>
          <p className="text-navGray mb-4">
            We offer comprehensive project and operations support across a
            diverse range of sectors. Our expertise spans multiple industries,
            enabling us to cater to the unique needs and requirements of each
            sector
          </p>
          <Link to="/contact-us">
            <button className="bg-dkBlue text-white px-36 py-4 text-sm rounded-lg">
              Work with us
            </button>
          </Link>
        </div>
      </section>
      <ClientsSection />
      <ContactUs />
    </div>
  );
};

export default Home;
