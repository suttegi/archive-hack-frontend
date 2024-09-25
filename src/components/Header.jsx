import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex flex-row md:flex-row justify-between items-center p-4 bg-[#101010] text-white border-b-2 md:px-[100px]">
    <Link to="/" className="text-3xl font-bold mb-4 md:mb-0">Photo Restore</Link>
    <Link to="/restore" className="bg-[#303030] text-white text-l px-4 py-2 rounded">New Image</Link>
  </header>
);

export default Header;
