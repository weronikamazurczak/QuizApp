export function detailsReducer(
  state = {
    informationText: "Choose number of question",
    screenNumber: 0,
    numberOfQuestion: 0,
    typeOfQuestion: "multiple",
    multipleChoiceColor: "red",
    trueOrFalseChoiceColor: "green",
    categoryOfQuestion: 9,
    levelOfQuestion: "easy",
    
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
          state.typeOfQuestion == "multiple" ? "green" : "red",
        trueOrFalseChoiceColor:
          state.typeOfQuestion == "boolean" ? "green" : "red",
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
      };
    default:
      return state;
  }
}
