import colors from "@/styles/colors";
import { FC } from "react";
import { Text } from "react-native";

interface Props {
  value: string
  color?: string
}

const Description: FC<Props> = ({ value, color = colors.font }) => {
  return (
    <Text style={{
      fontFamily: "Light",
      fontSize: 14,
      fontWeight: "light",
      color: color
    }}>{value}</Text>
  )
};

export default Description;