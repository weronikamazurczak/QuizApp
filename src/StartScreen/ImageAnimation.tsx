import React from "react";
import LottieView from "lottie-react-native";

export default function ImageAnimation() {
  return (
    <LottieView
      style={{ width: "80%", height: "80%" }}
      source={require("../../assets/animations/animal.json")}
      autoPlay
    />
  );
}
