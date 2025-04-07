import colors from "@/styles/colors";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { FC } from "react";
import { Text, View } from "react-native";
import { Price } from "./components";

interface Props {
  item: IMeal
}

const ProductCard1: FC<Props> = ({ item }) => {
  const { image, price } = item;

  return (
    <Link href={"/(tabs)"}>
      <View style={{ position: "relative", width: 76, height: 100, borderRadius: 20, overflow: "hidden" }}>
        <Image
          source={image}
          style={{
            width: "100%",
            height: "100%"
          }}
          contentFit="cover"
        />
        <Price value={price} />
      </View>
    </Link>
  )
};

export default ProductCard1;