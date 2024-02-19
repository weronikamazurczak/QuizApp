import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { NavigationType } from "../TypeDeclaration/navigationType";

export default function SplashScreen({ navigation }: NavigationType) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("StartScreen");
    }, 50000);
  }, []);
  return (
    <View className="flex-1 items-center justify-center bg-red-300">
      <Text className="text-2xl font-bold">SplashScreen</Text>
    </View>
  );
}
