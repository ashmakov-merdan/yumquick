import colors from "@/styles/colors";
import { FC } from "react";
import { Text } from "react-native";

interface Props {
  value: string
  color?: string
  size?: number
}

const Paragraph: FC<Props> = ({ value, size=14, color=colors.font }) => {
  return <Text style={{
    fontFamily: "Light",
    fontSize: size,
    fontWeight: "light",
    color: color
  }}>{value}</Text>
};

export default Paragraph;