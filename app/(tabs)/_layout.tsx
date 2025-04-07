import { CheckoutIcon, ContactIcon, HeartIcon, HomeIcon } from "@/shared/icons";
import { BottomTab, Header } from "@/templates";
import { Tabs } from "expo-router";
import { FC } from "react";

const TabLayout: FC = () => {
  return (
    <Tabs
      tabBar={(props) => <BottomTab {...props} />}
      screenOptions={{
        header: (props) => <Header {...props} />
      }}
    >
      <Tabs.Screen
        name={"login"}
        options={{
          headerShown: true
        }}
      />
      <Tabs.Screen
        name={"index"}
        options={{
          headerShown: true,
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={24} />
        }}
      />
      <Tabs.Screen
        name={"favorites"}
        options={{
          headerShown: true,
          title: "My favorites",
          tabBarIcon: ({ color }) => <HeartIcon color={color} size={24} />
        }}
      />
      <Tabs.Screen
        name={"orders"}
        options={{
          headerShown: true,
          title: "Orders",
          tabBarIcon: ({ color }) => <CheckoutIcon color={color} size={24} />
        }}
      />
      <Tabs.Screen
        name={"contact"}
        options={{
          headerShown: true,
          title: "Contact Us",
          tabBarIcon: ({ color }) => <ContactIcon color={color} size={24} />
        }}
      />
    </Tabs>
  )
};

export default TabLayout;