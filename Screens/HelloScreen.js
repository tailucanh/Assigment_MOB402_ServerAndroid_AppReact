import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Image,
  ImageBackground,
  StatusBar,
  TouchableHighlight,
} from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../Components/Styles/HelloScreenStyle";
import loadFonts from "../Components/MyCustomFonts";

export default function HelloScreen(props) {
  const navigation = props.navigation;
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle={"dark-content"} />
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.icHomeScreen}
      />

      <Pressable
        android_ripple={{
          color: "rgba(141, 141, 141, 0.8)",
          borderRadius: 15,
        }}
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.textButton}>Bắt đầu</Text>
      </Pressable>
    </View>
  );
}
