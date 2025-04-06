import colors from "@/styles/colors";
import { FC, forwardRef, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps {
  label: string
  textColor?: "orange" | "yellow"
  backgroundColor?: "orange" | "yellow" | "light"
  onPress?: () => void
}

const Button: FC<ButtonProps> = forwardRef<TouchableOpacityProps, ButtonProps>(({ 
  label, 
  backgroundColor = "orange", 
  textColor = "yellow",
  onPress
}, ref) => {
  const color = useMemo(() => {
    switch (backgroundColor) {
      case "yellow":
        return {
          background: colors.yellowBase,
          text: colors.orangeBase
        }
      case "light":
        return {
          background: colors.yellow,
          text: colors.orangeBase
        }
      default:
        return {
          background: colors.orangeBase,
          text: colors.font2
        }
    }
  }, [backgroundColor, textColor]);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={[{
      maxWidth: 240,
      width: "100%",
      paddingVertical: 14,
      backgroundColor: color.background,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30
    }]}>
      <Text style={[styles.text, { color: color.text }]}>{label}</Text>
    </TouchableOpacity>
  )
});

const styles = StyleSheet.create({
  text: {
    fontFamily: "Medium",
    fontSize: 20,
    fontWeight: "medium"
  }
})

export default Button;