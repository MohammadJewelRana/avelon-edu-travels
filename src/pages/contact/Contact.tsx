import {
  FaAddressBook,
  FaMapPin,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPeopleArrows,
} from "react-icons/fa";
import bgImage from "../../assets/about/bg.png";

import Map from "./_components/Map";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="relative">
      {/* Background Image Section */}
      <div
        className="w-full bg-no-repeat bg-center flex items-center justify-center pb-12"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="customWidth px-4">
          {/* Title Section */}
          <div className="text-center text-white">
            <p className="text-4xl font-bold text-[#F7BE15] pt-8 pb-4">
           Avelon Edu & Travels
            </p>
            <p className="font-semibold max-w-md mx-auto text-black">
              If you are looking for more information and services about Rtemis,
              please contact us at:
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Left Card - Address */}
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaMapPin className="text-4xl text-[#F7BE15] mb-3" />
              <p className="text-lg font-semibold">Address</p>
              <p className="text-gray-700 mt-2">
                Happy Rahman Plaza,  Banglamotor, Dhaka.
              </p>
            </motion.div>

            {/* Middle Card - Contact Details */}
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaAddressBook className="text-4xl text-[#F7BE15] mb-3" />
              <p className="text-lg font-semibold">Contact Info</p>

              {/* Phone */}
              <div className="flex items-center gap-2 mt-3">
                <FaPhoneAlt className="text-[#F7BE15]" />
                <p className="text-gray-700">+88 01977-005581</p>

              </div>

              {/* Email */}
              <div className="flex items-center gap-2 mt-3">
                <FaEnvelope className="text-[#F7BE15]" />
                <p className="text-gray-700">info@avelonbd.com</p>
              </div>
            </motion.div>

            {/* Last Card - Connect with Us */}
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaPeopleArrows className="text-4xl text-[#F7BE15] mb-3" />
              <p className="text-lg font-semibold">Connect with Us</p>

              {/* Social Media Icons */}
              <div className="flex gap-4 mt-6">
                {/* Facebook */}
                <Link
                  to="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <FaFacebook className="text-3xl text-[#F7BE15] group-hover:text-[#1877F2] transition-colors duration-300" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Facebook
                  </span>
                </Link>

                {/* LinkedIn */}
                <Link
                  to="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <FaLinkedin className="text-3xl text-[#F7BE15] group-hover:text-[#0077B5] transition-colors duration-300" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    LinkedIn
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Map />
      {/* Concern Section */}
      {/* <Concern /> */}
    </div>
  );
};

export default Contact;
