
import Bali from '../../assets/images/bali.jpg';
import London from '../../assets/images/london.jpg';
import Santorini from '../../assets/images/santorini.jpg';
import Rome from '../../assets/images/rome.jpg';
import Maldives from '../../assets/images/madives.jpg';
import Kazbegi from '../../assets/images/kazbegi.jpg';
import  Hallstatt from '../../assets/images/hallstatt.jpg';
import Paris from '../../assets/images/paris.jpg';
import Kyoto from '../../assets/images/Kyoto.jpg';

const destinationLists = [
  {
    id: 1,
    image: Maldives,
    place: "Maldives",
    description: "Picture-perfect beaches with crystal-clear waters. Ideal for a relaxing beach holiday or underwater adventures.",
    days: "7 days",
    price: "$2,500",
    accommodation: "Luxury resort",
    activities: ["Snorkeling", "Sunset cruise", "Island hopping"],
    best_time_to_visit: "December to April",
    cuisine: "Fresh seafood, tropical fruits"
  },
  {
    id: 2,
    image: Santorini,
    place: "Santorini, Greece",
    description: "Experience stunning sunsets, whitewashed buildings, and crystal-clear waters in this beautiful Greek island paradise.",
    days: "5 days",
    price: "$1,800",
    accommodation: "Clifftop villa",
    activities: ["Sunset viewing", "Wine tasting", "Boat tours"],
    best_time_to_visit: "May to October",
    cuisine: "Moussaka, Greek salad, Souvlaki"
  },
  {
    id: 3,
    image: Bali,
    place: "Bali, Indonesia",
    description: "A tropical island with lush forests, beautiful beaches, and a rich culture. Perfect for relaxation and exploration.",
    days: "6 days",
    price: "$1,200",
    accommodation: "Beachfront villa",
    activities: ["Surfing", "Temple tours", "Yoga retreats"],
    best_time_to_visit: "April to October",
    cuisine: "Babi Guling, Nasi Goreng, Satay"
  },
  {
    id: 4,
    image: Rome,
    place: "Rome, Italy",
    description: "Immerse yourself in the ancient history of the Roman Empire with visits to the Colosseum, Roman Forum, and more.",
    days: "4 days",
    price: "$1,500",
    accommodation: "Hotel near historical sites",
    activities: ["Colosseum tour", "Vatican Museums", "Piazza Navona visit"],
    best_time_to_visit: "April to June, September to October",
    cuisine: "Pizza, Pasta, Gelato"
  },
  {
    id: 5,
    image: Kazbegi,
    place: "Kazbegi, Georgia",
    description: "Explore the breathtaking landscapes of the Caucasus Mountains, ancient churches, and stunning views of Mount Kazbeki.",
    days: "5 days",
    price: "$1,000",
    accommodation: "Mountain lodge",
    activities: ["Hiking", "Visit Gergeti Trinity Church", "Mountain jeep tours"],
    best_time_to_visit: "May to October",
    cuisine: "Khachapuri, Khinkali"
  },
  {
    id: 6,
    image: Paris,
    place: "Paris, France",
    description: "Fall in love with the City of Lights, home to the Eiffel Tower, charming cafés, historic landmarks, and the world-famous Louvre Museum.",
    days: "4 days",
    price: "$1,800",
    accommodation: "Hotel Near Eiffel",
    activities: ["Eiffel Tower visit", "Louvre Museum", "Seine river cruise"],
    best_time_to_visit: "April to October",
    reviews: "\"Paris never goes out of style!\" - Claire",
    cuisine: "Croissants, Baguettes, Macarons"
  },
  {
    id: 7,
    image: Hallstatt,
    place: "Hallstatt, Austria",
    description: "Discover the charming village of Hallstatt, nestled by a stunning lake and surrounded by breathtaking mountains.",
    days: "4 days",
    price: "$1,200",
    accommodation: "Lakefront guesthouse",
    activities: ["Boat tour", "Visit the Hallstatt Skywalk", "Hike to Dachstein Ice Caves"],
    best_time_to_visit: "May to September",
    cuisine: "Wiener Schnitzel, Apfelstrudel"
  },
  {
    id: 8,
    image: London,
    place: "London, UK",
    description: "Explore iconic landmarks like the Big Ben, Buckingham Palace, the London Eye, and the Tower of London in the heart of England.",
    days: "5 days",
    price: "$1,700",
    accommodation: "Historic hotel",
    activities: ["Buckingham Palace tour", "London Eye", "British Museum visit"],
    best_time_to_visit: "March to May, September to November",
    cuisine: "Fish and Chips, Afternoon Tea"
  },
  {
    id: 9,
    image: Kyoto,
    place: "Kyoto, Japan",
    description: "Explore the ancient temples, beautiful gardens, and traditional tea ceremonies in the cultural heart of Japan.",
    days: "5 days",
    price: "$1,500",
    accommodation: "Ryokan",
    activities: ["Temple visits", "Tea ceremony", "Bamboo Grove walk"],
    best_time_to_visit: "March to May, October to November",
    cuisine: "Kaiseki, Ramen, Matcha desserts"
  }
];
export default destinationLists;
