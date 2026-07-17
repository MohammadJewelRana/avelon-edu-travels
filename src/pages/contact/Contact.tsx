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
import ContactHero from "./_components/ContactHero";
import ContactInfoCards from "./_components/ContactInfoCard";
import HomeContact from "../home/_components/Contact";

const Contact = () => {
  return (
    <div className="relative">
 <ContactHero/>
 <ContactInfoCards/>

<HomeContact/>
      <Map />
 
    </div>
  );
};

export default Contact;
