import colors from "@/styles/colors";
import { FC, ReactNode, useEffect, useState } from "react";
import { StyleSheet, Dimensions, ViewStyle } from "react-native";
import Animated, { 
  useSharedValue, 
  withTiming, 
  useAnimatedStyle,
  Easing,
  runOnJS 
} from "react-native-reanimated";

interface Props {
  style?: ViewStyle;
  children: ReactNode[];
  activeIndex: number;
}

const Layout: FC<Props> = ({ style, children, activeIndex }) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
  const translateY = useSharedValue(windowHeight);
  const [visibleIndex, setVisibleIndex] = useState(activeIndex);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const currentTranslateX = useSharedValue(0);
  const newTranslateX = useSharedValue(0);

  useEffect(() => {
    translateY.value = withTiming(0, { 
      duration: 500,
      easing: Easing.out(Easing.cubic) 
    });
  }, []);

  useEffect(() => {
    if (activeIndex !== visibleIndex) {
      setPreviousIndex(visibleIndex);
      
      const direction = activeIndex > visibleIndex ? 1 : -1;
      
      currentTranslateX.value = 0;
      newTranslateX.value = direction * windowWidth;
      setIsAnimating(true);
      setVisibleIndex(activeIndex);
      
      currentTranslateX.value = withTiming(-direction * windowWidth, {
        duration: 300,
        easing: Easing.out(Easing.cubic)
      });
      
      newTranslateX.value = withTiming(0, {
        duration: 300,
        easing: Easing.out(Easing.cubic)
      }, () => {
        runOnJS(setIsAnimating)(false);
        runOnJS(setPreviousIndex)(null);
      });
    }
  }, [activeIndex, visibleIndex, windowWidth]);

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value }
      ],
    };
  });

  const currentScreenAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: currentTranslateX.value }
      ],
    };
  });

  const newScreenAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: newTranslateX.value }
      ],
    };
  });

  const activeChild = children[visibleIndex];
  const previousChild = previousIndex !== null ? children[previousIndex] : null;

  return (
    <Animated.View style={[styles.container, containerAnimatedStyle, style, {  }]}>
      {previousChild && isAnimating && previousIndex !== null && (
        <Animated.View 
          style={[
            styles.screen, 
            styles.exitingScreen, 
            currentScreenAnimatedStyle
          ]}
        >
          {previousChild}
        </Animated.View>
      )}
      
      <Animated.View style={[styles.screen, isAnimating ? newScreenAnimatedStyle : undefined]}>
        {activeChild}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: colors.font2,
    overflow: 'hidden'
  },
  screen: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    paddingHorizontal: 36,
    paddingTop: 36,
  },
  exitingScreen: {
    zIndex: 0,
  }
});

export default Layout;