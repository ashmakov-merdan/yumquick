import colors from "@/styles/colors";
import { FC } from "react";
import { Text } from "react-native";

interface Props {
  value: string
  color?: string
  size?: number
  fontFamily?: string
}

const Paragraph: FC<Props> = ({ value, fontFamily="Light", size=14, color=colors.font }) => {
  return <Text style={{
    fontFamily: fontFamily,
    fontSize: size,
    color: color
  }}>{value}</Text>
};

export default Paragraph;