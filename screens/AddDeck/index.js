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
import { addDeck } from "../../redux/decksSlice";
import { useDispatch } from "react-redux";
const AddDeck = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text>What's the Title of your Deck?</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(title) => setTitle(title)}
          placeholder="New deck Title"
        />
        <Button
          onPress={() => {
            if (title.trim() !== "") {
              dispatch(
                addDeck({ id: Date.now(), title: title.trim(), questions: [] })
              );
              setTitle("");
              navigation.goBack();
            } else {
              Alert.alert(
                "Deck Title is empty!",
                "Deck Title must contain at least 1 character",
                [{ text: "ok" }]
              );
            }
          }}
          title="Create a deck"
          style={styles.button}
          accessibilityLabel="Add a new deck"
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

export default AddDeck;
