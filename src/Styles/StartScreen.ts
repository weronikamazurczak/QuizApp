export const styles = {
  startScreenImage: "justify-center items-center",
};
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "absolute",
    resizeMode: "cover",
    justifyContent: "center",
    width: "40%",
    height: "40%",
    padding: 200,
  },
  touchableContainer: {
    width: "90%",
    height: 100,
  },
  viewContainer: {
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 50,
    fontFamily: "QuartzoBold-W9lv",
    textAlign: "center",
  },
});
