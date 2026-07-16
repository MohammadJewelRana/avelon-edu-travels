 
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Concern from "../home/_components/Concern";

import expo1 from "../../assets/rtemis/expo/expo1.webp";
import expo2 from "../../assets/rtemis/expo/expo2.webp";
import expo7 from "../../assets/rtemis/expo/expo7.webp";
import expo4 from "../../assets/rtemis/expo/expo4.webp";
import expo5 from "../../assets/rtemis/expo/expo5.webp";
import expo6 from "../../assets/rtemis/expo/expo6.webp";

import net1 from "../../assets/rtemis/networking/net1.webp";
import net2 from "../../assets/rtemis/networking/net2.webp";
import net3 from "../../assets/rtemis/networking/net3.webp";
import net4 from "../../assets/rtemis/networking/net4.webp";
import net5 from "../../assets/rtemis/networking/net5.webp";
import net11 from "../../assets/rtemis/networking/net11.webp";

import net9 from "../../assets/rtemis/networking/net9.webp";
import net10 from "../../assets/rtemis/networking/net10.webp";

import sem1 from "../../assets/rtemis/seminar/sem1.webp";
import sem2 from "../../assets/rtemis/seminar/sem2.webp";
import sem3 from "../../assets/rtemis/seminar/sem3.webp";
import sem4 from "../../assets/rtemis/seminar/sem4.webp";
import sem5 from "../../assets/rtemis/seminar/sem5.webp";
import { Key } from "react";

const images = [
  net9, net10, net11, expo1, expo2, expo7, expo4, expo5, expo6,
  net1, net2, net3, net4, net5,
  sem1, sem2, sem3, sem4, sem5,
];

const chunkArray = (arr: string[], size: number): string[][] => {
  const result: string[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Gallery = () => {
  const chunkedImages = chunkArray(images, 3);

  return (
    <div>
      <div className="customWidth">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#F7BE15] py-8">
          Our Photo Gallery
        </h1>

        <PhotoProvider>
          <div className="flex flex-col gap-4 px-4">
            {chunkedImages.map((imageSet, rowIndex) => {
              const isOddRow = rowIndex % 2 === 0;

              return (
                <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-10 gap-4">
                  {imageSet.map((img: string | undefined, colIndex: Key | null | undefined) => {
                    let colSpanClass = "col-span-1";

                    if (isOddRow) {
                      colSpanClass = colIndex === 2 ? "md:col-span-2" : "md:col-span-4";
                    } else {
                      colSpanClass = colIndex === 0 ? "md:col-span-2" : "md:col-span-4";
                    }

                    return (
                      <motion.div
                        key={colIndex}
                        className={`sm:col-span-1 ${colSpanClass}`}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
                      >
                        <PhotoView src={img}>
                          <img
                            src={img}
                            alt={`Gallery  `}
                            className="w-full h-60 object-cover rounded-lg shadow-md cursor-pointer"
                            title="View Image"
                          />
                        </PhotoView>
                      </motion.div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </PhotoProvider>
      </div>
      <div className="pt-12">
        <Concern />
      </div>
    </div>
  );
};

export default Gallery;
