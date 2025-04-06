import { FC } from "react";
import { FlatList } from "react-native";
import categories from "./data";
import CategoryCard from "./category-card";

const Categories: FC = () => {
  return <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={categories}
    contentContainerStyle={{
      gap: 20,
      paddingHorizontal: 36
    }}
    keyExtractor={(item) => `category-${item.id}`}
    renderItem={({ item, index }) => <CategoryCard category={item} delay={index * 100} />}
  />
};

export default Categories;