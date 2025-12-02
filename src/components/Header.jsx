import React from 'react'

const Header = () => {
  return (
    <header className="bg-indigo-700 text-white shadow-lg sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tight">
        magic shop
        </div>

        <ul className='flex space x-6'>
                        <li><a href="#home" className='hover:text-gray-800'>Home</a></li>
                        <li><a href="#about" className='hover:text-gray-800'>About</a></li>
                        <li><a href="#contact" className='hover:text-gray-800'>Contact</a></li>
                    </ul>
      </div>
    </header>
  );
};

export default Header;