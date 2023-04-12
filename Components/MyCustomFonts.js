import * as Font from "expo-font";

const loadFonts = () => {
  return Font.loadAsync({
    Prompt: require("../assets/fonts/Prompt.ttf"),
    SignikaNegative: require("../assets/fonts/SignikaNegative.ttf"),
    PatrickHand: require("../assets/fonts/PatrickHand.ttf"),
    Sriracha: require("../assets/fonts/Sriracha.ttf"),
  });
};
export default loadFonts;
