import { View, Text, TextComponent } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationType } from "../TypeDeclaration/navigationType";
import { loadCustomFont } from "./LoadCustomFont";
import { style } from "../Styles/SplashScreenStyle";
import { QuizNameText } from "../GlobalComponents/TextComponent";

export default function SplashScreen({ navigation }: NavigationType) {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      setIsFontLoaded(await loadCustomFont());

      isFontLoaded
        ? setTimeout(() => {
            navigation.navigate("StartScreen");
          }, 5000)
        : null;
    })();
  }, [isFontLoaded]);
  return (
    <>
      {isFontLoaded ? (
        <View style={style.container}>
          <QuizNameText />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
