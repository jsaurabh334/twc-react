import React from 'react';
import groom from "../assets/groom.jpeg";

const WeddingCard = () => {
    return (
        <section className="flex h-[50vh] justify-around items-center bg-gradient-to-r from-[#5D1E3F] to-[#CF9C61] p-5 shadow-lg">
            <div className="w-full max-w-[450px] rounded-lg overflow-hidden">
                <img src={groom} alt="Wedding" className="w-full h-[432px] object-cover" />
            </div>
            <div className="flex-1 ml-5 max-w-[700px] flex flex-col justify-between">
                <p className="text-3xl font-bold text-[#5D1E3F] leading-relaxed">
                    A wedding is a celebration of love, and we make it unforgettable. From décor to guest management, we handle every detail, creating a day that perfectly reflects your style. You enjoy the moment; we take care of the rest.
                </p>
                <button className="mt-4 bg-[#5D1E3F] text-[#E0C25B] py-3 px-6 rounded-full text-lg font-medium hover:bg-[#4a182e] self-start">
                    Book Now
                </button>
            </div>
        </section>
    );
};

export default WeddingCard;
