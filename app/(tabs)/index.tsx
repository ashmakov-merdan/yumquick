import { Description, Heading } from "@/shared";
import { BellIcon, CartIcon, PersonIcon } from "@/shared/icons";
import colors from "@/styles/colors";
import { CommonLayout } from "@/templates";
import greeting from "@/utils/greeting";
import { Tabs } from "expo-router";
import { FC, Fragment } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen: FC = () => {
  const { title, description } = greeting();
  const insets = useSafeAreaInsets();

  return (
    <Fragment>
      <Tabs.Screen
        options={{
          headerShown: true,
          header: () => {
            return (
              <View style={[{
                backgroundColor: colors.yellowBase,
                paddingTop: insets.top + 10,
                paddingBottom: 24,
                paddingHorizontal: 30
              }]}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <View style={{ gap: 4 }}>
                    <Heading size={30} value={title} color={colors.font2} />
                    <Description value={description} color={colors.orangeBase} />
                  </View>
                  <View style={{ flexDirection: "row", gap: 8 }}>
                    <TouchableOpacity activeOpacity={0.7} style={{
                      width: 28,
                      height: 28,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: colors.font2,
                      borderRadius: 10
                    }}>
                      <CartIcon />
                    </TouchableOpacity>
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
                    <TouchableOpacity activeOpacity={0.7} style={{
                      width: 28,
                      height: 28,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: colors.font2,
                      borderRadius: 10
                    }}>
                      <PersonIcon />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          }
        }}
      />
      <View style={{ flex: 1, backgroundColor: colors.yellowBase }}>
        <CommonLayout>
          <View>
            <Text>Home Screen</Text>
          </View>
        </CommonLayout>
      </View>
    </Fragment>
  )
};

export default HomeScreen;