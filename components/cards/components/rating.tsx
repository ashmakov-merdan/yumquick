import { StarIcon } from "@/shared/icons";
import colors from "@/styles/colors";
import { FC } from "react";
import { Text, View } from "react-native";

interface Props {
  value: number
}

const Rating: FC<Props> = ({ value }) => {
  return (
    <View style={{
      position: "absolute",
      top: 10,
      left: 14,
      paddingVertical: 2,
      paddingHorizontal: 6,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      borderRadius: 100,
      backgroundColor: colors.font2
    }}>
      <View>
        <Text style={{
          fontSize: 12,
          color: colors.font
        }}>{value}</Text>
      </View>
      <StarIcon size={12} />
    </View>
  )
};

export default Rating;