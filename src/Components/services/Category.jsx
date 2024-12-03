import React from 'react';
import photographer from "../../assets/photographer.jpeg";
import decoration from "../../assets/decoration.jpeg";
import planners from "../../assets/planner.jpeg";
import dance from "../../assets/dance classes.jpg";
import makeup from "../../assets/makeup.jpg";
import bar from "../../assets/bar.jpg";

const categoriesData = [
  { imgSrc: photographer, altText: "Photographer", title: "PHOTOGRAPHER / VIDEOGRAPHER" },
  { imgSrc: decoration, altText: "Decorators", title: "DECORATORS" },
  { imgSrc: planners, altText: "Venue Planners", title: "VENUE PLANNERS" },
  { imgSrc: dance, altText: "Choreographers", title: "CHOREOGRAPHERS" },
  { imgSrc: makeup, altText: "Makeup Artists", title: "MAKEUP ARTISTS" },
  { imgSrc: bar, altText: "Bar Services", title: "BAR SERVICES" }
];

const Category = () => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-semibold text-[#d1b775] mb-6">Services Categories</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {categoriesData.map((category, index) => (
          <div
            className="category flex flex-col items-center w-40 sm:w-48 md:w-56 lg:w-60 text-center transition-transform transform hover:scale-105"
            key={index}
          >
            <img
              src={category.imgSrc}
              alt={category.altText}
              className="w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full border-2 border-[#d1b775] object-cover"
            />
            <p className="mt-4 text-sm md:text-base lg:text-lg text-white font-medium">
              {category.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
