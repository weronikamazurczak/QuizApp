import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "-50%",
  },
  selectArea: {
    width: 370,
    height: 600,
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "space-between",
  },
  setupQuestion: {
    fontFamily: "SauceTomato",
    fontSize: 40,
    color: "white",
    alignItems: "center",
    textAlign: "center",
    marginTop: "15%",
    padding: 10,
  },
  slider: {
    marginTop: "10%",
    width: "80%",
    height: 40,
    marginBottom: 50,
  },
  valueText: {
    fontFamily: "SauceTomato",
    fontSize: 50,
    color: "white",
  },
  btnStyle: {
    width: 150,
  },
  btnText: {
    fontFamily: "SauceTomato",
    paddingTop: "20%",
    fontSize: 20,
    textAlign: "center",
  },

  SelectTrigger: {
    width: 300,
    marginBottom: 150,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 3,
  },
  SelectInput: {
    color: "white",
    fontSize: 20,
  },
  question: {
    fontSize: 22,
    color: "white",
    alignItems: "center",
    textAlign: "center",
    marginTop: "10%",
    fontFamily: "SauceTomato",
    paddingBottom: "10%",
    paddingLeft: "3%",
    paddingRight: "3%",
  },

  answerStyle: {
    fontFamily: "SauceTomato",
    fontSize: 15,
    alignItems: "center",
    textAlign: "center",
    color: "#2d1996",
  },
});
