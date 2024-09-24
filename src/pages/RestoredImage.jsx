import React from 'react';
import { useLocation } from 'react-router-dom';
import Header  from '../components/Header.jsx'

const RestoredImage = () => {
  const location = useLocation();
  const { imageUrl } = location.state || {};

  return (
    <div>
        <Header />
        <section className="w-full h-screen bg-[#101010] text-white text-center flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-8">Your restoration text</h2>
            {imageUrl ? (
                <img 
                src={imageUrl} 
                alt="Restored" 
                className="max-w-[90%] max-h-[70%] object-contain rounded mb-8" 
                />
            ) : (
                <p className="text-xl">No image provided</p>
            )}
            <p className="text-lg md:text-xl">Here is your restored photo. Enjoy the improved quality!</p>
        </section>
    </div>
  );
};

export default RestoredImage;
