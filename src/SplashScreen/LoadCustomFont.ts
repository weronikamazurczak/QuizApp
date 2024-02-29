import * as Font from "expo-font";

export const loadCustomFont = async (): Promise<boolean> => {
  try {
    await Font.loadAsync({
      "KeaniaOne-Regular": require("../../assets/font/KeaniaOne-Regular.ttf"),
      "QuartzoBold-W9lv": require("../../assets/font/QuartzoBold-W9lv.ttf"),
      "libre-bodoni.regular": require("../../assets/font/libre-bodoni.regular.ttf"),
    });
    return true;
  } catch (exception) {
    return false;
  }
};
