const meals: IMeal[] = [
  {
    id: 1,
    name: "California Roll",
    image: require("@/assets/images/meals/california-roll.webp"),
    price: 24.99,
    is_best: true,
    rating: 4.9,
    category: "Meal"
  },
  {
    id: 2,
    name: "Tiramusi",
    image: require("@/assets/images/meals/tiramisu.jpg"),
    price: 20,
    is_best: true,
    rating: 4.5,
    category: "Desserts"
  },
  {
    id: 3,
    name: "Mojito Classic",
    image: require("@/assets/images/meals/mohito-classic.avif"),
    price: 9.99,
    is_best: true,
    rating: 4.7,
    category: "Drinks"
  }
];

export default meals;