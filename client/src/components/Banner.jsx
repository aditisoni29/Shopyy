import React from 'react';

const Banner = () => {
  return (
    <div className="w-full py-3 mt-[80px] font-medium text-sm text-white bg-gradient-to-r from-green-600 via-green-600 to-green-800">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
        <p>🚚 Free Shipping on Orders Above $50</p>
        <span className="hidden sm:inline">|</span>
        <p>🎁 20% OFF on First Purchase</p>
        <span className="hidden sm:inline">|</span>
        <p>🔐 Use Code: <strong>WELCOME10</strong></p>
      </div>
    </div>
  );
};


export default Banner;
