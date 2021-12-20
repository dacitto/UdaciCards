import { Text, View, StyleSheet } from "react-native";
import DeckCard from "./DeckCard";
export default function Home() {
  return (
    <View style={styles.container}>
      <DeckCard title="react" numberOfCards={2}></DeckCard>
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
