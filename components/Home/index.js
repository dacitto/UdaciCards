import { Text, View, StyleSheet, FlatList } from "react-native";
import DeckCard from "./DeckCard";
import { useSelector } from "react-redux";
export default function Home() {
  const decks = useSelector((state) => state.decks);
  return (
    <View style={styles.container}>
      {decks && (
        <FlatList
          keyExtractor={(deck) => deck.id}
          data={decks}
          renderItem={({ item }) => (
            <DeckCard
              title={item.title}
              numberOfCards={item.questions.length}
            />
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
    // justifyContent: "center",
    // alignItems: "center",
  },
});
