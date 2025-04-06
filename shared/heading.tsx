import { FC } from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
  value: string
}

const Heading: FC<Props> = ({ value }) => {
  return (
    <Text style={{
      fontFamily: "SemiBold",
      fontSize: 24,
      fontWeight: "semibold"
    }}>{value}</Text>
  )
};

export default Heading;