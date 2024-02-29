import React from "react";
import LottieView from "lottie-react-native";

export default function BackgroundAnimation() {
  return (
    <LottieView
    style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
    source={require("../../assets/animations/gradientbackground.json")}
    autoPlay
    resizeMode="cover"
  />
  );
}
