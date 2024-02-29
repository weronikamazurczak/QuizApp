import React from "react";
import LottieView from "lottie-react-native";

export default function LogoAnimation() {
  return (
    <LottieView
      style={{ width: "100%", height: "100%", marginBottom: "100%" }}
      source={require("../../assets/animations/quiz.json")}
      autoPlay
    ></LottieView>
  );
}