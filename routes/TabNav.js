import React from "react";
import Home from "../screens/Home";
import AddDeck from "../screens/AddDeck";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Decks"
        component={Home}
        options={{
          tabBarIcon: () => <FontAwesome5 name="home" size={24} color="#555" />,
        }}
      />
      <Tab.Screen
        name="New Deck"
        component={AddDeck}
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-add-circle-outline" size={24} color="#555" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
