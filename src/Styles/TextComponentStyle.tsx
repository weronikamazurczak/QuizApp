import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  backgroundColor: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
  },
  headerText: {
    fontSize: 60,
    color: "black",
    fontWeight: "bold",
    fontFamily: "KeaniaOne-Regular",
  },
  colorView1: {
    flex: 1,
    height: "100%",
    backgroundColor: "#FF8E3A",
  },
  colorView2: {
    flex: 1,
    height: "100%",
    backgroundColor: "#ED509E",
  },
  colorView3: {
    flex: 1,
    height: "100%",
    backgroundColor: "#9C73F8",
  },
});
