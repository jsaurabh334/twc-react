import offerImage from '../../assets/aboutus02.svg'; 
import aboutImage from '../../assets/aboutus03.svg'; 
import './styles.css'

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-[#5a2940] to-[#b98760] py-12">
      <div className="container mx-auto px-4 space-y-12">
        {/* What We Offer Section */}
        <div className="md:flex md:items-center">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img src={offerImage} alt="What We Offer" className="rounded-lg shadow-lg w-full mb-6 md:mb-0" />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 md:pl-8 space-y-4">
            <h2 className="text-yellow-300 text-3xl font-bold">What We Offer?</h2>
            <p className="text-white">
              At The Wedding Corporate, we provide a full range of event planning services tailored to your needs, including:
            </p>
            <ul className="list-disc list-inside text-white space-y-2">
              <li><span className="font-bold text-yellow-300">Weddings:</span> Elegant, custom-designed weddings that reflect your unique love story.</li>
              <li><span className="font-bold text-yellow-300">Birthday Parties:</span> Fun and vibrant celebrations for all ages.</li>
              <li><span className="font-bold text-yellow-300">Bachelor/Bachelorette Parties:</span> Exciting pre-wedding parties with a touch of flair.</li>
              <li><span className="font-bold text-yellow-300">Corporate Events:</span> Professional, well-organized events that leave a lasting impression.</li>
              <li><span className="font-bold text-yellow-300">Private Parties & More:</span> From intimate gatherings to grand affairs, we handle all the details for any special occasion.</li>
            </ul>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="md:flex md:items-center md:flex-row-reverse">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img src={aboutImage} alt="Who We Are" className="rounded-lg shadow-lg w-full mb-6 md:mb-0" />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 md:pr-8 space-y-4">
            <h2 className="text-yellow-300 text-3xl font-bold">Who We Are?</h2>
            <p className="text-white">
              The Wedding Corporate is a passionate team of creative event planners dedicated to making your celebrations extraordinary. With years of expertise in organizing weddings, birthdays, bachelor parties, and corporate events, we specialize in turning your dreams into reality.
            </p>
            <p className="text-white">
              We believe that every event should be unique, memorable, and tailored to perfection. Our attention to detail, innovative designs, and seamless execution ensure that your special moments become cherished memories.
            </p>

            <div className="center">
                <button className="text-yellow-300 bg-[#5a2940] px-10 py-3  hover:bg-[#5b3044] transition duration-300">
                  Contact Us
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
