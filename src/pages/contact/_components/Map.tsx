

const Map = () => {
  return (
    <div>
      <div className=" py-8 customWidth px-4">
        <div>
          <h1 className="text-3xl font-bold  text-[#F7BE15] pb-6">
            Live Location
          </h1>
        </div>

        <div>
          <iframe
            allowFullScreen={true}
            className="w-full h-[300px] rounded-md"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.209907093158!2d90.37730657592738!3d23.739892989178554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b92150a7d46b%3A0x85fbdf9128e8b71f!2sRtemis%20Limited!5e0!3m2!1sen!2sbd!4v1740302209915!5m2!1sen!2sbd"
          />
        </div>
      </div>
    </div>
  );
};

export default Map;
