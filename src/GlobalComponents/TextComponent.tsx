import { ReactElement } from "react";
import { style } from "../Styles/QuizNameStyle";
import { Text, View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";

export const QuizNameText = (): ReactElement<any, any> => {
  return (
    <>
      <MaskedView
        style={{ flex: 1, flexDirection: "row" }}
        maskElement={
          <View
            style={{
              backgroundColor: "transparent",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20%",
            }}
          >
            <Text
              style={{
                fontSize: 60,
                color: "black",
                fontWeight: "bold",
                fontFamily: "KeaniaOne-Regular",
              }}
            >
              MindQuest
            </Text>
          </View>
        }
      >
        <View style={{ flex: 1, height: "100%", backgroundColor: "#FF8E3A" }} />
        <View style={{ flex: 1, height: "100%", backgroundColor: "#ED509E" }} />
        <View style={{ flex: 1, height: "100%", backgroundColor: "#9C73F8" }} />
      </MaskedView>
    </>
  );
};
