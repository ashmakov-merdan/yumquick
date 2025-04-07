import { Categories } from "@/components";
import { Cart, Notifications, Profile } from "@/components/home";
import Meals from "@/components/meals";
import meals from "@/data/meals";
import { Description, Heading, Paragraph } from "@/shared";
import Divider from "@/shared/divider";
import { BackIcon } from "@/shared/icons";
import colors from "@/styles/colors";
import { CommonLayout } from "@/templates";
import greeting from "@/utils/greeting";
import { Link, Tabs } from "expo-router";
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
                    <Cart />
                    <Notifications />
                    <Profile />
                  </View>
                </View>
              </View>
            )
          }
        }}
      />
      <View style={{ flex: 1, backgroundColor: colors.yellowBase }}>
        <CommonLayout>
          <View style={{ gap: 14 }}>
            <Categories />
            <View style={{ paddingHorizontal: 36 }}>
              <Divider />
            </View>
            <View style={{ gap: 14 }}>
              <View style={{ paddingHorizontal: 36, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Heading value="Best Seller" />
                <Link href={"/(tabs)"} asChild>
                  <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 4 }}>
                    <Paragraph value="View all" color={colors.orangeBase} fontFamily="Regular" />
                    <View style={{ transform: [{ rotate: "180deg" }] }}>
                      <BackIcon />
                    </View>
                  </TouchableOpacity>
                </Link>
              </View>
              <Meals data={meals} variant={1} />
            </View>
            <View style={{ paddingHorizontal: 36 }}>
              <Divider />
            </View>
            <View style={{ gap: 14 }}>
              <View style={{ paddingHorizontal: 36, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Heading value={"Recommended"} />
              </View>
              <Meals data={meals} variant={2} />
            </View>
          </View>
        </CommonLayout>
      </View>
    </Fragment>
  )
};

export default HomeScreen;