import { Button, Description, Heading, Input, Paragraph } from '@/shared';
import colors from '@/styles/colors';
import { FC } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

interface Props {
  onActive: (state: number) => void
}

const Register: FC<Props> = ({ onActive }) => {
  return (
    <View style={{ flex: 1, width: "100%", gap: 36 }}>
      <View style={{ gap: 10 }}>
        <Heading value={"Create an account"} />
        <Description value={"Register now to find amazing food, fast and easy!"} />
      </View>
      <View style={{ gap: 14 }}>
        <Input label='Full name' />
        <Input label='Password' />
        <Input label='Email' />
        <Input label='Mobile number' />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Button
          label='Register'
        />
      </View>
      <View style={{ flexDirection: "row", gap: 4, justifyContent: "center", alignItems: "center" }}>
        <Paragraph value='Already have an account?' />
        <TouchableOpacity onPress={() => onActive(0)} activeOpacity={0.7} >
          <Paragraph value={"Login"} color={colors.orangeBase} />
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: "semibold",
  },
  desc: {
    fontSize: 14,
    fontWeight: "light"
  }
})

export default Register