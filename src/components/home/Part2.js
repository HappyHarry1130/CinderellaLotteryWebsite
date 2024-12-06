import React, { useState, useEffect } from 'react';

const LiveRentSell = () => {
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
      <div className="md:w-full w-1/2">
        <img
          src="https://cdn.shopify.com/s/files/1/0275/8390/5878/files/H33_LAKE_DISTRICT_III_OMAZE_DEER_CLOSE_KITCHEN_02-V2_LOWRES_1x1_dc3cf02f-b0a3-4c21-a2e2-5ac7bc184bf5.jpg?v=1731090216"
          alt="Live Rent Sell"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <div className="w-1/2 md:w-full ml-8 md:mt-0">
        <h1 className="text-3xl font-bold mb-4">Live In. Rent Out. Sell Up.</h1>
        
        <div className="grid grid-cols-4 gap-2 mx-5 w-auto m-0">
          {blocks.slice(0, showAll ? blocks.length : visibleBlocks).map((block, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-2 bg-white shadow-md rounded-md text-center"
            >
              <div className="text-2xl mr-4">{block.icon}</div>
              <p className="text-lg">{block.text}</p>
            </div>
          ))}
        </div>
        
        {blocks.length > visibleBlocks && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mb-4 px-6 py-3 bg-yellow-500 text-black rounded-lg shadow-md hover:bg-yellow-600"
          >
            {showAll ? 'View less...' : 'View more...'}
          </button>
        )}
        
        <div className="text-left mb-4 text-[20px] ml-[25px]">
          <p className='my-[25px]'>
            This Enchanting House, worth £4,000,000, is a luxurious sanctuary on the shore of Coniston Water, complete
            with a spa, private jetty and summerhouse. And when you enter the Lake District House Draw supporting Age
            UK, you could be waking up next year to the magic of Christmas right here.
          </p>
          <p>
            There’s no stamp duty, mortgage or conveyancing fees to pay. And with furnishings included, plus an
            incredible £250,000 in cash to help you settle in, one guaranteed winner will be free to move in, rent out
            or sell-up. So why wait?
          </p>
        </div>
        
        <a
          className="inline-block px-6 py-3 bg-yellow-500 text-black rounded-lg shadow-md hover:bg-yellow-600"
          href="https://omaze.co.uk/pages/enter-lake-district-iii"
        >
          Enter Now
        </a>
      </div>
    </div>
  );
};

export default LiveRentSell;