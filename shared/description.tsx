import { FC } from "react";
import { Text } from "react-native";

interface Props {
  value: string
}

const Description: FC<Props> = ({ value }) => {
  return (
    <Text style={{
      fontFamily: "Light",
      fontSize: 14,
      fontWeight: "light"
    }}>{value}</Text>
  )
};

export default Description;