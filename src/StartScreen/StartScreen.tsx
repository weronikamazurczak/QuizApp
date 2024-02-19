import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "@gluestack-ui/themed";
import { style } from "../Styles/StartScreen";
import { NavigationType } from "../TypeDeclaration/navigationType";

export default function StartScreen({ navigation }: NavigationType) {
  return (
    <View style={style.container}>
      <Image
        style={style.image}
        source={require("../../assets/images/logo.jpg")}
        alt="Odyssey"
      />
      <TouchableOpacity
        disabled={false}
        onPress={() => {
          navigation.navigate("DetailsQuestion");
        }}
        style={style.btnStart}
      >
        <View>
          <Text style={{ fontSize: 80, fontFamily: "KeaniaOne-Regular" }}>
            START
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
