import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deleteDeck } from "../../redux/decksSlice";
const DeckDetails = ({ route, navigation }) => {
  const deckID = route.params.deck.id;
  const deck = useSelector((state) => state.decks[deckID]);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{deck.title}</Text>
      <View>
        <Text style={styles.title}>
          {deck.questions.length} Card{deck.questions.length > 1 && "s"}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AddCard", { deckID: deckID })}
        >
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Quiz", { deckID: deckID })}
        >
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(deleteDeck({ id: deckID }));
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonDelete}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
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
});

export default DeckDetails;
