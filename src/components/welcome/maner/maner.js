import { motion } from "framer-motion"; // Optional - for better animations

export default function MyManer() {
  return (
    <div className="mt-[50px] h-full text-center py-[100px] pb-[350px] items-center justify-center">
      <motion.div
        initial={{ fontSize: "260px" }}
        animate={{ fontSize: "100px" }}
        transition={{ duration: 2 }}
        className="w-[50%] text-[100px] font-extrabold uppercase font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif]
        lg:text-[100px] md:text-[90px] sm:text-[70px] mx-auto"
      >
        CINDERELLA STORY SWEEPSTAKES
      </motion.div>

      <div className="text-xl leading-[50px] pb-5 no-underline">
        Help us find the next Cinderella!
      </div>

      <button
        className="mt-2.5 bg-blue-600 w-[215.75px] h-[58px] pt-0.5 rounded-[30px] text-white text-xl 
        border-none cursor-pointer hover:opacity-80 transition-opacity duration-500
        lg:w-[190px] lg:h-[50px] 
        md:w-[180px] md:h-[50px]
        sm:w-[150px] sm:h-[40px] sm:mt-[5px]"
      >
        Plesae Start
      </button>
    </div>
  );
}
