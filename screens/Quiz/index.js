import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import NoCards from "./NoCards";
const Quiz = ({ route, navigation }) => {
  const deckID = route.params.deckID;
  const questions = useSelector((state) => state.decks[deckID].questions);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const questionsNumber = questions.length;
  return (
    <>
      {questionsNumber === 0 && <NoCards />}
      {index < questionsNumber && questionsNumber > 0 && (
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>
              Question {index + 1} of {questionsNumber}
            </Text>
            <Text style={styles.question}>{questions[index].question}</Text>
            {showAnswer && (
              <Text style={styles.answer}>{questions[index].answer}</Text>
            )}
          </View>
          <View>
            {!showAnswer && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setShowAnswer(true);
                }}
              >
                <Text style={styles.buttonText}>Show Answer</Text>
              </TouchableOpacity>
            )}
            {showAnswer && (
              <>
                <TouchableOpacity
                  style={[styles.button, styles.correct]}
                  onPress={() => {
                    setCorrect(correct + 1);
                    setIndex(index + 1);
                    setShowAnswer(false);
                  }}
                >
                  <Text style={[styles.buttonText]}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.incorrect]}
                  onPress={() => {
                    setIncorrect(incorrect + 1);
                    setIndex(index + 1);
                    setShowAnswer(false);
                  }}
                >
                  <Text style={[styles.buttonText]}>Incorrect</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      )}
      {!(index < questionsNumber) && questionsNumber > 0 && (
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>You Have Scored</Text>
            <Text style={[styles.title, styles.green]}>
              {correct} out of {questionsNumber}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setIncorrect(0);
                setIndex(0);
                setShowAnswer(false);
              }}
            >
              <Text style={styles.buttonText}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.buttonText}>Back To Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },
  button: {
    margin: 10,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "#444",
  },
  buttonText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "#eee",
    backgroundColor: "transparent",
  },
  question: {
    fontSize: 20,
    marginBottom: 15,
  },
  answer: {
    marginVertical: 20,
    fontSize: 20,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
    lineHeight: 25,
    borderRadius: 10,
  },
  green: {
    color: "green",
  },
  correct: {
    backgroundColor: "#5C985C",
  },
  incorrect: {
    backgroundColor: "#ff5252",
  },
});

export default Quiz;
