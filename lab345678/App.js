import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Lab7/Home"; // Import màn hình Home
import TopTabs from "./Lab7/Bai3"; // Import màn hình có Tab

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#6200EE" }, headerTintColor: "#FFF" }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Document" component={TopTabs} />
        <Stack.Screen name="Chat" component={TopTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}