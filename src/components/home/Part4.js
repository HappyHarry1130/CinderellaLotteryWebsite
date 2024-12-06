import React, { useState, useEffect } from 'react';

const Part4 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const blocks = [
    { icon: '🏠', text: '4 bedrooms' },
    { icon: '🛁', text: '3 bathrooms' },
    { icon: '📏', text: '2,863 sq feet' },
    { icon: '🧖‍♀️', text: 'Spa' },
  ];

  const visibleBlocks = isMobile ? 2 : 4;

  return (
    <div className="flex flex-row md:flex-col items-center justify-center bg-gray-100">
        <div className="w-1/2 md:w-full ml-8 md:mt-0">
        <h1 className="text-3xl font-bold mb-4">Live In. Rent Out. Sell Up.</h1>      
        
        
        <div className="text-left mb-4 text-[20px] ml-[25px]">
        <h2 className="hidden md:block">ENTER TODAY TO WIN EVEN MORE</h2>
        <div>
          <p className='my-[20px]'>Introducing the Omaze Christmas Special.</p>
          <p className='my-[20px]'>Not only could you be seeing out the year with an Enchanting House in the Lake District, but enter early, by Midnight on Sunday 8th December, and you could be waking up on Christmas Eve to your share of £1,000,000.</p>
          <p className='my-[20px]'>In our Biggest Early Bird Prize EVER, you could be unwrapping pure holiday magic with one of five huge cash prizes, including the top prize of £500,000.&nbsp;</p>
          <p className='my-[20px]'><strong>Prize 1 </strong>£500,000<strong>&nbsp;</strong></p>
          <p className='my-[20px]'><strong>Prize 2</strong> £250,000&nbsp;</p>
          <p className='my-[20px]'><strong>Prize 3 </strong>£100,000&nbsp;</p>
          <p className='my-[20px]'><strong>Prize 4 </strong>£100,000</p>
          <p className='my-[20px]'><strong>Prize 5</strong> £50,000</p>
          <p className='my-[20px]'>So, let’s get Christmas cracking. Enter the Omaze Million Pound House Draw, the Lake District, now.</p>
        </div>
        </div>
        
        <a
          className="inline-block px-6 py-3 bg-yellow-500 text-black rounded-lg shadow-md hover:bg-yellow-600 ml-[20px]"
          href="https://omaze.co.uk/pages/enter-lake-district-iii"

        >
          Enter Now
        </a>
      </div>

      <div className="md:w-full w-1/2">
        <img
          src="https://cdn.shopify.com/s/files/1/0275/8390/5878/files/Christmas-Prizes-1x1-Dark-BG-1-2.jpg?v=1731323164"
          alt="Live Rent Sell"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      
    </div>
  );
};

export default Part4;