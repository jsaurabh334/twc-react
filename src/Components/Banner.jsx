import React from 'react';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import party from "../assets/party.jpeg";
import bride from "../assets/bride.jpeg";
import girlsnight from "../assets/girlsnight.jpeg";
import conference from "../assets/conference.jpeg";

const images = [
    { src: party, alt: "Party", size: "w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40" },
    { src: bride, alt: "Wedding", size: "w-28 h-28 sm:w-32 sm:h-32 md:w-52 md:h-52" },
    { src: girlsnight, alt: "Celebration", size: "w-32 h-32 sm:w-36 sm:h-36 md:w-56 md:h-56" },
    { src: conference, alt: "Conference", size: "w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40" }
];

const Banner = () => {
    return (
        <section className="flex flex-col md:flex-row h-auto md:h-screen p-6 md:p-12 bg-gradient-to-br from-[#5D1E3F] to-[#CF9C61]">
            {/* Left Section */}
            <div className="flex-1 text-[#E0C25B] flex flex-col justify-center space-y-4 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-5xl font-bold leading-snug md:leading-tight text-center md:text-left">
                    Make Every Occasion<br />
                    Unforgettable. Book<br />
                    Your Next Event with Us
                </h1>
                <p className="text-3xl md:text-4xl rotate-0 md:rotate-90 text-center md:text-left">&#10230;</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5">
                    {/* Date Option */}
                    <div className="bg-[#5D1E3F] p-4 md:p-6 rounded-2xl text-center flex flex-col items-center space-y-1 text-[#E0C25B] w-40 md:w-48">
                        <FaCalendar className="text-2xl" />
                        <span className="font-semibold text-sm md:text-base">Date</span>
                        <p className="text-xs md:text-sm">Select a Date</p>
                    </div>
                    
                    {/* Destination Option */}
                    <div className="bg-[#5D1E3F] p-4 md:p-6 rounded-2xl text-center flex flex-col items-center space-y-1 text-[#E0C25B] w-40 md:w-48">
                        <FaMapMarkerAlt className="text-2xl" />
                        <span className="font-semibold text-sm md:text-base">Destination</span>
                        <p className="text-xs md:text-sm">Select a Destination</p>
                    </div>
                    
                    {/* Explore Button */}
                    <button className="bg-white text-[#5D1E3F] px-6 md:px-8 py-2 md:py-3 rounded-full font-medium text-sm md:text-base mt-4 sm:mt-0 hover:bg-gray-100">
                        Explore Now
                    </button>
                </div>
            </div>

          
            <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
                <div className="relative flex flex-wrap gap-7  max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl justify-center items-center ">
                    {images.map(({ src, alt, size }, index) => (
                        <div key={index} className="relative">
                            <img
                                src={src}
                                alt={alt}
                                className={`${size} rounded-full object-cover shadow-lg`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;
