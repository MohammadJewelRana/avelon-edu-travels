

import Map from "./_components/Map";


import ContactHero from "./_components/ContactHero";
 
import HomeContact from "../home/_components/Contact";

const Contact = () => {
  return (
    <div className="relative">
 <ContactHero/>
 {/* <ContactInfoCards/> */}

<HomeContact/>
      <Map />
 
    </div>
  );
};

export default Contact;
