import PrizeIcon from "../../../files/images/lastwinners/1.jpg"; // Add appropriate icons
import InstantWinIcon from "../../../files/images/lastwinners/1.jpg";
import BusinessIcon from "../../../files/images/lastwinners/2.jpg";
import CommunityImage from "../../../files/images/lastwinners/3.jpg";

const opportunities = [
  {
    header: "Major Prize Draw",
    content:
      "35% of funds allocated to life-changing prizes. Community members vote on prize structure - whether it's multiple winners sharing $100,000 or one grand prize winner. Your voice shapes the rewards!",
    icon: PrizeIcon,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    header: "Instant-Win Prizes",
    content:
      '28 exciting instant-win prizes funded by 12.5% of ticket sales. Win premium items like 80" TVs, BBQ smokers, and gift cards to local businesses. Community-selected prizes that matter to you!',
    icon: InstantWinIcon,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    header: "Local Business Support",
    content:
      "10% dedicated to Arizona Valley small businesses through gift card purchases and promotional support. Discover local gems while winning exciting prizes. Supporting our community, one business at a time.",
    icon: BusinessIcon,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
];

const OpportunityCard = ({ header, content, icon, bgColor, iconColor }) => (
  <div
    className={`${bgColor} rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
  >
    <div className={`${iconColor} w-12 h-12 mb-4`}>
      <img src={icon} alt={header} className="w-full h-full" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{header}</h3>
    <p className="text-gray-600 leading-relaxed">{content}</p>
  </div>
);

export default function Services() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Upcoming Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Join our community where every ticket creates multiple positive
            impacts
          </p>
          <p className="text-lg text-gray-500">
            From major prizes to local business support and charitable giving
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative mb-20">
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={CommunityImage}
              alt="Community Impact"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {opportunities.map((opportunity, index) => (
            <OpportunityCard key={index} {...opportunity} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-600 text-white py-16 px-4 rounded-2xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of Something Bigger!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community today and help create positive change while
            having the chance to win life-changing prizes.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
}
