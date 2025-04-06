import { Header } from "@/templates";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useCallback, useMemo } from "react";
import useFont from "@/hooks/use-fonts";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 100,
  fade: true
});

export default function RootLayout() {
  const { loaded: fontLoaded } = useFont();

  const isAppReady = useMemo(() => fontLoaded, [fontLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      try {
        await SplashScreen.hideAsync();
      } catch (error) {
        console.warn("Error hiding splash screen: ", error);
      }
    }
  }, [isAppReady]);

  if (!isAppReady) return null;

  return (
    <GestureHandlerRootView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          header: (props) => <Header {...props} />,
          headerShown: false
        }}
      >
        <Stack.Screen 
          name={"index"}
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  )
}
