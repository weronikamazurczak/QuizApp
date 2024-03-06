import { View, Text, TouchableOpacity } from "react-native";
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
  typeOfQuestion: string;
  multipleChoiceColor: string;
  trueOrFalseChoiceColor: string;
  categoryOfQuestion: number;
  levelOfQuestion: string;
  easyLevelOfQuestionColor: string;
  mediumLevelOfQuestionColor: string;
  hardLevelOfQuestionColor: string;
  headerName: string;
  arrayQuestions: Array<{
    category: string;
    difficulty: string;
    incorrect_answers: Array<string>;
    question: string;
    type: string;
  }>;
  arrayAnswers: Array<string>;
  correctAnswer: string;
  questionScreenNumber: number;
  score: number;
}

export default function QuestionsSettings() {
  const screenNumber = useSelector((state: State) => state.screenNumber);

  const informationText = useSelector((state: State) => state.informationText);

  const numberOfQuestion = useSelector(
    (state: State) => state.numberOfQuestion
  );

  const typeOfQuestion = useSelector((state: State) => state.typeOfQuestion);

  const trueOrFalseChoiceColor = useSelector(
    (state: State) => state.trueOrFalseChoiceColor
  );
  const multipleChoiceColor = useSelector(
    (state: State) => state.multipleChoiceColor
  );

  const categoryOfQuestion = useSelector(
    (state: State) => state.categoryOfQuestion
  );

  const levelOfQuestion = useSelector((state: State) => state.levelOfQuestion);

  const easyLevelOfQuestionColor = useSelector(
    (state: State) => state.easyLevelOfQuestionColor
  );

  const mediumLevelOfQuestionColor = useSelector(
    (state: State) => state.mediumLevelOfQuestionColor
  );

  const hardLevelOfQuestionColor = useSelector(
    (state: State) => state.hardLevelOfQuestionColor
  );

  const headerName = useSelector((state: State) => state.headerName);

  let arrayQuestions = useSelector((state: State) => state.arrayQuestions);

  const arrayAnswers = useSelector((state: State) => state.arrayAnswers);

  const correctAnswer = useSelector((state: State) => state.correctAnswer);

  const questionScreenNumber = useSelector(
    (state: State) => state.questionScreenNumber
  );

  const score = useSelector((state: State) => state.score);
  console.log("to ten wyzszy score xd ", score);

  const dispatch = useDispatch();

  const textStyle = screenNumber < 4 ? style.setupQuestion : style.question;

  arrayAnswers.push(correctAnswer);

  useEffect(() => {}, [screenNumber, arrayQuestions]);

  return (
    <View style={style.container}>
      <LinearGradient
        colors={["#FF8E3A", "#ED509E", "#9C73F8"]}
        style={style.selectArea}
      >
        <GluestackUIProvider config={config}>
          <Text style={textStyle}>{informationText}</Text>

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
                <SelectTrigger
                  variant="outline"
                  size="md"
                  style={style.SelectTrigger}
                >
                  <SelectInput
                    placeholder="Select option"
                    style={style.SelectInput}
                  />
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
                onPress={() => {
                  dispatch({
                    type: "chooseLevelOfQuestion",
                    newLevelOfQuestion: "easy",
                  });
                }}
                bgColor={easyLevelOfQuestionColor}
              >
                <ButtonText>Easy</ButtonText>
              </Button>
              <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => {
                  dispatch({
                    type: "chooseLevelOfQuestion",
                    newLevelOfQuestion: "medium",
                  });
                }}
                bgColor={mediumLevelOfQuestionColor}
              >
                <ButtonText>Medium</ButtonText>
              </Button>
              <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => {
                  dispatch({
                    type: "chooseLevelOfQuestion",
                    newLevelOfQuestion: "hard",
                  });
                }}
                bgColor={hardLevelOfQuestionColor}
              >
                <ButtonText>Hard</ButtonText>
              </Button>
            </>
          ) : (
            <></>
          )}
          {screenNumber < 4 ? (
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
                onPress={async () => {
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
                    case 3:
                      await getQuestions(
                        numberOfQuestion,
                        categoryOfQuestion,
                        levelOfQuestion,
                        typeOfQuestion,
                        dispatch
                      );
                      dispatch({
                        type: "changeContentOfDifficultyOfQuestion",
                      });

                      break;
                  }
                }}
              >
                <ButtonText style={style.btnText}>Next </ButtonText>
              </Button>
            </Animatable.View>
          ) : (
            <>
              <View style={{ flex: 1 }}>
                <View>
                  {arrayAnswers.map((answer: string, index: number) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        console.log(answer === correctAnswer);

                        questionScreenNumber < numberOfQuestion
                          ? dispatch({
                              type: "changeContentOfDifficultyOfQuestion",
                              answerCheckedByUser: answer,
                            })
                          : dispatch({
                              type: "endAllQuestion",
                            });
                      }}
                    >
                      <View style={{ marginBottom: 10 }}>
                        <Text>{answer}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}

                  {score / numberOfQuestion >= 0.8 &&
                  questionScreenNumber >= numberOfQuestion ? (
                    <Text> YOU WIN </Text>
                  ) : questionScreenNumber >= numberOfQuestion ? (
                    <Text>TRY AGAIN</Text>
                  ) : (
                    <></>
                  )}
                </View>
              </View>
            </>
          )}
        </GluestackUIProvider>
      </LinearGradient>
    </View>
  );
}

async function getQuestions(
  numberOfQuestion: number,
  categoryOfQuestion: number,
  levelOfQuestion: string,
  typeOfQuestion: string,
  dispatch: any
) {
  const link = `https://opentdb.com/api.php?amount=${numberOfQuestion}&category=${categoryOfQuestion}&difficulty=${levelOfQuestion}&type=${typeOfQuestion}`;
  const response = await fetch(link);
  const questions = await response.json();

  console.log(link);
  dispatch({
    type: "setQuestionsFromApi",
    newArrayQuestions: questions.results,
  });
}
