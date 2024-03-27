import { ReactElement, useEffect } from "react";
import { Text, View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { useSelector } from "react-redux";
import { style } from "../Styles/TextComponentStyle";

interface State {
  headerName: string;
  screenNumber: number;
  questionScreenNumber: number;
}

export const QuizNameText = (): ReactElement<any, any> => {
  const headerName = useSelector((state: State) => state.headerName);

  const screenNumber = useSelector((state: State) => state.screenNumber);

  const questionScreenNumber = useSelector(
    (state: State) => state.questionScreenNumber
  );

  useEffect(() => {}, [headerName, questionScreenNumber]);
  return (
    <>
      <MaskedView
        style={style.container}
        maskElement={
          <View style={style.backgroundColor}>
            <Text style={style.headerText}>
              {screenNumber < 4
                ? headerName
                : headerName + " " + questionScreenNumber} 
            </Text>
          </View>
        }
      >
        <View style={style.colorView1} />
        <View style={style.colorView2} />
        <View style={style.colorView3} />
      </MaskedView>
    </>
  );
};
