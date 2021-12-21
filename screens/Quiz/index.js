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
                  style={styles.button}
                  onPress={() => {
                    setCorrect(correct + 1);
                    setIndex(index + 1);
                    setShowAnswer(false);
                  }}
                >
                  <Text style={styles.buttonText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setIncorrect(incorrect + 1);
                    setIndex(index + 1);
                    setShowAnswer(false);
                  }}
                >
                  <Text style={styles.buttonText}>Wrong</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      )}
      {!(index < questionsNumber) && questionsNumber > 0 && (
        <Text>Some Logic</Text>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    //alignItems: "center",
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
    backgroundColor: "gold",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonDelete: {
    textAlign: "center",
    color: "red",
    fontSize: 20,
    marginBottom: 25,
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
});

export default Quiz;
