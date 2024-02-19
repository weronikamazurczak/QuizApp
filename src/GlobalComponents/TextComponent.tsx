import { ReactElement } from "react";
import { style } from "../Styles/QuizNameStyle";
import { Text } from "react-native";

export const QuizNameText = (): ReactElement<any, any> => {
  return <Text style={style.QuizName}>QuizOdyssey</Text>;
};
