import React, { useState, useEffect } from 'react';

const Part6 = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 500);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className="flex flex-row md:flex-col items-center justify-center bg-gray-100">
            <div className="w-1/2 md:w-full ml-8 md:mt-0">
                <div className="col px-0 d-flex flex-fill align-items-start justify-content-center flex-column">
                    <div className="mx-auto sm:px-12 px-4 sm:py-6 text-center md:text-center pb-0 sm:pb-6">
                        <h2
                            className="text-[30px] text-bold mb-[30px]"
                            style={{
                                fontFamily: 'Showtime, sans-serif',
                                letterSpacing: '.02em',
                                textTransform: 'uppercase',
                                fontWeight: 800
                            }}
                        >
                            AGE UK
                        </h2>
                        <div className="under-hero__text-block__content mx-auto text-[22px]">
                            <p className='mb-[20px]'>We've guaranteed a minimum £1,000,000 donation for Age UK from the Lake District House Draw.</p>
                            <p><strong>Adjust the slider below to see the impact we can make together.</strong></p>
                        </div>
                        <div className="range-slider mt-12 text-[22px]">
                            <input
                                className="range-slider__range mb-[10px]"
                                type="range"
                                defaultValue="1000000"
                                min="1000000"
                                max="3000000"
                                step="500000"
                                style={{ background: 'linear-gradient(to right, rgb(1, 147, 167) 0%, rgb(204, 204, 204) 0%)', width: '400px' }}
                            />
                            <div className="range-slider__value mb-[30px]">£1,000,000</div>
                            <div className="under-hero__text-block__content mx-auto mb-[50px]">
                                <p>would enable Age UK to fund...</p>
                            </div>
                            <div className="under-hero__text-block__content impact mx-auto mb-[25px]">
                                <span>2</span> million minutes of vital friendship, social activities and practical support for older people who are struggling in silence.
                            </div>
                        </div>
                        <a className="blue-btn under-hero__cta text-[25px] text-bold" href="https://omaze.co.uk/pages/age-uk" style={{ fontWeight: 700 }}>Find Out More</a>
                    </div>
                </div>
            </div>

            <div className="md:w-full w-1/2">
                <img
                    src="https://cdn.shopify.com/s/files/1/0275/8390/5878/files/H33_Lake_District_III_Age_UK_Image.jpg?v=1731689850"
                    srcSet="
                        https://cdn.shopify.com/s/files/1/0275/8390/5878/files/H33_Lake_District_III_Age_UK_Image.jpg?v=1731689850&amp;width=390 390w,
                        https://cdn.shopify.com/s/files/1/0275/8390/5878/files/H33_Lake_District_III_Age_UK_Image.jpg?v=1731689850&amp;width=960 960w,
                        https://cdn.shopify.com/s/files/1/0275/8390/5878/files/H33_Lake_District_III_Age_UK_Image.jpg?v=1731689850&amp;width=1280 1280w,
                        https://cdn.shopify.com/s/files/1/0275/8390/5878/files/H33_Lake_District_III_Age_UK_Image.jpg?v=1731689850&amp;width=1920 1920w,
                        https://cdn.shopify.com/s/files/1/0275/8390/5878/files/H33_Lake_District_III_Age_UK_Image.jpg?v=1731689850&amp;width=2560 2560w,
                        https://cdn.shopify.com/s/files/1/0275/8390/5878/files/H33_Lake_District_III_Age_UK_Image.jpg?v=1731689850&amp;width=3840 3840w"
                    className="img-responsive w-100 hide-on-mobile"
                    loading="lazy"
                    alt="AGE UK"
                />
            </div>


        </div>
    );
};

export default Part6;