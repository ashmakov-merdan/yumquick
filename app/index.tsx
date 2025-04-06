import { FC, Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import colors from "@/styles/colors";
import { Image } from "expo-image";
import { Button } from "@/shared";
import { Link } from "expo-router";

const AuthScreen: FC = () => {
  return (
    <Fragment>
      <StatusBar style={"dark"} />
      <View style={[styles.container]}>
        <View style={[styles.wrapper]}>
          <View style={[styles.greeting]}>
            <Image
              source={require("@/assets/images/yumquick-logo.png")}
              style={{
                width: 200,
                height: 200,
              }}
              contentFit="contain"
            />
            <Text style={[styles.text]}>Discover delicious meals near you, fast and easy. Your next bite is just a tap away!</Text>
          </View>
          <View style={[styles.buttonGroup]}>
            <Link href={"/(tabs)/login"} asChild>
              <Button
                label="Sign in"
                backgroundColor="yellow"
              />
            </Link>
          </View>
        </View>
      </View>
    </Fragment>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orangeBase
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  greeting: {
    justifyContent: "center",
    alignItems: "center",
    gap: 30
  },
  text: {
    width: 295,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "medium",
    color: colors.font2
  },
  buttonGroup: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  }
})

export default AuthScreen;