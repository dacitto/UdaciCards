import AsyncStorage from "@react-native-async-storage/async-storage";
const DECKS_KEY = "Decks";
const NOTIFICATION_KEY = "Notifications";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo";
import { Alert, Linking } from "react-native";
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
    return JSON.parse(storeResults)[id];
  } catch (err) {
    console.log(err);
  }
}

export async function saveCard(card) {
  try {
    const { deckID, ...rest } = card;
    const deck = await getDeck(deckID);
    getDecks().then((decks) => {
      decks[deckID] = {
        ...decks[deckID],
        questions: [...decks[deckID].questions, card],
      };
      AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
    });
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

// Notification
function createReminder() {
  return {
    title: "Hey",
    body: "It's time to take your quiz !",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
}

export function setNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status !== "granted") {
            Alert.alert(
              "Access not allowed",
              "Please go to settings and enable permissions for this App",
              [
                { text: "Cancel" },
                {
                  text: "Allow",
                  onPress: () => Linking.openURL("app-settings:"),
                },
              ],
              { cancelable: false }
            );
            return;
          }
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            Notifications.setNotificationHandler({
              handleNotification: async () => ({
                shouldPlaySound: true,
                shouldShowAlert: true,
                shouldSetBadge: false,
              }),
            });

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(20);

            Notifications.scheduleNotificationAsync({
              content: createReminder(),
              trigger: {
                hour: 20,
                minute: 20,
                repeats: true,
              },
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}

export function clearReminder() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}
