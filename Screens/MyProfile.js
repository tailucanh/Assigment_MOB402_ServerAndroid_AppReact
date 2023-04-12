import {
  View,
  Text,
  Button,
  Pressable,
  Image,
  TouchableHighlight,
  StatusBar,
  ImageBackground,
  Modal,
} from "react-native";
import { useState, useEffect } from "react";
import { styles } from "../Components/Styles/Setting.js";

export default function MyProfile(props) {
  const navigation = props.navigation;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#141927" barStyle={"light-content"} />
      <ImageBackground
        source={require("../assets/images/smile.png")}
        resizeMode="cover"
        style={styles.boxImageBackground}
      ></ImageBackground>
      <View style={styles.boxInfo}>
        <Pressable
          android_ripple={{ color: "#1b2035" }}
          style={styles.btnShowInfo}
          onPress={() => navigation.navigate("DetailsProfile")}
        />
        <TouchableHighlight
          underlayColor="rgba(255, 255, 255, 0)"
          style={styles.touchableAvatar}
          onPress={() => navigation.navigate("DetailsProfile")}
        >
          <Image
            source={require("../assets/images/avatar.jpg")}
            style={styles.icAvatar}
          />
        </TouchableHighlight>
        <Text style={styles.textTitleName}>Lục Anh Tài</Text>
        <Text style={styles.textContent}>FPOLY Student | Lập trình Mobile</Text>
      </View>
    </View>
  );
}
