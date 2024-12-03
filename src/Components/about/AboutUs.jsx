import aboutImage from '../../assets/aboutus01.svg'; // replace with your image path

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-[#5a2940] to-[#b98760] py-12">
      <div className="container mx-auto px-4">
        {/* About Us Section */}
        <div className="md:flex md:items-center">
          {/* Text Section */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-yellow-300">About Us</h2>
            <p className="text-white">
              At The Wedding Corporate, we specialize in bringing your events to life. From weddings and birthdays to corporate events and bachelor parties, we create unforgettable experiences tailored to your vision. Our experienced team handles every detail, ensuring your event is stress-free, unique, and memorable. Let us turn your special moments into lasting memories.
            </p>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <img src={aboutImage} alt="About Us" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </div>

        {/* Statistics Section */}
        <div className="bg-[#5a2940] w-[100%] py-5 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-yellow-300 text-4xl font-bold">10,000</h3>
            <p className="text-white mt-2">Wedding Vendors</p>
          </div>
          <div>
            <h3 className="text-yellow-300 text-4xl font-bold">20,000</h3>
            <p className="text-white mt-2">Annual Weddings</p>
          </div>
          <div>
            <h3 className="text-yellow-300 text-4xl font-bold">1,000</h3>
            <p className="text-white mt-2">Wedding Venues</p>
          </div>
        </div>
    </section>
  );
};

export default AboutUs;
