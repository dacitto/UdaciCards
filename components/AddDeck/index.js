import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { addDeck } from "../../redux/decksSlice";
import { useDispatch } from "react-redux";
const AddDeck = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>What's the Title of your Deck?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(title) => setTitle(title)}
        placeholder="New deck Title"
      />
      <Button
        onPress={() => {
          if (title.trim() !== "") {
            dispatch(
              addDeck({ id: Date.now(), title: title.trim(), questions: [] })
            );
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
