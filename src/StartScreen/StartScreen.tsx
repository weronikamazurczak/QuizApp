import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationType } from "../TypeDeclaration/navigationType";
import ImageAnimation from "./ImageAnimation";
import BackgroundAnimation from "./BackgroundAnimation";

export default function StartScreen({ navigation }: NavigationType) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <BackgroundAnimation />
      <ImageAnimation />
      <TouchableOpacity
        disabled={false}
        onPress={() => {
          navigation.navigate("DetailsQuestion");
        }}
        style={{ width: "90%", height: 100 }}
      >
        <View
          style={{
            height: 90,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontFamily: "QuartzoBold-W9lv",
              textAlign: "center",
            }}
          >
            START GAME
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
