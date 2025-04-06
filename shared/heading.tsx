import colors from "@/styles/colors";
import { FC } from "react";
import { Text } from "react-native";

interface Props {
  value: string
  color?: string
  size?: number
}

const Heading: FC<Props> = ({ value, size=24, color = colors.font }) => {
  return (
    <Text style={{
      fontFamily: "SemiBold",
      fontSize: size,
      fontWeight: "semibold",
      color: color
    }}>{value}</Text>
  )
};

export default Heading;