const meals: IMeal[] = [
  {
    id: 1,
    name: "California Roll",
    image: require("@/assets/images/meals/california-roll.webp"),
    price: 24.99,
    is_best: true,
    rating: 4.9,
    like: 764,
    category: "Meals"
  },
  {
    id: 2,
    name: "Tiramusi",
    image: require("@/assets/images/meals/tiramisu.jpg"),
    price: 20,
    is_best: true,
    rating: 4.5,
    like: 233,
    category: "Desserts"
  },
  {
    id: 3,
    name: "Mojito Classic",
    image: require("@/assets/images/meals/mohito-classic.avif"),
    price: 9.99,
    is_best: true,
    rating: 4.7,
    like: 102,
    category: "Drinks"
  },
  {
    id: 4,
    name: "",
    image: require("@/assets/images/meals/adana-kebab.jpg"),
    price: 50,
    is_best: false,
    rating: 4.3,
    like: 96,
    category: "Meals"
  },
  {
    id: 5,
    name: "Spaghetti and Meatballs",
    image: require("@/assets/images/meals/spaghetti.jpg"),
    price: 20,
    is_best: false,
    rating: 3.6,
    like: 54,
    category: "Meals"
  },
  {
    id: 6,
    name: "Bloody Mary",
    image: require("@/assets/images/meals/bloody-mary.jpg"),
    price: 17,
    is_best: true,
    rating: 3.8,
    like: 634,
    category: "Drinks"
  },
  {
    id: 7,
    name: "Mai Tai",
    image: require("@/assets/images/meals/mai-tai.webp"),
    price: 20,
    is_best: false,
    rating: 4.4,
    like: 324,
    category: "Drinks"
  }
];

export const mostLikedMeals = [...meals].sort((a, b) => b.like - a.like);

export const bestMeals = [...meals].sort((a, b) => {
  if (a.is_best && !b.is_best) return -1;
  if (!a.is_best && b.is_best) return 1;
  return 0;
});

export const recommendedMeals = [...meals].sort((a, b) => b.rating - a.rating);

export default meals;