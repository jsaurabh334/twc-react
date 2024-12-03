import React from 'react';
import birthdayParty from "../assets/birthday-party.jpeg";
import wedding from "../assets/Wedding_event.jpeg";
import bachelors from "../assets/bachelor.jpeg";

const events = [
  { title: 'Birthday Party', image: birthdayParty },
  { title: 'Wedding Event', image: wedding },
  { title: 'Bachelors Party', image: bachelors },
  { title: 'Corporate Event', image: birthdayParty },
  { title: 'Wedding Event', image: wedding },
  { title: 'Wedding Event', image: wedding },
  { title: 'Baby Shower', image: bachelors },
  { title: 'Bachelors Party', image: bachelors },
];

const PopularEvents = () => {
  return (
    <div className="p-10 bg-gradient-to-r from-[#5D1E3F] to-[#CF9C61] text-[#f0e6d1]">
      <h2 className="text-4xl text-center mb-8">Popular Events</h2>
      <div className="flex flex-wrap justify-around gap-16">
        {events.map((event, index) => (
          <div
            className="rounded-lg overflow-hidden text-center w-[300px] shadow-lg border border-current transition-transform duration-200 hover:scale-105"
            key={index}
          >
            <img src={event.image} alt={event.title} className="w-full h-[200px] object-cover" />
            <div className="py-4 text-xl font-semibold text-[#f0e6d1]">{event.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularEvents;
