import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { addQuestion } from "../../redux/decksSlice";
import { useDispatch } from "react-redux";
import { saveCard } from "../../api";
const AddCard = ({ route, navigation }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const deckID = route.params.deckID;
  const dispatch = useDispatch();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={question}
          onChangeText={(value) => setQuestion(value)}
          placeholder="Question"
        />
        <TextInput
          style={styles.input}
          value={answer}
          onChangeText={(value) => setAnswer(value)}
          placeholder="Answer"
        />
        <Button
          onPress={() => {
            if (question.trim() !== "" && answer.trim() !== "") {
              const cardId = Date.now();
              const card = {
                deckID: deckID,
                id: cardId,
                question: question.trim(),
                answer: answer.trim(),
              };
              saveCard(card);
              dispatch(addQuestion(card));
              // setTitle("");
              navigation.goBack();
            } else {
              Alert.alert(
                "Text input is empty!",
                "Please fill both question and answer fields",
                [{ text: "ok" }]
              );
            }
          }}
          title="Submit"
          style={styles.button}
          accessibilityLabel="Add a new Card"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
  },
});
export default AddCard;
