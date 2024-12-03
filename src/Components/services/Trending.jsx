import React from 'react';
import rustic from "../../assets/weddingVenue.jpeg"
import vintage from "../../assets/vintage.jpeg"
import minimalastic from "../../assets/minimalastic.jpeg"

const trendingDesigns = [
  { imgSrc: vintage, title: "Vintage Glam", rating: "★★★★★" },
  { imgSrc: "https://praisewedding.com/wp-content/uploads/2017/04/website-springtheme-profile.jpg", title: "Fairy Tale Fantasy", rating: "★★★★☆" },
  { imgSrc: minimalastic, title: "Minimalistic Modern", rating: "★★★★★" },
  { imgSrc: rustic, title: "Rustic Elegance", rating: "★★★★☆" }
];

const Trending = () => {
  return (
    <div className="text-center mt-10 px-4">
      <h2 className="text-3xl font-semibold text-[#d1b775] mb-6">
        Trending Designs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {trendingDesigns.map((design, index) => (
          <div
            className="w-48 sm:w-56 lg:w-64 text-center transition-transform transform hover:scale-105"
            key={index}
          >
            <img
              src={design.imgSrc}
              alt={`${design.title} Design`}
              className="w-36 h-36 md:w-40 md:h-40 rounded-lg border-2 border-[#d1b775] object-cover mx-auto"
            />
            <h3 className="mt-4 text-lg font-medium text-white">{design.title}</h3>
            <p className="text-[#FFD700] text-sm md:text-base">{design.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
