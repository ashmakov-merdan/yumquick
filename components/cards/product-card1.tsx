import colors from "@/styles/colors";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { FC } from "react";
import { Text, View } from "react-native";

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
        <View style={{
          position: "absolute",
          bottom: 12,
          right: 0,
          paddingHorizontal: 4,
          paddingVertical: 2,
          backgroundColor: colors.orangeBase,
          borderTopLeftRadius: 30,
          borderBottomLeftRadius: 30
        }}>
          <Text style={[{
            fontFamily: "Regular",
            fontSize: 12,
            color: colors.font2
          }]}>${price}</Text>
        </View>
      </View>
    </Link>
  )
};

export default ProductCard1;