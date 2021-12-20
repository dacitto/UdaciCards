import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { addDeck } from "../../redux/decksSlice";
import { useDispatch } from "react-redux";
const AddDeck = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Add New Deck</Text>
      <TextInput style={styles.input} />
      <Button
        onPress={() =>
          dispatch(addDeck({ id: Date.now(), title: "test", questions: [] }))
        }
        title="ADD"
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
