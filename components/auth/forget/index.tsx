import { Button, Description, Heading, Input } from '@/shared';
import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

interface Props {
  onActive: (state: number) => void
}

const Forget: FC<Props> = ({ onActive }) => {
  return (
    <View style={{ flex: 1, gap: 36, width: "100%" }}>
      <View style={{ gap: 10 }}>
        <Heading value={"Reset your password"} />
        <Description value='Sign in to explore the best food spots around you. Fast, easy, and made just for your cravings.' />
      </View>
      <View style={{ gap: 14 }}>
        <Input label='Password' />
        <Input label='Confirm password' />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", gap: 8 }}>
        <Button
          label='Create new password'
        />
        <Button
          label='Go back'
          backgroundColor="light"
          onPress={() => onActive(0)}
        />
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

export default Forget;