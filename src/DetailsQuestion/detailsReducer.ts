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
  },
  action: {
    type: string;
    newNumberOfQuestion: number;
    newTypeOfQuestion: string;
    newCategoryOfQuestion: number;
    newLevelOfQuestion: string;
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
    case "changeContentOfDifficultyOfQuestion":
      return {
        ...state,
        headerName: "Question",
        informationText: "question",
        screenNumber: state.screenNumber + 1,
      };
    default:
      return state;
  }
}
