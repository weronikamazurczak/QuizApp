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
    padding:200
  },
  btnStart: {
    width: "100%",
    height: "30%",
    backgroundColor: "transparent",
    marginTop: "10%",
  },

});
