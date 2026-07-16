const Updates = () => {
  const data = [
    { id: 1, title: "Sister Concerns", count: "10" },
    { id: 2, title: "Investors", count: "300+" },
    { id: 3, title: "Investments", count: "12cr+" },
    { id: 4, title: "ROI", count: "Upto 24%" },
  ];

  return (
    <div className="py-12">
      <div className="customWidth px-4">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#F7BE15] text-center uppercase mb-8">
          Real Life Updates
        </h1>

        {/* Stats Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex items-center justify-center gap-6 md:gap-8">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center gap-4"
            >
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-semibold text-gray-900 uppercase">
                  {item.title}
                </p>
                <p className="text-2xl sm:text-3xl font-semibold text-[#F7BE15]">
                  {item.count}
                </p>
              </div>

              {/* Divider (hidden on small screens) */}
              {index !== data.length - 1 && (
                <div className="hidden md:block w-[2px] h-16 bg-gray-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Updates;
