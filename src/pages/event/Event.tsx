import Media from "./_components/Media";

import Concern from "../home/_components/Concern";

import expo1 from "../../assets/rtemis/expo/expo1.webp";
import expo2 from "../../assets/rtemis/expo/expo2.webp";
import expo3 from "../../assets/rtemis/expo/expo3.webp";
import expo4 from "../../assets/rtemis/expo/expo4.webp";
import expo5 from "../../assets/rtemis/expo/expo5.webp";
import expo6 from "../../assets/rtemis/expo/expo6.webp";

import net1 from "../../assets/rtemis/networking/net1.webp";
import net2 from "../../assets/rtemis/networking/net2.webp";
// import net3 from "../../assets/rtemis/networking/net3.webp";
import net4 from "../../assets/rtemis/networking/net4.webp";
import net5 from "../../assets/rtemis/networking/net5.webp";
// import net6 from "../../assets/rtemis/networking/net6.webp";
import net9 from "../../assets/rtemis/networking/net9.webp";
import net10 from "../../assets/rtemis/networking/net10.webp";

import sem1 from "../../assets/rtemis/seminar/sem1.webp";
import sem2 from "../../assets/rtemis/seminar/sem2.webp";
import sem3 from "../../assets/rtemis/seminar/sem3.webp";
import sem4 from "../../assets/rtemis/seminar/sem4.webp";
import sem5 from "../../assets/rtemis/seminar/sem5.webp";
import sem6 from "../../assets/rtemis/rtemis_2.webp";

const tts = {
  heading: "The Thread Story ",
  subHeading: "Wedding Festival and Lifestyle Expo and Awards 2024",

  images: [expo1, expo2, expo3, expo4, expo5, expo6],
};

const seminer = {
  heading: "Rtemis Inhouse Events ",
  subHeading: "Summit, Seminers and Trainings",
  images: [sem6, sem4, sem3, sem2, sem5, sem1],
};

const networking = {
  heading: "Rtemis Presents Networking Events 1.0 ",
  subHeading: "Gather, Engage and Connect",

  images: [net9, net10, net1, net2, net4, net5],
};

const Event = () => {
  return (
    <div>
      <div
        className="w-full bg-no-repeat   bg-cover    pb-6"
        // style={{
        //   backgroundImage: `url(${bgImage})`,
        //   //   backgroundSize: "cover",
        // }}
      >
        <Media data={networking} />

        <Media data={tts} />

        <Media data={seminer} />
      </div>
      <Concern />
    </div>
  );
};

export default Event;
