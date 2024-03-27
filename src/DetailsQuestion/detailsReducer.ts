export function detailsReducer(
  state = {
    informationText: "Choose number of question",
    screenNumber: 0,
    numberOfQuestion: 0,
    typeOfQuestion: "multiple",
    multipleChoiceColor: "blue",
    trueOrFalseChoiceColor: "blue",
    categoryOfQuestion: 9,
    levelOfQuestion: "easy",
    easyLevelOfQuestionColor: "#2f6d07",
    mediumLevelOfQuestionColor: "blue",
    hardLevelOfQuestionColor: "blue",
    headerName: "MindQuest",
    arrayQuestions: [
      {
        category: "",
        difficulty: "",
        incorrect_answers: [""],
        question: "",
        type: "",
        correct_answer: "",
      },
    ],
    arrayAnswers: [""],
    correctAnswer: "",
    questionScreenNumber: 0,
    score: 0,
  },
  action: {
    type: string;
    newNumberOfQuestion: number;
    newTypeOfQuestion: string;
    newCategoryOfQuestion: number;
    newLevelOfQuestion: string;
    newArrayQuestions: Array<{
      category: string;
      difficulty: string;
      incorrect_answers: Array<string>;
      question: string;
      type: string;
    }>;
    newArrayAnswers: Array<string>;
    newCorrectAnswer: string;
    newQuestionScreenNumber: number;
    answerCheckedByUser: string;
  }
) {
  switch (action.type) {
    case "changeContentOfChoosenNumberOfQuestion":
      return {
        ...state,
        informationText: "Choose type of question",
        screenNumber: state.screenNumber + 1,
      };
    case "changeContentOfChoosenTypeOfQuestion":
      return {
        ...state,
        informationText: "Select category",
        screenNumber: state.screenNumber + 1,
      };
    case "changeContentOfSelectCategory":
      return {
        ...state,
        informationText: "Choose type of question",
        screenNumber: state.screenNumber + 1,
      };
    case "changeValueOnSlider":
      return {
        ...state,
        numberOfQuestion: action.newNumberOfQuestion,
      };
    case "chooseTypeOfQuestion":
      return {
        ...state,
        typeOfQuestion: action.newTypeOfQuestion,
        multipleChoiceColor:
          state.typeOfQuestion == "multiple" ? "#850e9a" : "blue",
        trueOrFalseChoiceColor:
          state.typeOfQuestion == "boolean" ? "#e7510f" : "blue",
      };
    case "selectQuestionCategory":
      return {
        ...state,
        categoryOfQuestion: action.newCategoryOfQuestion,
      };
    case "chooseLevelOfQuestion":
      return {
        ...state,
        levelOfQuestion: action.newLevelOfQuestion,
        easyLevelOfQuestionColor:
          state.levelOfQuestion == "easy" ? "#2f6d07" : "blue",
        mediumLevelOfQuestionColor:
          state.levelOfQuestion == "medium" ? "#ffbb00" : "blue",
        hardLevelOfQuestionColor:
          state.levelOfQuestion == "hard" ? "#b10303" : "blue",
      };
    case "setQuestionsFromApi":
      return {
        ...state,
        arrayQuestions: action.newArrayQuestions,
      };
    case "changeContentOfDifficultyOfQuestion":
      return {
        ...state,
        headerName: "Question",
        informationText:
          state.arrayQuestions[state.questionScreenNumber].question,
        screenNumber: state.screenNumber + 1,
        arrayAnswers:
          state.arrayQuestions[state.questionScreenNumber].incorrect_answers,
        correctAnswer:
          state.arrayQuestions[state.questionScreenNumber].correct_answer,
        questionScreenNumber: state.questionScreenNumber + 1,
        score:
          action.answerCheckedByUser === state.correctAnswer
            ? state.score + 1
            : state.score,
      };
    case "endAllQuestion":
      let scorePercentage = (state.score / state.numberOfQuestion) * 100;
      let scoreText =
        "Your score" + " " + state.score + "/" + state.numberOfQuestion;
      return {
        ...state,
        headerName: "Finish",
        informationText:
          (scorePercentage >= 80 ? "YOU WIN" : "YOU LOSE") +
          ". " +
          "\n" +
          "\n" +
          scoreText,
        arrayAnswers: [""],
        correctAnswer: "",
        questionScreenNumber: "",
      };
    default:
      return state;
  }
}
