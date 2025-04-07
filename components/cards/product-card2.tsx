import colors from "@/styles/colors";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { FC } from "react";
import { Text, View } from "react-native";

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
        <View style={{
          position: "absolute",
          top: 10,
          left: 14,
          paddingVertical: 4,
          paddingHorizontal: 6,
          borderRadius: 100,
          backgroundColor: colors.font2
        }}>
          <Text style={{
            fontSize: 12,
            fontFamily: "Regular",
            color: colors.font
          }}>{rating}</Text>
        </View>
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

export default ProductCard2;