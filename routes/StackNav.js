import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import DeckDetails from "../screens/DeckDetails";
import TabNav from "./TabNav";
const Stack = createStackNavigator();
const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#333",
          },
          headerTintColor: "#eee",
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={TabNav}
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen
          name="DeckDetails"
          component={DeckDetails}
          options={{ title: "Deck Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNav;
