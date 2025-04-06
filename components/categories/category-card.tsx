import { Paragraph } from "@/shared";
import colors from "@/styles/colors";
import { Image } from "expo-image";
import { FC } from "react";
import { View } from "react-native";

const CategoryCard: FC<ICategory> = ({ name, image }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", gap: 6 }}>
      <View style={{ padding: 10, width: 50, height: 60, borderRadius: 30, backgroundColor: colors.yellow }}>
        <Image
          source={image}
          style={{
            width: "100%",
            height: "100%"
          }}
          contentFit="contain"
        />
      </View>
      <Paragraph fontFamily="Regular" value={name} />
    </View>
  )
};

export default CategoryCard;