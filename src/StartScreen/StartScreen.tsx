import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationType } from "../TypeDeclaration/navigationType";
import ImageAnimation from "./ImageAnimation";
import BackgroundAnimation from "./BackgroundAnimation";
import * as Animatable from "react-native-animatable";
import { style } from "../Styles/StartScreen";

export default function StartScreen({ navigation }: NavigationType) {
  return (
    <View style={style.container}>
      <BackgroundAnimation />
      <ImageAnimation />
      <TouchableOpacity
        disabled={false}
        onPress={() => {
          navigation.navigate("DetailsQuestion");
        }}
        style={style.touchableContainer}
      >
        <Animatable.View
          animation="tada"
          iterationCount="infinite"
          direction="alternate"
          style={style.viewContainer}
        >
          <Text style={style.textStyle}>START GAME</Text>
        </Animatable.View>
      </TouchableOpacity>
    </View>
  );
}
