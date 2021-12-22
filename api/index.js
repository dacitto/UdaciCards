import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
const DECKS_KEY = "Decks";
export async function getDecks() {
  return AsyncStorage.getItem(DECKS_KEY).then((results) => {
    if (results) {
      return JSON.parse(results);
    } else {
      AsyncStorage.setItem(DECKS_KEY, JSON.stringify({}));
      return {};
    }
  });
}

export async function saveDeck(deck) {
  try {
    await AsyncStorage.mergeItem(
      DECKS_KEY,
      JSON.stringify({
        [deck.id]: {
          ...deck,
        },
      })
    );
  } catch (err) {
    console.log(err);
  }
}
export async function getDeck(id) {
  try {
    const storeResults = await AsyncStorage.getItem(DECKS_KEY);
    return await JSON.parse(storeResults[id]);
  } catch (err) {
    console.log(err);
  }
}

export async function saveCard(card) {
  try {
    const { deckID, ...rest } = card;
    const deck = await getDeck(deckID);
    console.log("*************");
    console.log(await deck);
    console.log("*************");
    await AsyncStorage.mergeItem(
      DECKS_KEY,
      JSON.stringify({
        [deckID]: {
          questions: deck.questions.push(rest),
        },
      })
    );
  } catch (err) {
    console.log(err);
  }
}

export async function resetDecks() {
  try {
    await AsyncStorage.removeItem(DECKS_KEY);
  } catch (err) {
    console.log(err);
  }
}

//resetDecks();
