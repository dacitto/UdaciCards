import { useEffect } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import DeckCard from "./DeckCard";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/decksSlice";
export default function Home({ navigation }) {
  const deckDetails = (item) => {
    navigation.navigate("DeckDetails", { deck: item });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const { decks } = useSelector((state) => state.decks);
  return (
    <View style={styles.container}>
      {decks && (
        <FlatList
          keyExtractor={(item) => item}
          data={Object.keys(decks)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => deckDetails(decks[item])}>
              <DeckCard
                title={decks[item].title}
                numberOfCards={decks[item].questions.length}
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
