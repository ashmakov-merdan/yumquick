import { useFonts } from "expo-font";

const useFont = () => {
  const [loaded] = useFonts({
    Regular: require("@/assets/fonts/Regular.ttf"),
    Medium: require("@/assets/fonts/Medium.ttf"),
    Bold: require("@/assets/fonts/Bold.ttf"),
    SemiBold: require("@/assets/fonts/SemiBold.ttf"),
    Light: require("@/assets/fonts/Light.ttf"),
    Thin: require("@/assets/fonts/Thin.ttf"),
    ExtraLight: require("@/assets/fonts/ExtraLight.ttf"),
    ExtraBold: require("@/assets/fonts/ExtraBold.ttf"),
  });

  return { loaded };
};

export default useFont;