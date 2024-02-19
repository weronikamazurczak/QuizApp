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
    width: "100%",
    height: "100%",
  },
  btnStart: {
    width: "80%",
    height: "10%",
    color: "red",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    alignItems: "center",
    marginTop: "176%",
  },
});
