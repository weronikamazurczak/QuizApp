export function detailsReducer(
  state = {
    informationText: "Choose number of question",
    screenNumber: 0,
    numberOfQuestion: 0,
    typeOfQuestion: "multiple",
    multipleChoiceColor: "#850e9a",
    trueOrFalseChoiceColor: "#e7510f",
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
          state.typeOfQuestion == "multiple" ? "#2f6d07" : "red",
        trueOrFalseChoiceColor:
          state.typeOfQuestion == "boolean" ? "#2f6d07" : "red",
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
      return {
        ...state,
        informationText:
          "Your score" + " " + state.score + "/" + state.numberOfQuestion,
        arrayAnswers: [""],
        correctAnswer: "",
      };
    default:
      return state;
  }
}
