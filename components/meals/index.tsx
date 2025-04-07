import { FC, useMemo } from "react";
import { FlatList } from "react-native";
import { ProductCard1, ProductCard2 } from "../cards";

interface Props {
  variant?: number
  data: IMeal[]
}

const Meals: FC<Props> = ({ variant = 1, data }) => {
  const renderCard = useMemo(() => (item: IMeal) => {
    switch (variant) {
      case 1:
        return <ProductCard1 item={item} />
      case 2:
        return <ProductCard2 item={item} />
      default:
        return <ProductCard1 item={item} />
    }
  }, [variant]);

  return <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={data}
    keyExtractor={(item) => `item-${item.id}`}
    renderItem={({ item }) => renderCard(item)}
    contentContainerStyle={{
      gap: 10,
      paddingHorizontal: 36
    }}
  />
};

export default Meals;