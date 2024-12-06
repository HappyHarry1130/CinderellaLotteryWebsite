import styles from "../about/about.module.css";

import { motion } from "framer-motion";
import image1 from "../../../files/images/financialChallenges/1.jpg";
import image2 from "../../../files/images/financialChallenges/2.jpg";
import image3 from "../../../files/images/financialChallenges/3.jpg";
import image4 from "../../../files/images/financialChallenges/4.jpg";
import image5 from "../../../files/images/financialChallenges/5.jpg";
import image6 from "../../../files/images/financialChallenges/6.jpg";

const galleryColumns = [
  [
    {
      image: image1, // Image of a worried family looking at bills
      text: "Financial Struggles",
      category: "Why We Help",
      description:
        "Many families face overwhelming financial challenges in today's economy",
    },
    {
      image: image5, // Image of a single parent working multiple jobs
      text: "Working Hard",
      category: "Daily Challenges",
      description:
        "Hardworking individuals struggling to make ends meet despite their best efforts",
    },
  ],
  [
    {
      image: image2, // Image of a small business with 'closing' sign
      text: "Local Impact",
      category: "Community Crisis",
      description:
        "Small businesses and their employees facing difficult times in Arizona Valley",
    },
  ],
  [
    {
      image: image3, // Image of medical bills or healthcare stress
      text: "Medical Hardships",
      category: "Rising Costs",
      description:
        "Unexpected medical expenses can devastate families financially",
    },
    {
      image: image6, // Image of student loan statements or education costs
      text: "Education Debt",
      category: "Future Dreams",
      description:
        "Rising education costs creating barriers to better opportunities",
    },
  ],
  [
    {
      image: image4, // Image of housing stress or eviction notices
      text: "Housing Security",
      category: "Basic Needs",
      description: "Many struggle to maintain stable housing in today's market",
    },
  ],
];
const WelcomeGallery = () => {
  return (
    <section className="py-20">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="grid grid-cols-4 gap-6 h-[860px]">
          {galleryColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-6 h-full">
              {column.length === 2 ? (
                column.map((item, itemIndex) => (
                  <GalleryItem
                    key={itemIndex}
                    {...item}
                    className="h-[calc(50%-12px)]"
                  />
                ))
              ) : (
                <GalleryItem {...column[0]} className="h-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function GalleryItem({ image, text, category, className }) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full h-full">
        <motion.img
          src={image}
          alt={text}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent
                   opacity-0 group-hover:opacity-100 hover:bg-blue-500/30 transition-all duration-300"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <span className="block text-sm font-medium text-blue-400 mb-2">
              {category}
            </span>
            <h3 className="text-xl font-semibold text-white mb-4">{text}</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full bg-white text-black
                       text-sm font-medium tracking-wide
                       transform transition-all duration-300
                       hover:bg-blue-500 hover:text-white"
            >
              View
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function OurWork() {
  return (
    <section className="bg-[#ddecf5] py-24">
      {" "}
      {/* Changed div to semantic section */}
      <div className="container mx-auto text-center px-4">
        <h2 className="font-extrabold text-5xl md:text-6xl leading-tight tracking-tight text-gray-800 mb-12">
          {" "}
          {/* Increased margin-bottom */}
          Pay it Forward, One Joe to Another
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600">
          <p className="leading-relaxed">
            Individually, we might face financial challenges, but together, as a
            collective, we have the strength to accumulate and redistribute
            significant funds. This is the heart of Cinderella Story
            Sweepstakes.
          </p>
          <p className="leading-relaxed">
            Through our unique model, we distribute funds across major prizes
            (35%), instant-win rewards (12.5%), local business support (10%),
            charitable giving (20%), and community member rewards (5%), ensuring
            every ticket creates multiple positive impacts.
          </p>
          <p className="leading-relaxed">
            Join our community-driven platform where you decide the prizes,
            choose the charities, and help support local Arizona Valley
            businesses. Together, we're not just creating winners - we're
            building a movement of positive change.
          </p>
        </div>
        <div className="mt-16">
          {" "}
          {/* Added margin top for better spacing */}
          <WelcomeGallery />
        </div>
      </div>
    </section>
  );
}
