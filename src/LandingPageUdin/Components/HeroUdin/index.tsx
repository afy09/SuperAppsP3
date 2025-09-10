import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  handleMenuClick: (page: string) => void;
}

const HeroUdin: React.FC<NavbarProps> = ({ handleMenuClick }) => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden text-white -mt-20">
      {/* Video Background */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] "
        alt="Video Background"
        src="/images/bg-hantara2.jpg" // taruh video di public/videos/
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center mt-6">
        <div className="flex justify-center mb-4">
          <img src="/images/hantara.svg" className="w-28 h-28 " alt="" />
        </div>
        <h1 className="text-[29px] md:text-6xl  font-bold max-w-4xl  ">
          HANTARA
          <br /> <span className="text-primary">(HASIL BUMI NUSANTARA)</span>
        </h1>
        <p className="text-white text-lg my-2 font-edu">From the Earth, For the World.</p>

        <div className="relative inline-flex items-center justify-center mt-10">
          {/* Pulse Effect */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#ffffff] opacity-75 animate-pulseRing"></span>

          {/* Actual Button */}
          <Link to="/pengaduan">
            <button className="relative bg-primary hover:bg-opacity-90 text-white hover:text-white font-semibold text-lg py-3 px-8 rounded-full z-10">Order Now!</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroUdin;
