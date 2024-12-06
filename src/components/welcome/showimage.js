import backgroundImage from "../../files/images/Founders/founders.jpg";

export default function Showimage() {
  return (
    <div
      className="relative h-[500px] w-full bg-cover bg-center bg-fixed bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
      <div className="relative h-full flex items-center justify-center">
        <h1
          className="text-center text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
          font-bold tracking-wider drop-shadow-lg
          transform transition-transform duration-700 hover:scale-105
          px-4 max-w-7xl mx-auto"
        >
          PASSION LEADS TO SUCCESS
        </h1>
      </div>
    </div>
  );
}
