import { Text, View, StyleSheet } from "react-native";

const DeckCard = ({ title, numberOfCards }) => (
  <View style={styles.card}>
    <Text style={styles.text}>{title}</Text>
    <Text style={styles.text}>{numberOfCards} cards</Text>
  </View>
);
const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  text: {
    color: "#eee",
    fontSize: 18,
  },
});
export default DeckCard;
