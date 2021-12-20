import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
const AddDeck = () => {
  return (
    <View style={styles.container}>
      <Text>Add New Deck</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
      />
      <Button
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
    gap: 10,
    // justifyContent: "center",
    // alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  button: {
    borderRadius: 10,
  },
});

export default AddDeck;
