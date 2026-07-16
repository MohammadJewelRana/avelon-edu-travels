import { FaTriangleExclamation } from "react-icons/fa6";
import cautionImage from "../../../assets/member/fatima.webp";

import cautionImage1 from "../../../assets/member/fatema.jpg";

const Cautions = () => {
  return (
    <div className=" pt-6 md:pt-4 pb-12 px-4 md:px-8 lg:px-12 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-red-600 flex items-center gap-3">
            <FaTriangleExclamation className="text-red-600 text-3xl" />
            Caution Notice
          </h1>
          <p className="text-gray-700 mt-3 text-base md:text-lg leading-relaxed text-justify">
            The following individual is no longer working with Rtemis Ltd.
            Please be informed that any dealings with this person are at your
            own risk.
          </p>
        </div>

        {/* Warning Card */}
        <div className="flex flex-col lg:flex-row items-center bg-white border border-red-400 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
          {/* Image */}
          <div className="p-6">
            <div className="w-40 h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 border-red-600 shadow-lg">
              <img
                src={cautionImage1}
                alt="Fatematuz Zahura"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 px-6 md:pt-4 pb-4 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-800">
              Fatematuz Zahura
            </h3>
            <p className="text-red-600 font-semibold mb-3">
              Former Sr. Manager, Rtemis Ltd.
            </p>
            <p className="text-gray-700 text-md leading-relaxed text-justify">
              A criminal case involving{" "}
              <span className="font-semibold text-black">
                fraud and embezzlement
              </span>{" "}
              is currently under investigation against this individual at{" "}
              <span className="font-semibold text-black">
                Dhanmondi Model Thana
              </span>{" "}
              under{" "}
              <span className="font-semibold text-black">
                Case No. ০১(০৬)২৫
              </span>
              . During her tenure at Rtemis Ltd., she was found guilty of{" "}
              <span className="text-black font-semibold">
                professional misconduct and financial dishonesty
              </span>
              .
              <br />
              We strongly caution the public, partners, and stakeholders to
              avoid any business or financial transactions with her. Rtemis Ltd.
              is working on all necessary legal measures to recover company
              losses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cautions;
