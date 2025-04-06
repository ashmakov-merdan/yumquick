import { BellIcon } from "@/shared/icons";
import colors from "@/styles/colors";
import { FC } from "react";
import { TouchableOpacity } from "react-native";

const Notifications: FC = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={{
      width: 28,
      height: 28,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.font2,
      borderRadius: 10
    }}>
      <BellIcon />
    </TouchableOpacity>
  )
};

export default Notifications;