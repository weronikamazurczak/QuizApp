import * as Font from "expo-font";

export const loadCustomFont = async (): Promise<boolean> => {
  try {
    await Font.loadAsync({
      "KeaniaOne-Regular": require("../../assets/font/KeaniaOne-Regular.ttf"),
      "QuartzoBold-W9lv": require("../../assets/font/QuartzoBold-W9lv.ttf"),
      "libre-bodoni.regular": require("../../assets/font/libre-bodoni.regular.ttf"),
      "SauceTomato": require("../../assets/font/SauceTomato.otf"),
      "Georgia-PersonalUse": require("../../assets/font/Georgia-PersonalUse.otf"),
    });
    return true;
  } catch (exception) {
    return false;
  }
};
