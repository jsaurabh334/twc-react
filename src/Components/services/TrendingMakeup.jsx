import React from "react";
import makeup from "../../assets/makeup.jpg";
import makeup2 from "../../assets/makeup2.jpg";
import makeupbride from "../../assets/makeupbride.jpg";
import groom from "../../assets/groom.jpg";

const TMakeup = [
  { imgSrc: makeup, title: "Mickey Contractor", rating: "★★★★★" },
  { imgSrc: makeupbride, title: "Yanisha Kumar", rating: "★★★★☆" },
  { imgSrc: makeup2, title: "Prakriti Makeup", rating: "★★★★★" },
  { imgSrc: groom, title: "Vardan Nayak", rating: "★★★★☆" },
];

const TrendingMakeup = () => {
  return (
    <div className="text-center mt-10 px-4">
      <h2 className="text-3xl font-semibold text-[#d1b775] mb-6">
        Trending Makeup Artists
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {TMakeup.map((artist, index) => (
          <div
            className="w-48 sm:w-56 lg:w-64 text-center transition-transform transform hover:scale-105"
            key={index}
          >
            <img
              src={artist.imgSrc}
              alt={`${artist.title}`}
              className="w-36 h-36 md:w-40 md:h-40 rounded-lg border-2 border-[#d1b775] object-cover mx-auto"
            />
            <h3 className="mt-4 text-lg font-medium text-white">
              {artist.title}
            </h3>
            <p className="text-[#FFD700] text-sm md:text-base">
              {artist.rating}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMakeup;
