import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import DeckCard from "./DeckCard";
import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  const deckDetails = (item) => {
    navigation.navigate("DeckDetails", { deck: item });
  };
  const decks = useSelector((state) => state.decks);
  return (
    <View style={styles.container}>
      {decks && (
        <FlatList
          keyExtractor={(deck) => deck.id}
          data={decks}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => deckDetails(item)}>
              <DeckCard
                title={item.title}
                numberOfCards={item.questions.length}
              />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
});
