import React from "react";
import Category from "./Category";
import Popular from "./Popular";
import Trending from "./Trending";
import TrendingMakeup from "./TrendingMakeup";
import CalltoAction from "./CalltoAction";
import "./Services.css"
import party from "../../assets/parrty.jpg"; // Adjust the path to your actual image location

const Services = () => {
  return (
    <div className="font-sans text-white p-5">
      {/* Box with Background Image */}
      <div
        className="w-full min-h-[400px] h-[60vh] bg-cover bg-center rounded-lg flex items-center justify-center"
        style={{
          backgroundImage: `url(${party})`
        }}
      >
        <div className="text-center max-w-2xl bg-[rgba(248,249,250,0.8)] p-5 rounded-lg shadow-lg">
          <h1 className="text-[goldenrod] font-serif text-3xl md:text-4xl mb-5">
            Making Your Dream Wedding Come True
          </h1>
          <p className="text-[goldenrod] font-sans text-lg md:text-xl leading-relaxed">
            At The Wedding Corporate, we specialize in creating unforgettable
            moments on your special day. From intimate ceremonies to grand
            celebrations, we bring passion, creativity, and precision to every
            detail of your wedding. Our dedicated team ensures that your event
            reflects your unique style and vision, making it a day you’ll
            cherish forever. Let us handle the planning, so you can focus on
            making memories.
          </p>
        </div>
      </div>

      {/* Services Categories */}
      <div className="services-categories text-center mt-10 mb-10 px-5">
        
        <div className="flex justify-evenly flex-wrap gap-20 mt-5">
          <Category />
        </div>
      </div>

      {/* Popular Section */}
      <div className="popular-section mt-14">
       
        <div className="flex justify-around flex-wrap gap-5">
          <Popular />
        </div>
      </div>

      {/* Additional Sections */}
      <Trending />
      <TrendingMakeup />
      <CalltoAction />
    </div>
  );
};

export default Services;
