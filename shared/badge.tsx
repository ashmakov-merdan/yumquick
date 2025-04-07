import colors from "@/styles/colors";
import { FC } from "react";
import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import Animated, { Easing, useAnimatedStyle, withTiming } from "react-native-reanimated";

interface Props {
  value: string
  color?: string
  isActive: boolean
  wrapperStyle?: StyleProp<ViewStyle>
}

const Badge: FC<Props> = ({ value, isActive = false, wrapperStyle, color = colors.orange }) => {
  const badgeStyles = useAnimatedStyle(() => ({
    backgroundColor: withTiming(isActive ? colors.orangeBase : color, {
      duration: 100,
      easing: Easing.ease
    })
  }));

  const textStyle = useAnimatedStyle(() => ({
    color: withTiming(isActive ? colors.font2 : colors.orangeBase, {
      duration: 100,
      easing: Easing.ease
    })
  }));

  return (
    <TouchableOpacity activeOpacity={0.9} style={wrapperStyle}>
      <Animated.View style={[badgeStyles, { width: "100%", paddingHorizontal: 4, paddingVertical: 8, borderRadius: 40 }]}>
        <Animated.Text style={[textStyle, {
          fontFamily: "Medium",
          fontSize: 16,
          textAlign: "center"
        }]}>{value}</Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  )
};

export default Badge;