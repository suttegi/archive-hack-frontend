import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header.jsx';

const RestoredImage = () => {
  const location = useLocation();
  const { imageUrl } = location.state || {};

  return (
    <div>
      <Header />
      <section className="w-full h-screen bg-[#101010] text-white flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col items-center justify-center md:mr-8 mb-8 md:mb-0 max-w-md md:max-w-lg">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">Your restoration text</h2>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Restored"
              className="max-w-full max-h-96 object-contain rounded mb-4 md:mb-8"
            />
          ) : (
            <p className="text-lg md:text-xl">No image provided</p>
          )}
          <p className="text-base md:text-lg">Here is your restored photo. Enjoy the improved quality!</p>
        </div>
        <div className="w-full md:w-64 max-w-sm bg-[#1a1a1a] border border-[#2a2a2a] shadow-lg shadow-black/30 flex flex-col p-4 md:p-6 items-center justify-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Restored Info</h3>
          <p className="text-base md:text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            efficitur, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
            eget aliquam nisl nisl eget nisl.
          </p>
          <button className="bg-[#303030] hover:bg-[#404040] text-white font-bold py-2 px-4 rounded">
            Download Restored Image
          </button>
        </div>
      </section>
    </div>
  );
};

export default RestoredImage;


