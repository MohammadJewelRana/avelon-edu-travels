import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import banner1 from "../../../assets/rtemis/rtemis_2.webp";
import banner2 from "../../../assets/rtemis/rtemis_1.webp";
import banner3 from "../../../assets/gallery/rt/3.jpg";
import banner4 from "../../../assets/rtemis/banner.webp";
import banner5 from "../../../assets/rtemis/coverImage.jpg";


import psh from "../../../assets/banner/psh.webp";
import pfc from "../../../assets/banner/pfc.webp";
import tts from "../../../assets/banner/tts.webp";
import afredity from "../../../assets/banner/afredity.jpg";




const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  const data = [
    {
      id: 1,
      name: "Project second home",
      img: psh,
    },
    {
      id: 2,
      name: "Pocket friendly catering",
      img: pfc,
    },
    {
      id: 3,
      name: "the thread story",
      img: tts,
    },
    {
      id: 4,
      name: "afredity",
      img: afredity,
    },
  ];

  return (
    <div className="box-border  ">
      <div className="bg-gray-100">
        <div className="customWidth w-full h-auto flex flex-col md:flex-row text-white md:pb-4">
          {/* Left Side - Image Slider */}
          <div className="w-full md:w-1/2   p-4 ">
            <Slider {...settings}>
              <img
                src={banner5}
                alt="Banner 1"
                className="w-full h-[300px]  md:h-[438px] object-cover rounded-md"
              />
              <img
                src={banner4}
                alt="Banner 1"
                className="w-full h-[300px]  md:h-[438px] object-cover rounded-md"
              />
 
              <img
                src={banner2}
                alt="Banner 2"
                className="w-full h-[300px]  md:h-[438px] object-cover rounded-md"
              />
              <img
                src={banner3}
                alt="Banner 3"
                className="w-full h-[300px]  md:h-[438px] object-cover rounded-md"
              />
            </Slider>
          </div>

          {/* Right Side - 4 Equal Cards with Different Colors */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 px-3 md:p-4 pt-10 md:pt-4   ">
            {data?.map((item, index) => (
              <>
                <div
                  key={index}
                  className="group rounded-md overflow-hidden shadow-lg  transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex flex-col items-center justify-around relative ">
                    <img
                      src={item?.img}
                      alt="psh"
                      className="w-full object-fill transition-all duration-500 group-hover:brightness-90 h-44"
                    />
                  </div>

                  <div className="bg-[#ddac1b] text-white w-full text-center py-1 font-bold transition-all duration-500 group-hover:bg-yellow-700 capitalize text-[12px] md:text-lg">
                    {item?.name}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
