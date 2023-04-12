import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Image,
  TouchableHighlight,
  StatusBar,
  ScrollView,
  Keyboard,
  Alert,
  Switch,
} from "react-native";
import { styles } from "../Components/Styles/LoginStyle";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import RadioGroup from "react-native-radio-buttons-group";
import { API_SHOP, API_USER } from "../Components/helper/Api";

import InputText from "../Components/Inputs";
import Loader from "../Components/Loader";
const bcrypt = require("bcryptjs");

export default function ScreenLogin({ route, navigation }) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrol] = useState({});

  const [listUser, setData] = useState([]);

  useEffect(() => {
    const getListUser = async () => {
      console.log(API_USER);
      try {
        const response = await fetch(API_USER, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setData(data);
        console.log(listUser.length);
      } catch (error) {
        console.error(error);
      }
    };
    getListUser();
  }, []);

  const validate = async () => {
    Keyboard.dismiss();
    if (listUser.length > 0) {
      let valid = true;
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValue) {
        handleError("Hãy nhập email ", "email");
        valid = false;
      } else if (!regex.test(emailValue)) {
        handleError("Hãy nhập email đúng định dạng", "email");
        valid = false;
      } else if (!passwordValue) {
        handleError("Hãy nhập password", "password");
        valid = false;
      } else {
        const getUser = listUser.find((item) => item.email === emailValue);

        if (!getUser) {
          handleError("Email chưa được đăng kí", "email");
          valid = false;
        }
        if (getUser) {
          console.log(getUser.password);
          setLoading(true);
          const checkPass = await bcrypt.compare(
            passwordValue,
            getUser.password
          );

          if (!checkPass) {
            handleError("Sai mật khẩu", "password");
            valid = false;
          }
          setLoading(false);
        }
        if (valid) {
          getUser.userAuthorization
            ? navigation.navigate("BottomNav", { user: getUser })
            : navigation.navigate("Home", { user: getUser });
        }
      }
    }
  };

  const handleError = (errorMessage, input) => {
    setErrol((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle={"dark-content"} />
      <View style={styles.boxLogo}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.icLogo}
        />
      </View>

      <Text style={styles.textTitle}>Đăng nhập</Text>

      <Loader visible={loading} />

      <InputText
        label="Email"
        icon="mail-outline"
        placeholder="Nhập email"
        error={errors.email}
        onFocus={() => handleError(null, "email")}
        keyboardType="text"
        value={emailValue}
        onChangeText={(text) => setEmailValue(text)}
      />
      <InputText
        label="Password"
        icon="key-outline"
        error={errors.password}
        onFocus={() => handleError(null, "password")}
        placeholder="Nhập password"
        keyboardType="text"
        value={passwordValue}
        onChangeText={(text) => setPasswordValue(text)}
      />

      <Pressable
        android_ripple={{
          color: "rgba(92, 105, 121, 0.8)",
        }}
        style={styles.buttonSave}
        onPress={validate}
      >
        <Text style={styles.textButtonSave}>Đăng nhập</Text>
      </Pressable>
    </View>
  );
}
