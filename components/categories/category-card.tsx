import { Paragraph } from "@/shared";
import colors from "@/styles/colors";
import { Image } from "expo-image";
import { FC, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, withDelay } from "react-native-reanimated";

interface Props {
  delay: number
  category: ICategory
}

const CategoryCard: FC<Props> = ({ category, delay = 0 }) => {
  const { name, image } = category;
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);

  useEffect(() => {
    opacity.value = withDelay(delay, withTiming(1, {
      duration: 500,
      easing: Easing.out(Easing.cubic)
    }));

    translateY.value = withDelay(delay, withTiming(0, {
      duration: 500,
      easing: Easing.out(Easing.cubic)
    }));
  }, [delay]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }]
    };
  });

  return (
    <Animated.View style={[animatedStyle]}>
      <TouchableOpacity activeOpacity={0.9} style={[styles.wrapper]}>
        <View style={{ padding: 10, width: 50, height: 60, borderRadius: 30, backgroundColor: colors.yellow }}>
          <Image
            source={image}
            style={{
              width: "100%",
              height: "100%"
            }}
            contentFit="contain"
          />
        </View>
        <Paragraph fontFamily="Regular" value={name} />
      </TouchableOpacity>
    </Animated.View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8
  }
})

export default CategoryCard;