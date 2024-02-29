import { View, Text } from "react-native";
import React, { useEffect } from "react";

import { config } from "@gluestack-ui/config";
import {
  GluestackUIProvider,
  ButtonText,
  Button,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  ScrollView,
} from "@gluestack-ui/themed";
import { useSelector, useDispatch } from "react-redux";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { style } from "../Styles/QuestionsSettingsStyle";
import * as Animatable from "react-native-animatable";

interface State {
  informationText: string;
  screenNumber: number;
  numberOfQuestion: number;
  multipleChoiceColor: string;
  trueOrFalseChoiceColor: string;
}

export default function QuestionsSettings() {
  const screenNumber = useSelector((state: State) => state.screenNumber);
  const informationText = useSelector((state: State) => state.informationText);
  const numberOfQuestion = useSelector(
    (state: State) => state.numberOfQuestion
  );
  const trueOrFalseChoiceColor = useSelector(
    (state: State) => state.trueOrFalseChoiceColor
  );
  const multipleChoiceColor = useSelector(
    (state: State) => state.multipleChoiceColor
  );

  const dispatch = useDispatch();

  useEffect(() => {}, [screenNumber]);

  return (
    <View style={style.container}>
      <LinearGradient
        colors={["#FF8E3A", "#ED509E", "#9C73F8"]}
        style={style.selectArea}
      >
        <GluestackUIProvider config={config}>
          <Text style={style.setupQuestion}>{informationText}</Text>

          {screenNumber === 0 ? (
            <>
              <Slider
                style={style.slider}
                value={numberOfQuestion}
                minimumValue={0}
                maximumValue={15}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={(newNumberOfQuestion: any) => {
                  console.log(newNumberOfQuestion);
                  dispatch({
                    type: "changeValueOnSlider",
                    newNumberOfQuestion,
                  });
                }}
                step={5}
              />
              <Text style={style.valueText}>{numberOfQuestion}</Text>
            </>
          ) : screenNumber === 1 ? (
            <>
              <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => {
                  dispatch({
                    type: "chooseTypeOfQuestion",
                    newTypeOfQuestion: "multiple",
                  });
                }}
                bgColor={multipleChoiceColor}
              >
                <ButtonText>Multiple Choice </ButtonText>
              </Button>
              <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => {
                  dispatch({
                    type: "chooseTypeOfQuestion",
                    newTypeOfQuestion: "boolean",
                  });
                }}
                bgColor={trueOrFalseChoiceColor}
              >
                <ButtonText>True or False </ButtonText>
              </Button>
            </>
          ) : screenNumber === 2 ? (
            <>
              <Select
                onValueChange={(categoryOfQuestion: string) => {
                  dispatch({
                    type: "selectQuestionCategory",
                    newCategoryOfQuestion: Number(categoryOfQuestion),
                  });
                }}
              >
                <SelectTrigger variant="outline" size="md">
                  <SelectInput placeholder="Select option" />
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <ScrollView>
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>

                      <SelectItem label="Any Category" value="9" />
                      <SelectItem label="Entertainment: Books" value="10" />
                      <SelectItem label="Entertainment: Film" value="11" />
                      <SelectItem label="Entertainment: Music" value="12" />
                      <SelectItem
                        label="Entertainment: Musical & Theatres"
                        value="13"
                      />
                      <SelectItem
                        label="Entertainment: Television"
                        value="14"
                      />
                      <SelectItem
                        label="Entertainment: Video Games"
                        value="15"
                      />
                      <SelectItem
                        label="Entertainment: Board Games"
                        value="16"
                      />
                      <SelectItem label="Science & Nature" value="17" />
                      <SelectItem label="Science: Computers" value="18" />
                      <SelectItem label="Science: Mathematics" value="19" />
                      <SelectItem label="Mythology" value="20" />
                      <SelectItem label="Sports" value="21" />
                      <SelectItem label="Geography" value="22" />
                      <SelectItem label="History" value="23" />
                      <SelectItem label="Politics" value="24" />
                      <SelectItem label="Art" value="25" />
                      <SelectItem label="Celebrities" value="26" />
                      <SelectItem label="Animals" value="27" />
                      <SelectItem label="Vehicles" value="28" />
                      <SelectItem label="Entertainment: Comics" value="29" />
                      <SelectItem label="Science: Gadgets" value="30" />
                      <SelectItem
                        label="Entertainment: Cartoon & Animations"
                        value="32"
                      />
                    </SelectContent>
                  </ScrollView>
                </SelectPortal>
              </Select>
            </>
          ) : screenNumber === 3 ? (
            <>
              <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
              >
                <ButtonText>Easy</ButtonText>
              </Button>
              <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
              >
                <ButtonText>Medium</ButtonText>
              </Button>
              <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
              >
                <ButtonText>Hard</ButtonText>
              </Button>
            </>
          ) : (
            <></>
          )}
          <Animatable.View
            animation="pulse"
            iterationCount="infinite"
            direction="alternate"
            style={{ marginBottom: "10%" }}
          >
            <Button
              style={style.btnStyle}
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              onPress={() => {
                switch (screenNumber) {
                  case 0:
                    dispatch({
                      type: "changeContentOfChoosenNumberOfQuestion",
                    });
                    break;
                  case 1:
                    dispatch({
                      type: "changeContentOfChoosenTypeOfQuestion",
                    });
                    break;
                  case 2:
                    dispatch({ type: "changeContentOfSelectCategory" });
                    break;
                }
              }}
            >
              <ButtonText style={style.btnText}>Next </ButtonText>
            </Button>
          </Animatable.View>
        </GluestackUIProvider>
      </LinearGradient>
    </View>
  );
}
