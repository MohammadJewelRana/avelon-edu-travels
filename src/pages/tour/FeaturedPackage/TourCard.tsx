 

interface TourPackageCardProps {
  item: {
    id: number;
    country: string;
    visaType: string;
    title: string;
    image: string;
    startingFrom: number;
    duration: string;
    slug: string;
  };
}

const TourCard = ({ item }: TourPackageCardProps) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="line-clamp-2 text-[27px] font-bold leading-snug text-[#111111]">
          {item.title}
        </h3>

        {/* Information */}
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm sm:mt-5">
          <div>
            <span className="font-semibold text-black">Country:</span>
            <span className="ml-1 text-gray-500">{item.country}</span>
          </div>

          <div>
            <span className="font-semibold text-black">Visa Type:</span>
            <span className="ml-1 text-gray-500">{item.visaType}</span>
          </div>
        </div>

        {/* Bottom (price + button) pushed to bottom */}
        <div className="mt-auto border-t border-gray-200 pt-4 sm:mt-6 sm:pt-6">
          {/* Price */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-500">Starting From</p>

            <div className="mt-2 flex items-end justify-between">
              <div className="flex items-end gap-2">
                <span className="text-xl font-black text-black sm:text-2xl">
                  BDT {item.startingFrom.toLocaleString()}
                </span>
                <span className="pb-1 text-xs text-gray-500 sm:text-sm">
                  / Person
                </span>
              </div>

              <span className="text-sm font-medium text-gray-400 line-through sm:text-lg">
                BDT {(item.startingFrom + 10000).toLocaleString()}
              </span>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/8801983623034?text=Hello, I want information about ${encodeURIComponent(
              item.title
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1EBE5D] hover:shadow-lg sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M19.11 17.21c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.03 1.01-1.03 2.46s1.05 2.85 1.2 3.05c.15.2 2.06 3.15 4.99 4.41.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.97-1.37.24-.66.24-1.22.17-1.34-.07-.12-.27-.2-.56-.34z" />
              <path d="M16.01 3C8.83 3 3 8.83 3 16c0 2.52.74 4.97 2.13 7.06L3 29l6.14-2.04A12.94 12.94 0 0016.01 29C23.17 29 29 23.17 29 16S23.17 3 16.01 3zm0 23.5c-2.08 0-4.11-.56-5.88-1.63l-.42-.25-3.65 1.21 1.22-3.56-.27-.44A10.44 10.44 0 015.5 16c0-5.79 4.71-10.5 10.51-10.5S26.5 10.21 26.5 16 21.8 26.5 16.01 26.5z" />
            </svg>

            Contact on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourCard;