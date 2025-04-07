import colors from "@/styles/colors";
import { FC } from "react";
import { Text, View } from "react-native";

interface PriceProps {
  value: number
}

const Price: FC<PriceProps> = ({ value }) => {
  return (
    <View style={{
      position: "absolute",
      bottom: 12,
      right: 0,
      paddingHorizontal: 8,
      paddingVertical: 4,
      backgroundColor: colors.orangeBase,
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30
    }}>
      <Text style={[{
        fontFamily: "Regular",
        fontSize: 12,
        color: colors.font2
      }]}>${value}</Text>
    </View>
  )
};

export default Price;