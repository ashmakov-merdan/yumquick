import { CheckoutIcon, ContactIcon, HeartIcon, HomeIcon } from "@/shared/icons";
import colors from "@/styles/colors";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const icons = (color: string) => ({
  index: <HomeIcon color={color} size={28} />,
  favorites: <HeartIcon color={color} size={28} />,
  checkout: <CheckoutIcon color={color} size={28} />,
  contact: <ContactIcon color={color} size={28} />
})

const BottomTab: FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

  const renderButton = state.routes.map((route, index) => {
    const { options } = descriptors[route.key];
    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: "tabPress",
        target: route.key,
        canPreventDefault: true
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name, route.params);
      };
    }

    const onLongPress = () => {
      navigation.emit({
        type: "tabLongPress",
        target: route.key
      })
    };

    if(route.key.startsWith("login")){
      return null
    }

    return (
      <View key={route.key}>
        <TouchableOpacity
          activeOpacity={0.7}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarButtonTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          hitSlop={24}
          style={{ alignItems: "center" }}
        >
          {icons(isFocused ? colors.yellowBase : colors.font2)[route.name as keyof typeof icons]}
        </TouchableOpacity>
      </View>
    )
  })

  return (
    <View style={[styles.bar, { paddingBottom: insets.bottom }]}>{renderButton}</View>
  )
};

const styles = StyleSheet.create({
  bar: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.orangeBase,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: 0
  }
})

export default BottomTab;