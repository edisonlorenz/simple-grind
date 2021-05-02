import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Splash from "./components/Splash";
import Home from "./components/Home";
import Exercise from "./components/Exercise";
import Guidelines from "./components/Guidlines";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Simple Grind",
            headerTitleAlign: "center",
            headerLeft: null,
            headerStyle: {
              backgroundColor: "#1bbc9b",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Exercise"
          component={Exercise}
          options={{
            title: "Exercises",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#1bbc9b",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Guidlines"
          component={Guidelines}
          options={{
            title: "Guide",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#1bbc9b",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

