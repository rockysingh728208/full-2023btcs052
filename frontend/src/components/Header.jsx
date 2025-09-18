import React from "react";
import img1 from "../assets/ac.jpg";
import img2 from "../assets/bluetooth.jpg";
import img3 from "../assets/board.webp";
import img4 from "../assets/cooler.jpg";
import img5 from "../assets/speaker.jpg";
import img6 from "../assets/trimmer.jpg";

const products = [
  {
    id: 1,
    name: "Electric Fan",
    description: "High speed ceiling fan with energy efficiency.",
    price: 1200,
    image: img1,
  },
  {
    id: 2,
    name: "LED Bulb",
    description: "12W LED bulb with bright light and low power usage.",
    price: 150,
    image: img2,
  },
  {
    id: 3,
    name: "Mixer Grinder",
    description: "Powerful motor with 3 jars for daily kitchen needs.",
    price: 2200,
    image: img3,
  },
  {
    id: 4,
    name: "Electric Iron",
    description: "Non-stick soleplate with temperature control.",
    price: 950,
    image: img4,
  },
  {
    id: 5,
    name: "Water Heater",
    description: "Instant geyser for hot water anytime.",
    price: 3200,
    image: img5,
  },
  {
    id: 6,
    name: "Extension Board",
    description: "4 socket board with surge protection.",
    price: 450,
    image: img6,
  },
  
];

const Header = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            <p className="text-blue-600 font-bold mt-2">₹{item.price}</p>
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
