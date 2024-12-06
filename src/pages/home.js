import React, { useEffect } from 'react';
import Swiper from 'swiper';
import LiveRentSell from '../components/home/Part2';
import 'swiper/css';
import Header from '../components/Header';
import Carousel from '../components/home/Part3';
import HalfWidthCarousel from '../components/home/Part4';
import Part4 from '../components/home/Part4';
import CampaignMultiBlock from '../components/home/Part5';
import Part6 from '../components/home/Part6';
import MeetOurWinners from '../components/home/Part7';
const CampaignHero = () => {
  useEffect(() => {
    const setupCountdown = () => {
      const thisTimer = document.querySelector('.campaign-hero__countdown-date');
      const thisDate = new Date('').getTime();
      if (thisTimer) {
        setInterval(() => {
          const timeTilDate = thisDate - new Date().getTime();
          if (timeTilDate < 0) {
            thisTimer.innerHTML = 'EXPIRED';
          } else {
            const days = Math.floor(timeTilDate / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeTilDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeTilDate % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeTilDate % (1000 * 60)) / 1000);
            thisTimer.innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
          }
        }, 1000);
      }
    };

    const setupSwiper = () => {
      const swiperOptions = {
        loop: true,
        speed: 500,
        edgeSwipeDetection: true,
        lazy: true,
        lazyPreloadPrevNext: 2,
        longSwipes: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      };

      new Swiper('.swiper-container', swiperOptions);
    };

    setupCountdown();
    setupSwiper();
  }, []);

  return (
    <div className="home--banner index-only-banner position-relative mAutoxAuto dAutoxAuto h-100%">
      <Header/>
      <div className="home--banner index-only-banner position-relative mAutoxAuto dAutoxAuto">
        <div className="banner active" id="hero-video">
          <div className="banner-image" style={{ height: 'auto' }}>
            <div className="embed-responsive embed-responsive-16by9 embed-responsive-index w-full h-[100vh] relative">
              <video
                data-src="https://cdn.shopify.com/videos/c/o/v/25b5a043964145de8475cd0bdc9f8c67.mp4"
                className="z-0 w-full h-full object-cover"
                muted
                loop
                playsInline
                autoPlay
                src="https://cdn.shopify.com/videos/c/o/v/25b5a043964145de8475cd0bdc9f8c67.mp4"
              ></video>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-hero-gradient-color opacity-75"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
                <div className="text-[40px] md:text-4xl font-bold drop-shadow-lg" style={{fontWeight:'bold'}}>
                  YOUR CHANCE TO WIN THIS £4,000,000 LAKE DISTRICT HOUSE
                </div>
                <div className="text-[30px] md:text-2xl mt-2 drop-shadow-lg">
                  Along with £250,000 in Cash
                </div>
                <a
                  href="https://omaze.co.uk/pages/enter-lake-district-iii"
                  className="mt-4 px-6 py-3 bg-yellow-500 text-black rounded-lg shadow-md hover:bg-yellow-600"
                >
                  Enter Now
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        <LiveRentSell/>
        <Carousel/>
        <Part4/>
        <CampaignMultiBlock/>
        <Part6/>
        <MeetOurWinners/>
    </div>
  );
};

export default CampaignHero;