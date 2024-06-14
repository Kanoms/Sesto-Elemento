import PropTypes from "prop-types";

const CoreValues = ({ bgColor = "bg-offWhite" }) => {
  return (
    <section
      className={`${bgColor} py-36 flex flex-col items-center justify-center gap-36`}
    >
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
  );
};

CoreValues.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

export default CoreValues;
