import { Button, Description, Heading, Input, Paragraph } from "@/shared";
import colors from "@/styles/colors";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onActive: (state: number) => void
}

const Login: FC<Props> = ({ onActive }) => {
  return (
    <View style={{ flex: 1, width: "100%", gap: 30 }}>
      <View style={{ gap: 10 }}>
        <Heading value={"Welcome back!"} />
        <Description value="Sign in to explore the best food spots around you. Fast, easy, and made just for your cravings." />
      </View>
      <View style={{ gap: 14 }}>
        <Input label='Phone number' />
        <View style={{ gap: 14 }}>
          <Input label='Password' />
          <TouchableOpacity style={{ justifyContent: "flex-end", width: "100%", alignItems: "flex-end"}} activeOpacity={0.8} onPress={() => onActive(2)}>
            <Paragraph color={colors.orangeBase} value="Forgot password?" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Button
          label='Login'
        />
      </View>
      <View style={{ flexDirection: "row", gap: 4, justifyContent: "center", alignItems: "center" }}>
        <Paragraph value="Don't have an account?" />
        <TouchableOpacity onPress={() => onActive(1)} activeOpacity={0.7} >
          <Paragraph value="Register" color={colors.orangeBase} />
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default Login;