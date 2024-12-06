import { motion } from "framer-motion";
import { FaAndroid, FaApple, FaWindows } from "react-icons/fa";
import { useState, useEffect } from "react";

const steps = [
  {
    number: "01",
    title: "Community-Driven Prizes",
    image: "/images/howstep1.png",
    description: `35% goes to major prizes and 12.5% to instant-win prizes. You, our community members, vote on prize distribution and selection. Whether it's multiple smaller prizes or one grand prize, your voice shapes every draw.`,
    tag: "Your Voice, Your Choice",
  },
  {
    number: "02",
    title: "Local Impact",
    image: "/images/howstep2.png",
    description:
      "10% supports Arizona Valley small businesses through our Support Initiative. We purchase gift cards as prizes and create promotional content, strengthening our local economy while offering exciting rewards.",
    tag: "Support Local",
  },
  {
    number: "03",
    title: "Charitable Giving",
    image: "/images/howstep3.png",
    description:
      "20% goes to carefully vetted charities that use at least 70% of donations for their causes. Through 'Your Voice, Your Choice,' you vote on which charities receive support, ensuring meaningful community impact.",
    tag: "Make a Difference",
  },
  {
    number: "04",
    title: "Transparent Operations",
    image: "/images/howstep4.png",
    description:
      "Using RandomPicker.com for unbiased draws and scaling down operational costs as we grow. With 10,000 members, 100% of ticket sales will go back to prizes and community support.",
    tag: "Fair & Clear",
  },
];

export default function HowItWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const extendedSteps = [...steps, ...steps, ...steps, ...steps];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gray-50 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          How We Make Dreams Come True
        </h2>
        <p className="text-gray-600">
          Pay it Forward, One Joe to Another: Your Ticket Creates Multiple
          Impacts
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Join our community where every ticket supports local businesses, funds
          charitable causes, and creates life-changing opportunities
        </p>
      </div>

      {/* Card Container */}
      <div className="relative overflow-hidden mx-auto max-w-6xl">
        <motion.div
          className="flex"
          animate={{
            x: `${-33.33 * currentIndex}%`, // Changed from -100 to -33.33
          }}
          transition={{
            duration: 1.5,
            ease: "linear",
          }}
          style={{
            width: `100%`, // Adjusted width calculation
          }}
        >
          {extendedSteps.map((step, index) => (
            <div
              key={index}
              className="w-[33.33%] px-4 flex-shrink-0" // Fixed width and added flex-shrink-0
            >
              <div className="bg-white rounded-lg shadow-lg p-6 mx-2 h-full relative">
                <div className="text-6xl font-bold text-gray-200 absolute right-4">
                  {step.number}
                </div>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                {step.tag && (
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mb-2">
                    {step.tag}
                  </span>
                )}

                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 
                  ${
                    currentIndex % steps.length === index
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
