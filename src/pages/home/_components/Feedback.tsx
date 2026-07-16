import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bgImage from "../../../assets/banner/bg3.png";
import { FaStar } from "react-icons/fa";

const feedbacks = [
  {
    id: 1,
    name: "Mahbub K.",
    designation: "Investor",
    rating: 5,
    feedback:
      "Investing with Rtemis has exceeded my expectations with impressive returns. Thrilled with the growth achieved together.",
  },
  {
    id: 2,
    name: "Khondokar Z.",
    designation: "Investor",
    rating: 4,
    feedback:
      "Rtemis’s innovative approach and strategic framework have delivered significant returns on my investments",
  },
  {
    id: 3,
    name: "Ahmed K.",
    designation: "Investor",
    rating: 5,
    feedback:
      "As an investor, Rtemis has provided unparalleled support and strategic insight, making my journey rewarding.",
  },
  {
    id: 4,
    name: "Priya S.",
    designation: "Investor",
    rating: 4,
    feedback:
      "The expertise and resources of Rtemis have diversified my portfolio and resulted in substantial growth.",
  },
  
  {
    id: 5,
    name: "Rajib M.",
    designation: "Investor",
    rating: 5,
    feedback:
      "Rtemis’s focus on sustainable growth has helped me achieve my financial goals with impressive returns.",
  },
  {
    id: 6,
    name: "Noor N.",
    designation: "Investor",
    rating: 4,
    feedback:
      "Rtemis Limited stands out for its ability to turn ideas into successful ventures. My investments have grown significantly.",
  },
  {
    id: 7,
    name: "Mayeesha M.",
    designation: "Investor",
    rating: 5,
    feedback:
      "Partnering with Rtemis has been a rewarding experience, thanks to their expert approach and impressive results.",
  },

];

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="py-12   mx-7">
      <div className="customWidth ">
        {/* Title Section */}
        <div className=" ">
          <h1 className="text-4xl font-bold pb-3 text-[#F7BE15]">
            Our Investors Say
          </h1>
          <p className="text-lg text-gray-700  ">
            Rtemis Limited is the best medium for your safe and reliable
            investment to generate regular monthly profit. Invest in domestic
            projects, encourage youth to become entrepreneurs, and keep the
            country’s money in the country.
          </p>
        </div>

        {/* Slider Section */}
        <div className="py-8">
          <Slider {...settings}>
            {feedbacks.map((item) => (
              <div key={item.id} className="   ">
                <div
                  className="w-full  h-auto bg-cover bg-no-repeat bg-center rounded-xl px-4 text-justify md:px-12 py-8 md:py-16 text-black"
                  style={{ backgroundImage: `url(${bgImage})` }}
                >
                  {/* Name & Designation */}
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <p className="text-lg py-2">{item.designation}</p>

                  {/* Star Rating */}
                  <div className="flex  gap-2 mt-2 text-yellow-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="mt-8 text-xl">{item.feedback}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
