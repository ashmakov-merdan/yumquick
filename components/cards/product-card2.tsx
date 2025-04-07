import colors from "@/styles/colors";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { FC } from "react";
import { Text, View } from "react-native";
import { Price, Rating } from "./components";

interface Props {
  item: IMeal
}

const ProductCard2: FC<Props> = ({ item }) => {
  const { price, image, rating } = item;

  return (
    <Link href={"/(tabs)"}>
      <View style={{
        position: "relative",
        width: 160,
        height: 140,
        borderRadius: 20,
        overflow: "hidden"
      }}>
        <Image
          source={image}
          style={{
            width: "100%",
            height: "100%"
          }}
          contentFit="cover"
        />
        <Rating value={rating} />
        <Price value={price} />
      </View>
    </Link>
  )
};

export default ProductCard2;