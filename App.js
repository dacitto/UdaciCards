import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import store from "./redux/store";
import { Provider } from "react-redux";
import Home from "./components/Home";
import AddDeck from "./components/AddDeck";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Decks"
            component={Home}
            options={{
              tabBarIcon: () => (
                <FontAwesome5 name="home" size={24} color="#555" />
              ),
            }}
          />
          <Tab.Screen
            name="Add new Deck"
            component={AddDeck}
            options={{
              tabBarIcon: () => (
                <Ionicons
                  name="ios-add-circle-outline"
                  size={24}
                  color="#555"
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
