import { Text, View, StyleSheet } from "react-native";
const DeckDetails = ({ route }) => {
  const deck = route.params.deck;
  return (
    <View>
      <Text>{deck.title}</Text>
    </View>
  );
};

export default DeckDetails;
