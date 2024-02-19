import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/SplashScreen/SplashScreen";
import StartScreen from "./src/StartScreen/StartScreen";
import DetailsQuestion from "./src/DetailsQuestion/DetailsQuestion";
import QuestionScreen from "./src/QuestionScreen/QuestionScreen";
import FinishQuiz from "./src/FinishQuiz/FinishQuiz";
import React from "react";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="DetailsQuestion" component={DetailsQuestion} />
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
        <Stack.Screen name="FinishQuiz" component={FinishQuiz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}