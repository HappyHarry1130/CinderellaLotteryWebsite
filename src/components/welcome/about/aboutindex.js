import styles from "./about.module.css";

import PhonelinkIcon from "@mui/icons-material/Phonelink";
import { motion } from "framer-motion";
const items = [
  {
    header: "Community-Driven Prizes",
    content: `We allocate 35% to major prizes and 12.5% to instant-win prizes, with our community members voting on prize distribution and selection. You decide how prizes are structured, whether it's multiple smaller wins or one grand prize, making every draw exciting and meaningful.`,
    Icon: PhonelinkIcon,
    idNum: 0,
  },
  {
    header: "Local Business Support",
    content: `Through our Arizona Valley Small Business Support Initiative, we dedicate 10% of ticket sales to support local businesses. We purchase gift cards as instant-win prizes, create promotional content, and help build a stronger local economy, ensuring your participation benefits the entire community.`,
    Icon: PhonelinkIcon,
    idNum: 1,
  },
  {
    header: "Charitable Impact",
    content: `20% of all funds go to carefully vetted charities that use at least 70% of donations for their actual causes. Through our "Your Voice, Your Choice" initiative, you vote on which charities receive support, ensuring our giving aligns with our community's values and creates meaningful impact.`,
    Icon: PhonelinkIcon,
    idNum: 2,
  },
  {
    header: "Transparent Operations",
    content: `We're committed to complete transparency in every aspect of our operations. From using RandomPicker.com for unbiased draws to our scaling plan that will eventually eliminate operational costs from ticket sales through member support, we ensure every decision and process is clear and fair.`,
    Icon: PhonelinkIcon,
    idNum: 3,
  },
];

export default function Aboutindex() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            Our <span className="border-b-4 border-blue-500">Mission</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-600">
            <p className="text-xl">
              Cinderella Story Sweepstakes was born from a genuine desire to
              support individuals facing the challenges of rising living costs
              and the diminishing dreams of securing a financial future.
            </p>
            <p className="text-lg">
              Our founders,
              <span className="font-semibold text-blue-600">
                {" "}
                Ali and Sean Lancaster
              </span>
              , come from humble beginnings - a dedicated server and a
              hardworking residential HVAC manager - driven by a shared vision
              to make a difference.
            </p>
            <p className="text-lg">
              Through our motto
              <span className="font-bold text-blue-600">
                {" "}
                "Pay it forward, one Joe to another"{" "}
              </span>
              we're building a community where collective action transforms
              lives.
            </p>
            <p className="text-base text-gray-500 italic">
              Individually, we might face financial challenges, but together, as
              a collective, we have the strength to accumulate and redistribute
              significant funds.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <Circlation />
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-blue-50 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Join Our Community
            </h3>
            <p className="text-gray-600 mb-6">
              If you're over 18 and eager to make a positive impact while having
              a chance at life-changing rewards, we invite you to join us!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Circlation() {
  return items.map((item, key) => (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: key * 0.2 }}
    >
      <Item header={item.header} content={item.content} Icon={item.Icon} />
    </motion.div>
  ));
}

function Item({ Icon, header, content }) {
  return (
    <div
      className="group p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300
                      transform hover:-translate-y-1"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
        {header}
      </h3>

      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
}
