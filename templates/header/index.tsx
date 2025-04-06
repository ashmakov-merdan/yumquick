import { FC } from "react";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "@/styles/colors";
import { BackIcon } from "@/shared/icons";

const Header: FC<NativeStackHeaderProps | BottomTabHeaderProps> = ({
  options,
  navigation
}) => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      router.replace("/");
    }
  }

  return (
    <View style={[
      {
        backgroundColor: colors.yellowBase,
        paddingTop: insets.top + 10,
        paddingBottom: 30,
        paddingHorizontal: 30
      }
    ]}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        {navigation.canGoBack() && (
          <TouchableOpacity onPress={handleBack} hitSlop={20} style={{ position: "absolute", left: 0, bottom: 0, top: 0, alignItems: "center", justifyContent: "center", width: 28 }}>
            <BackIcon width={14} height={32} />
          </TouchableOpacity>
        )}
        <Text style={{ textAlign: "center", color: colors.font2, fontSize: 28, fontWeight: "bold" }}>{options.title}</Text>
      </View>
    </View>
  )
};

export default Header;