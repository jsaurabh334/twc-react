import React from 'react';
import planner from "../../assets/planner.jpeg"
import photographer from "../../assets/photographer.jpeg"

const p1=""
const photographers = [
  { name: "Dayanita Singh", imgSrc: "https://images.unsplash.com/photo-1512813498716-3e640fed3f39?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: "★★★★★" },
  { name: "Raghu Rai", imgSrc: "https://images.unsplash.com/photo-1597505028721-c5bbd73b8075?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: "★★★★☆" },
  { name: "Rathika Ramasamy", imgSrc: photographer, rating: "★★★★★" },
  { name: "Gauri Gill", imgSrc: planner, rating: "★★★★☆" }
];

const Popular = () => {
  return (
    <div className="text-center mt-10 px-4">
      <h2 className="text-3xl font-semibold text-[#d1b775] mb-6">
        Popular Photographers / Videographers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {photographers.map((photographer, index) => (
          <div
            className="photographer-card w-48 sm:w-56 lg:w-64 text-center transition-transform transform hover:scale-105"
            key={index}
          >
            <img
              src={photographer.imgSrc}
              alt={photographer.name}
              className="w-36 h-36 md:w-40 md:h-40 rounded-lg border-2 border-[#d1b775] object-cover mx-auto"
            />
            <h3 className="mt-4 text-lg font-medium text-white">{photographer.name}</h3>
            <p className="text-[#FFD700] text-sm md:text-base">{photographer.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
