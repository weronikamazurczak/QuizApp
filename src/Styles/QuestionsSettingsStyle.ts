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
    fontSize: 40,
    color: "white",
    alignItems: "center",
    textAlign: "center",
    marginTop: "15%",
    padding: 10,
    fontFamily: "libre-bodoni.regular",
  },
  slider: {
    marginTop: "10%",
    width: "80%",
    height: 40,
    marginBottom: 50,
  },
  valueText: {
    fontSize: 80,
    color: "white",
    paddingBottom: 100,
  },
  btnStyle: {
    width: 150,
  },
  btnText: {
    textAlign: "center",
  },
});
