import { useEffect } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import DeckCard from "./DeckCard";
import { useSelector, useDispatch } from "react-redux";
import { getDecks } from "../../api";
import { initData } from "../../redux/decksSlice";
export default function Home({ navigation }) {
  const deckDetails = (item) => {
    navigation.navigate("DeckDetails", { deck: item });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    async () => {
      console.log("useEffect");
      dispatch(initData(await getDecks()));
    };
  }, []);

  console.log("getDecks()");
  getDecks().then((result) => console.log(result));

  const decks = useSelector((state) => state.decks);
  return (
    <View style={styles.container}>
      {decks !== {} && (
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
