/* eslint-disable @typescript-eslint/no-explicit-any */
import { PhotoProvider, PhotoView } from "react-photo-view";
import { motion } from "framer-motion";

const Media = ({ data }: any) => {
  const { heading, subHeading, images } = data;

  return (
    <div>
      <div className="py-8 px-4 md:px-12 customWidth">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#F7BE15]">
          {heading}
        </h1>
        <p className="text-center text-lg text-gray-700 mt-2">{subHeading}</p>

        {/* PhotoProvider to enable full-screen preview */}
        <PhotoProvider>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 gap-4">
            {/* First Row (40% - 40% - 20%) */}
            {images.map((image: string, index: number) => (
              <motion.div
                key={index}
                className={`${
                  index === 2 || index === 3
                    ? "md:col-span-2 sm:col-span-2"
                    : "md:col-span-4 sm:col-span-1"
                }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PhotoView src={image}>
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-60 object-cover rounded-lg shadow-md cursor-pointer"
                    title="View Image"
                  />
                </PhotoView>
              </motion.div>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default Media;
