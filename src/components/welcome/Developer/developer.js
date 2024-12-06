import image1 from "../../../files/images/lastwinners/1.jpg";
import image2 from "../../../files/images/lastwinners/2.jpg";
import image3 from "../../../files/images/lastwinners/3.jpg";

const WinnerCard = ({ image, name, type, text }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="px-2 mt-6 space-y-4">
        <h3 className="text-xl text-gray-800 font-semibold tracking-tight">
          {name}
        </h3>
        <p className="text-base leading-relaxed text-gray-600">{text}</p>
        <span className="inline-block text-sm font-bold text-gray-800 tracking-wider">
          {type}
        </span>
      </div>
    </div>
  );
};

export default function Developer() {
  const winners = [
    {
      name: "Sarah Johnson",
      type: "JACKPOT WINNER",
      text: "I never thought I'd win the lottery! This incredible $245 million jackpot has completely changed my life. I can finally help my family, donate to charities I care about, and live my dreams without financial worry.",
      imageadress: image1,
    },
    {
      name: "Michael Chen",
      type: "MEGA MILLIONS WINNER",
      text: "Winning $180 million in the Mega Millions was surreal. I remember checking my ticket multiple times in disbelief. Now I've started my own business and created a foundation to help underprivileged students pursue education.",
      imageadress: image2,
    },
    {
      name: "Emma Rodriguez",
      type: "POWERBALL WINNER",
      text: "The $320 million Powerball win came at the perfect time. After 20 years of working two jobs, I can finally retire early, travel the world, and spend more time with my family. Dreams really do come true!",
      imageadress: image3,
    },
  ];

  return (
    <section className="bg-[aliceblue] py-24">
      {/* Header Section */}
      <div className="container mx-auto text-center mb-20">
        <h2 className="font-extrabold text-5xl md:text-6xl leading-tight tracking-tight text-gray-800 mb-6">
          Our Past Winners
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everyone has the right to change their life and be happy.
        </p>
      </div>

      {/* Winners Grid */}
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-3 gap-8">
          {winners.map((winner, index) => (
            <div key={index}>
              <WinnerCard
                image={winner.imageadress}
                name={winner.name}
                type={winner.type}
                text={winner.text}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
