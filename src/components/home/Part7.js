import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'; // Correct import path for modules

const MeetOurWinners = () => {
  const winners = [
    {
      imgSrc: "https://cdn.shopify.com/s/files/1/0275/8390/5878/files/Omaze_EB_PrizeWinner_200x200px_RogerC_Aug24.png?v=1724774545",
      quote: "Absolutely delighted! Can’t believe it! So lucky! It takes your breath away! Never really expected to win. Will really help with our future financial stability.",
      winner: "Roger from Beckenham won the VW ID Buzz + £100k Cash"
    },
    {
        imgSrc: "https://cdn.shopify.com/s/files/1/0275/8390/5878/files/Omaze_EB_PrizeWinner_200x200px_RogerC_Aug24.png?v=1724774545",
        quote: "Absolutely delighted! Can’t believe it! So lucky! It takes your breath away! Never really expected to win. Will really help with our future financial stability.",
        winner: "Roger from Beckenham won the VW ID Buzz + £100k Cash"
      },
      {
        imgSrc: "https://cdn.shopify.com/s/files/1/0275/8390/5878/files/Omaze_EB_PrizeWinner_200x200px_RogerC_Aug24.png?v=1724774545",
        quote: "Absolutely delighted! Can’t believe it! So lucky! It takes your breath away! Never really expected to win. Will really help with our future financial stability.",
        winner: "Roger from Beckenham won the VW ID Buzz + £100k Cash"
      },
      {
        imgSrc: "https://cdn.shopify.com/s/files/1/0275/8390/5878/files/Omaze_EB_PrizeWinner_200x200px_RogerC_Aug24.png?v=1724774545",
        quote: "Absolutely delighted! Can’t believe it! So lucky! It takes your breath away! Never really expected to win. Will really help with our future financial stability.",
        winner: "Roger from Beckenham won the VW ID Buzz + £100k Cash"
      },
      {
        imgSrc: "https://cdn.shopify.com/s/files/1/0275/8390/5878/files/Omaze_EB_PrizeWinner_200x200px_RogerC_Aug24.png?v=1724774545",
        quote: "Absolutely delighted! Can’t believe it! So lucky! It takes your breath away! Never really expected to win. Will really help with our future financial stability.",
        winner: "Roger from Beckenham won the VW ID Buzz + £100k Cash"
      },
      {
        imgSrc: "https://cdn.shopify.com/s/files/1/0275/8390/5878/files/Omaze_EB_PrizeWinner_200x200px_RogerC_Aug24.png?v=1724774545",
        quote: "Absolutely delighted! Can’t believe it! So lucky! It takes your breath away! Never really expected to win. Will really help with our future financial stability.",
        winner: "Roger from Beckenham won the VW ID Buzz + £100k Cash"
      }
  ];

  return (
    <section className="py-12 campaign-content__meet-our-winners" style={{ background: '#f0f0f0' }}>
      <div className="campaign-content__carousel-container ml-[10%]">
        {/* <h2 className="text-center mb-4">Meet Our Winners</h2> */}
        <Swiper
          id="carousel-template--16691234898006__campaign-meet-our-winners"
          slidesPerView={1}
          navigation={{
            nextEl: '#swiper-button-next-template--16691234898006__campaign-meet-our-winners',
            prevEl: '#swiper-button-prev-template--16691234898006__campaign-meet-our-winners',
          }}
          speed={500}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,

            },
          }}
          loop={true}
          modules={[Navigation]}
          className='items-center' // Pass modules here
          
        >
          {winners.map((winner, index) => (
            <SwiperSlide key={index}>
              <div className="winner col-sm w-[300px]">
                <div className="text-center py-4 px-4 bg-white winner-testimonial">
                  <img className="mb-2" src={winner.imgSrc} style={{ width: '200px', borderRadius: '50px' }} alt="Winner" />
                  <div className="caption mb-0"><p><em>{winner.quote}</em></p></div>
                  <div className="winner"><p><strong>{winner.winner}</strong></p></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="swiper-button-prev" id="swiper-button-prev-template--16691234898006__campaign-meet-our-winners" tabIndex="0" role="button" aria-label="Previous slide"></div>
        <div className="swiper-button-next" id="swiper-button-next-template--16691234898006__campaign-meet-our-winners" tabIndex="0" role="button" aria-label="Next slide"></div> */}
        <div className="text-center" style={{ paddingTop: '25px' }}>
          <a className="blue-btn campaign-content__cta text-[30px]" href="https://omaze.co.uk/pages/winners" style={{fontWeight:600}}>Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default MeetOurWinners;