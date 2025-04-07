import colors from "@/styles/colors";
import { FC } from "react";
import { Text } from "react-native";

interface Props {
  value: string
  color?: string
  size?: number
  fontFamily?: string
}

const Description: FC<Props> = ({ value, color = colors.font, size=14, fontFamily="Light" }) => {
  return (
    <Text style={{
      fontFamily: fontFamily,
      fontSize: size,
      fontWeight: "light",
      color: color
    }}>{value}</Text>
  )
};

export default Description;