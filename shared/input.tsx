import colors from "@/styles/colors";
import { FC, forwardRef } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps {
  label: string
}

const Input = forwardRef<TextInputProps, InputProps>(({
  label,
  ...args
}, ref) => {
  return (
    <View style={{ gap: 6 }}>
      <Text style={{
        fontFamily: "Medium",
        fontSize: 16,
        fontWeight: "medium"
      }}>{label}</Text>
      <View style={{
        padding: 14,
        backgroundColor: colors.yellow,
        borderRadius: 14
      }}>
        <TextInput {...args} />
      </View>
    </View>
  )
});

export default Input;