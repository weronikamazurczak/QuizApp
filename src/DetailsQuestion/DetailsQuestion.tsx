import { View } from "react-native";
import React from "react";
import { QuizNameText } from "../GlobalComponents/TextComponent";
import { style } from "../Styles/DetailsQuestionStyle";
import { legacy_createStore } from "@reduxjs/toolkit";
import { detailsReducer } from "./detailsReducer";
import { Provider } from "react-redux";
import QuestionsSettings from "./QuestionsSettings";

export default function DetailsQuestion() {
  const store = legacy_createStore(detailsReducer);

  return (
    <Provider store={store}>
      <View style={style.container}>
        <QuizNameText />
        <QuestionsSettings />
      </View>
    </Provider>
  );
}
