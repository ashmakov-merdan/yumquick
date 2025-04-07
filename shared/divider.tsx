import colors from "@/styles/colors";
import { FC } from "react";
import { View } from "react-native";

interface Props {
  color?: string
}

const Divider: FC<Props> = ({ color = colors.orangeBase }) => {
  return <View style={{ width: "100%", height: 1, backgroundColor: `${color}30` }} />
};

export default Divider;