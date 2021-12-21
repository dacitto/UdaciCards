import { Text, View, StyleSheet } from "react-native";
const NoCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Sorry, you cannot take a quiz because there are no cards in the deck.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 15,
  },
});
export default NoCards;
