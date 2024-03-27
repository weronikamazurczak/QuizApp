# 🧠 QuizApp


## 📓 Description
QuizApp is a simple, interactive, and educational application designed to test your knowledge on a variety of topics. 

## 🔥 Features
- Multiple choice questions
- Timer for each question
- Score tracking
- Variety of topics

## ⚛️ Redux in QuizApp

In QuizApp, Redux plays a crucial role in managing the state of the application. It allows us to handle the state of different screens and components in a unified manner. 

One of the key features of QuizApp is the ability to set up a quiz and then display questions on the same screen. This is achieved using Redux. 

When setting up a quiz, the user's selections are dispatched as actions to the Redux store. These actions update the state of the quiz in the store, including the selected topic, number of questions, and difficulty level.

Once the quiz setup is complete, the same screen is used to display the questions. The questions are fetched based on the state stored in Redux. As the user answers each question, actions are dispatched to update the state of the quiz, including the current question and the user's score.

This use of Redux allows us to maintain a consistent state across the application, making it easier to manage and debug. It also allows us to separate the UI from the business logic, leading to cleaner, more maintainable code.

## 📍 Data Source

QuizApp uses the Open Trivia Database (OpenTDB) API to fetch quiz questions. OpenTDB is a free-to-use database of trivia questions. It provides a simple API that allows us to fetch questions based on various parameters like category, difficulty, type, etc.


For more information about the API and its usage, visit [OpenTDB API Config]([https://opentdb.com/api_config.php](https://opentdb.com/api_config.php).

## ©️ License
This project is licensed under the terms of the MIT license. See [LICENSE](LICENSE) for more details.
