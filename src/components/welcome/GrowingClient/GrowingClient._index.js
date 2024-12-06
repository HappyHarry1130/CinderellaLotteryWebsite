import styles from "../about/about.module.css";
import image1 from "../../../images/avatare-1x280.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./style.css";
import { FaStar } from "react-icons/fa"; // Add this import at the top

const items = [
  {
    image: image1,
    text: "Being part of Cinderella Story Sweepstakes isn't just about winning...",
    name: "Sarah Martinez",
    type: "LOCAL BUSINESS OWNER",
    rating: 5, // Add rating property
  },
  {
    image: image1,
    text: "What drew me in was their transparency...",
    name: "David Chen",
    type: "COMMUNITY MEMBER",
    rating: 5,
  },
  {
    image: image1,
    text: "As a charity partner chosen by the community...",
    name: "Michael Thompson",
    type: "CHARITY DIRECTOR",
    rating: 5,
  },
];

function Personal_Slide1({ itemss }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === itemss.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [itemss.length]);

  return (
    <div className="relative overflow-hidden w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full"
        >
          <Personal_Data1
            image={itemss[currentIndex].image}
            text={itemss[currentIndex].text}
            name={itemss[currentIndex].name}
            type={itemss[currentIndex].type}
            rating={itemss[currentIndex].rating} // Add this line
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Personal_Data1({ image, text, name, type, rating }) {
  return (
    <div className="flex items-center gap-6 p-6 hover:bg-gray-50 transition-colors duration-300">
      <div className="flex-shrink-0">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
          <img src={image} className="w-full h-full object-cover" alt={name} />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center mb-3">
          {[...Array(rating)].map((_, index) => (
            <FaStar key={index} className="text-yellow-400 w-5 h-5" />
          ))}
        </div>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">"{text}"</p>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{type}</p>
        </div>
      </div>
    </div>
  );
}

export default function GrowingClient() {
  return (
    <section className="mx-auto  border-b border-firebrick">
      <div className={styles.aboutbody}>
        <div className="text-center mb-12">
          <h2 className={styles.aboutHeader}>Come join us</h2>
          <p className={`${styles.body_content} mb-2`}>
            The comments below are just a sample of the 30,000 clients worldwide
          </p>
          <p className={styles.body_content}>
            who transformed their life with us.
          </p>
        </div>
        <div className="max-w-[90%] mx-auto mt-20 relative">
          <Personal_Slide1 itemss={items} />
        </div>
      </div>
    </section>
  );
}
