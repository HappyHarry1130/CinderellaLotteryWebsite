import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

const Carousel = () => {
  useEffect(() => {
    new Swiper('#carousel-template--16691234898006__campaign-carousel', {
      navigation: {
        nextEl: '#swiper-button-next-template--16691234898006__campaign-carousel',
        prevEl: '#swiper-button-prev-template--16691234898006__campaign-carousel',
      },
      pagination: {
        el: '#swiper-pagination-template--16691234898006__campaign-carousel',
        clickable: true,
      },
      loop: true,
      speed: 500,
      edgeSwipeDetection: true,
      lazy: true,
      lazyPreloadPrevNext: 2,
      longSwipes: false,
    });
  }, []);

  return (
    <div id="shopify-section-template--16691234898006__campaign-carousel" className="shopify-section">
      <section>
        <div id="carousel-template--16691234898006__campaign-carousel" className="swiper swiper-initialized swiper-horizontal" data-automation="campaign-carousel">
          <div className="swiper-wrapper" id="swiper-wrapper-ead7b79a5379a7cd" aria-live="polite">
            <div className="swiper-slide swiper-slide-active" style={{ width: '1302px' }} role="group" aria-label="1 / 17" data-swiper-slide-index="0">
              <div className="relative shadow-lg">
                <img src="https://cdn.shopify.com/s/files/1/0275/8390/5878/files/HERO_H33_LAKE_DISTRICT_III_OMAZE_DEER_CLOSE_DRONE_03_LOWRES_16x9_cf630423-5a13-40e5-a559-021c3a6fd667.jpg?v=1730982104" className="w-full" loading="lazy" alt="Front Elevation" />
                {/* <img src="https://cdn.shopify.com/s/files/1/0275/8390/5878/files/HERO_H33_LAKE_DISTRICT_III_OMAZE_DEER_CLOSE_DRONE_03_1x1_LOWRES_1x1_ca0ac7d5-6ba8-4f4b-8b5e-3b34029e29da.jpg?v=1730982104" className="block md:hidden" style={{ height: '100vw' }} loading="lazy" alt="Front Elevation" /> */}
                <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white z-10 mb-[30px] text-[25px]">
                  <p><strong>Front Elevation</strong></p>
                  <p className='w-[70%]'>On the shore of Coniston Water, at the edge of Grizedale Forest, this Enchanting House of oak and slate commands spectacular Lakeland views.</p>
                </div>
              </div>
            </div>
            {/* Repeat similar structure for other slides */}
          </div>
          <div id="swiper-pagination-template--16691234898006__campaign-carousel" className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
          <div id="swiper-button-prev-template--16691234898006__campaign-carousel" className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-ead7b79a5379a7cd"></div>
          <div id="swiper-button-next-template--16691234898006__campaign-carousel" className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-ead7b79a5379a7cd"></div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </section>
    </div>
  );
};

export default Carousel;