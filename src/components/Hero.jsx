import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative h-screen bg-[#101010] text-white p-4 md:p-8 lg:p-16">
    <div className="mx-6 max-6xl relative h-full">
      <div className="border-2  bg-rectangle-7 absolute inset-0 bg-cover bg-center rounded-[50px]"></div>
      <div className="absolute inset-0 bg-[#101010] bg-opacity-50 flex flex-col justify-center items-center text-center p-4 rounded-[50px]">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Revive your memories</h1>
        <p className="mb-8 md:text-xl max-w-md">Photo Restore restores old photos to their original quality. Our AI technology can fix scratches, discoloration, and more.</p>
        <Link to="/restore" className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">Get started</Link>
      </div>
    </div>
  </section>
);

export default Hero;