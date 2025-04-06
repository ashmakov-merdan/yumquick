import colors from "@/styles/colors";
import { FC, ReactNode } from "react"
import { StyleSheet, View } from "react-native"

interface Props {
  children: ReactNode
}

const CommonLayout: FC<Props> = ({ children }) => {
  return (
    <View style={[styles.container]}>{children}</View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.font2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 36,
    paddingTop: 36
  }
})

export default CommonLayout;