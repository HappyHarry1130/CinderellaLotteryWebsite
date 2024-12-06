import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a1a2b] text-[#d6d6d6] p-[5%] text-[18px]">
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col items-center mb-8">
          <img
            src="//cdn.shopify.com/s/files/1/0275/8390/5878/files/Omaze_Logo_New_Inline_White_1_450x_png_2_7cbe20f4-02ae-419b-879a-20da9051be02.png"
            alt="Logo"
            className="w-36 mb-4"
          />
          <div className="flex space-x-4 mb-4">
            <a href="https://twitter.com/OmazeUK" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/OmazeUK/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCFtKZF8vImBVD4EI93STk3w" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/omazeuk/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://ciof.org.uk/">
              <img
                src="//omaze.co.uk/cdn/shop/t/1191/assets/big-ciof_logo_proud_partner_white_RGB.png?v=149570189646343319121732895070"
                alt="Chartered Institute of Fundraising Corporate Member"
                className="w-36 mb-4"
              />
            </a>
            <a href="https://www.fundraisingregulator.org.uk/directory/omaze-ltd">
              <img
                src="//omaze.co.uk/cdn/shop/t/1191/assets/fundraising-regulator-vector-logo.svg?v=16953812898927032351732895087"
                alt="Fundraising Regulator"
                className="w-36"
              />
            </a>
            <p className="mt-4">© 2024 Omaze</p>
          </div>
          <div
            className="trustpilot-widget"
            style={{
              maxWidth: '235px',
              paddingTop: '60px',
              position: 'relative',
            }}
            data-locale="en-US"
            data-template-id="53aa8807dec7e10d38f59f32"
            data-businessunit-id="5eba01cd03d841000178dfdc"
            data-style-height="120px"
            data-style-width="100%"
            data-theme="dark"
          >
            {/* <iframe
              title="Customer reviews powered by Trustpilot"
              loading="auto"
              src="https://widget.trustpilot.com/trustboxes/53aa8807dec7e10d38f59f32/index.html?templateId=53aa8807dec7e10d38f59f32&amp;businessunitId=5eba01cd03d841000178dfdc#locale=en-US&amp;styleHeight=120px&amp;styleWidth=100%25&amp;theme=dark"
              style={{
                position: 'relative',
                height: '120px',
                width: '100%',
                borderStyle: 'none',
                display: 'block',
                overflow: 'hidden',
              }}
            ></iframe> */}
          </div>
        </div>
        <div className='w-[70%]'>
        <div className="flex flex-wrap justify-between  md:w-auto">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h4 className="font-bold mb-2">Draw</h4>
            <ul>
              <li><a href="https://omaze.co.uk/pages/lake-district-iii">The Lake District House</a></li>
              <li><a href="https://omaze.co.uk/pages/enter-subscription">Omaze Subscriptions</a></li>
              <li><a href="https://omaze.co.uk/pages/past-draws">Past Draws</a></li>
              <li><a href="https://omaze.co.uk/pages/winners">Our Winners</a></li>
              <li><a href="https://omaze.co.uk/pages/draw-results">Draw Results</a></li>
              <li><a href="https://omaze.co.uk/pages/weekly-draw-results-2024">Weekly Draw Winners</a></li>
              <li><a href="https://omaze.co.uk/account/login">My Account</a></li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 md:mr-8">
            <h4 className="font-bold mb-2">Omaze</h4>
            <ul>
              <li><a href="https://omaze.co.uk/pages/about-omaze">About Omaze</a></li>
              <li><a href="https://omaze.co.uk/pages/faqs">FAQs</a></li>
              <li><a href="https://omaze.co.uk/pages/newsletter-signup">Email Signup</a></li>
              <li><a href="https://omaze.co.uk/pages/messaging-sign-up">Messaging Signup</a></li>
              <li><a href="https://jobs.swagapp.com/AU/organisations/omaze">Work at Omaze</a></li>
              <li><a href="https://omaze.co.uk/blogs/news">Our Blog</a></li>
              <li><a href="https://omaze.co.uk/pages/contact-us-pr">Public Relations</a></li>
              <li><a href="https://omaze.co.uk/pages/omaze-community-guidelines">Omaze Community Guidelines</a></li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 md:mr-8">
            <h4 className="font-bold mb-2">Charity</h4>
            <ul>
              <li><a href="https://omaze.co.uk/pages/age-uk">Age UK</a></li>
              <li><a href="https://omaze.co.uk/pages/our-charity-partners">Our Charity Partners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Legal</h4>
            <ul>
              <li><a href="https://omaze.co.uk/pages/official-rules-uk">Official Rules</a></li>
              <li><a href="https://omaze.co.uk/pages/experience-rules-all-draws">Experience Rules - Omaze Million Pound House Draws</a></li>
              <li><a href="https://omaze.co.uk/pages/experience-rules-omaze-million-pound-house-draws">Experience Rules - The Great Escape House Draws</a></li>
              <li><a href="https://omaze.co.uk/pages/experience-rules-subscriber-draws">Experience Rules - Subscriber Draws</a></li>
              <li><a href="https://omaze.co.uk/policies/terms-of-service">Terms of Use</a></li>
              <li><a href="https://omaze.co.uk/policies/subscription-policy">Subscription Terms of Use</a></li>
              <li><a href="https://omaze.co.uk/pages/messaging-terms-of-use">Messaging Terms of Use</a></li>
              <li><a href="https://omaze.co.uk/pages/omaze-gift-card-and-reward-code-terms-of-use">Omaze Gift Card Terms of Use</a></li>
              <li><a href="https://omaze.co.uk/pages/cookie-notice">Cookie Notice</a></li>
              <li><a href="https://omaze.co.uk/policies/privacy-policy">Privacy Notice</a></li>
              <li><button id="ot-sdk-btn" className="ot-sdk-show-settings">Cookie Settings</button></li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-center text-sm">
            Please note that the Omaze Million Pound House Draw and Great Escape House Draw are not a charity raffle, house raffle or house lottery but a prize draw. Our online contest to win a house includes a method of entry via post. In addition to getting the opportunity to win a house, entrants will also be entered into other prize draws to win additional prizes regardless of the method of entry. No purchase is necessary to enter but the intention of the house draw is that people enter to win a house and support a worthy charitable cause.
          </p>
        </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;