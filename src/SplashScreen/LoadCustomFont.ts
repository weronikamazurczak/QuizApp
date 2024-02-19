import * as Font from "expo-font";

export const loadCustomFont = async (): Promise<boolean> => {
  try {
    await Font.loadAsync({
      "KeaniaOne-Regular": require("../../assets/font/KeaniaOne-Regular.ttf"),
    });
    return true;
  } catch (exception) {
    return false;
  }
};
