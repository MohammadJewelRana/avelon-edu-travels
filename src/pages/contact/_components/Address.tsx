import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Address = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#F7BE15] pt-8 pb-6">
        Rtemis Limited
      </h1>

      <p className="font-semibold max-w-[400px] text-justify">
        If you are looking for more information and services about Rtemis,
        please contact us at:
      </p>

      <div className="pt-6">
        <div className="flex justify-start gap-2  pb-1">
          <p className="w-1/5 font-bold">Phone</p>
          <p className=" ">+88 01404 466 520</p>
        </div>
        <div className="flex justify-start gap-4 pb-1">
          <p className="w-1/5 font-bold">Email</p>
          <p className="w-2/3  ">info@rtemisbd.com</p>
        </div>
        <div className="flex justify-start gap-4">
          <p className="w-1/5 font-bold">Address</p>
          <p className="w-2/3  ">House-23, Road-03, Dhanmondi, Dhaka-1209.</p>
        </div>
      </div>

      <div className="flex gap-4 text-2xl md:text-xl py-8">
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <FaFacebook className="text-yellow-400 group-hover:text-black transition duration-300" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-black text-white px-2 py-1 rounded-md transition duration-300">
            Facebook
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <FaLinkedin className="text-yellow-400 group-hover:text-black transition duration-300" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-black text-white px-2 py-1 rounded-md transition duration-300">
            LinkedIn
          </span>
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <FaTwitter className="text-yellow-400 group-hover:text-black transition duration-300" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-black text-white px-2 py-1 rounded-md transition duration-300">
            Twitter
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <FaInstagram className="text-yellow-400 group-hover:text-black transition duration-300" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-black text-white px-2 py-1 rounded-md transition duration-300">
            Instagram
          </span>
        </a>
      </div>
    </div>
  );
};

export default Address;
