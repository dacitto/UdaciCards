import { Text, View, StyleSheet, ScrollView } from "react-native";
import DeckCard from "./DeckCard";
import { useSelector } from "react-redux";
export default function Home() {
  const decks = useSelector((state) => state.decks);
  return (
    <ScrollView style={styles.container}>
      {decks.map((deck, index) => (
        <DeckCard
          key={index}
          title={deck.title}
          numberOfCards={deck.questions.length}
        />
      ))}
    </ScrollView>
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
