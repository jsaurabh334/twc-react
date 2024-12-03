import gallery1 from '../../assets/aboutus04.svg';
import gallery2 from '../../assets/aboutus05.svg';

const WeddingGallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#5a1a28] to-[#ddc073] flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center max-w-6xl mx-auto p-4">
        {/* Left Image */}
        <div className="relative  p-1 rounded-3xl">
          <img
            src={gallery1}
            alt="First wedding"
            className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] object-cover rounded-3xl"
          />
        </div>

        {/* Right Image */}
        <div className="relative  p-1 rounded-3xl">
          <img
            src={gallery2}
            alt="Second wedding"
            className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WeddingGallery;
