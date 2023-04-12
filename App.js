import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HelloScreen from "./Screens/HelloScreen";
import BottomNav from "./Components/BottomNav";
import ScreenLogin from "./Screens/Login";
import loadFonts from "./Components/MyCustomFonts";
import Home from "./Screens/Home";
import Settings from "./Screens/Setting";
const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HelloScreen">
        <Stack.Screen
          name="HelloScreen"
          component={HelloScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={ScreenLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
