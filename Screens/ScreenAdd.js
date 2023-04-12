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
import { styles } from "../Components/Styles/ManagerStyle";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import RadioGroup from "react-native-radio-buttons-group";
import { API_SHOP } from "../Components/helper/Api";

import InputText from "../Components/Inputs";
import Loader from "../Components/Loader";

export default function ScreenAdd(props) {
  const navigation = props.navigation;

  const [logo, setLogo] = useState(null);
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [statusShop, setStatusShop] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrol] = useState({});

  const editItem = props.route.params?.editItem;

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setLogo(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!nameValue) {
      handleError("Hãy nhập tên cửa hàng", "name");
      valid = false;
    }
    if (!phoneValue) {
      handleError("Hãy nhập số điện thoại", "phone");
      valid = false;
    }
    if (!addressValue) {
      handleError("Hãy nhập địa chỉ", "address");
      valid = false;
    }
    if (valid) {
      {
        editItem
          ? customAlert(
              "Xác nhận sửa",
              "Bạn chắc chắn muốn sửa thông tin?",
              "Sửa"
            )
          : customAlert(
              "Xác nhận ",
              "Bạn chắc chắn muốn lưu thông tin?",
              "Lưu"
            );
      }
    }
  };
  const handleError = (errorMessage, input) => {
    setErrol((prevState) => ({ ...prevState, [input]: errorMessage }));
  };
  const customAlert = (title, messenger, text) => {
    Alert.alert(title, messenger, [
      { text: "Hủy" },
      {
        text: text,
        onPress: () => {
          onSave();
        },
      },
    ]);
  };

  useEffect(() => {
    if (editItem) {
      setLogo(editItem.logo.uri);
      setNameValue(editItem.name);
      setPhoneValue(editItem.phone);
      setAddressValue(editItem.address);
      setStatusShop(editItem.status ? true : false);
    }
  }, [editItem?.id]);

  const onSave = () => {
    const newObj = {
      name: nameValue,
      phone: phoneValue,
      address: addressValue,
      status: statusShop ? 1 : 0,
      logo: {
        uri: logo,
        name: "logo.jpg",
        type: "image/jpeg",
      },
    };

    fetch(!editItem?.id ? API_SHOP : API_SHOP + "/" + editItem.id, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: !editItem?.id ? "POST" : "PUT",
      body: JSON.stringify(newObj),
    })
      .then(
        (res) => setLoading(true),
        setTimeout(() => {
          setLoading(false), navigation.goBack();
        }, 3000)
      )
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container2}>
      <StatusBar backgroundColor="#141927" barStyle={"light-content"} />

      <TouchableHighlight
        underlayColor="rgba(255, 255, 255, 0)"
        style={styles.touchableIcBack}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../assets/images/icBack.png")}
          style={styles.icBack}
        />
      </TouchableHighlight>
      <View style={styles.boxTitle}>
        <Text style={styles.textTitle}>
          {editItem ? "Sửa thông tin" : "Thêm mới cửa hàng"}
        </Text>
        <Image
          source={require("../assets/images/icHomeScreen.png")}
          style={styles.icAddScreen}
        />
      </View>
      <Loader visible={loading} />

      <ScrollView>
        <View style={styles.boxLogo}>
          <TouchableHighlight
            underlayColor="rgba(255, 255, 255, 0)"
            style={styles.touchableLogo}
          >
            <Image
              source={
                logo !== null
                  ? { uri: logo }
                  : require("../assets/images/react.png")
              }
              style={styles.icLogo}
            />
          </TouchableHighlight>
          <Pressable
            android_ripple={{ color: "#d0eef7cc" }}
            style={styles.btnAddLogo}
            onPress={pickImageAsync}
          >
            <Text style={styles.textBtnAddLogo}>
              {editItem ? " Sửa logo" : "Thêm logo"}
            </Text>
          </Pressable>
        </View>

        <InputText
          label="Tên cửa hàng"
          icon="pricetags-outline"
          placeholder="Nhập tên cửa hàng"
          error={errors.name}
          onFocus={() => handleError(null, "name")}
          keyboardType="text"
          value={nameValue}
          onChangeText={(text) => setNameValue(text)}
        />
        <InputText
          label="Số điện thoại"
          icon="call-outline"
          error={errors.phone}
          onFocus={() => handleError(null, "phone")}
          placeholder="Nhập số điện thoại"
          keyboardType="numeric"
          value={phoneValue}
          onChangeText={(text) => setPhoneValue(text)}
        />
        <InputText
          label="Địa chỉ"
          icon="location-outline"
          placeholder=" Nhập địa chỉ"
          error={errors.address}
          onFocus={() => handleError(null, "address")}
          keyboardType="text"
          value={addressValue}
          onChangeText={(text) => setAddressValue(text)}
        />
        <View style={styles.boxRdo}>
          <Text style={styles.textTitleStatus}>Trạng thái: </Text>
          <Switch
            style={styles.switch}
            trackColor={{ false: "#cfcfcf", true: "#73a6ff" }}
            thumbColor={statusShop ? "#4498cf" : "#f4f3f4"}
            onValueChange={() => setStatusShop(!statusShop)}
            value={statusShop}
          />
          <Text
            style={[
              styles.textStatus,
              { color: statusShop ? "#1398cc" : "#858181" },
            ]}
          >
            {statusShop ? "Hoạt động" : "Không hoạt động"}
          </Text>
        </View>
        <Pressable
          android_ripple={{
            color: "rgba(92, 105, 121, 0.8)",
          }}
          style={styles.buttonSave}
          onPress={validate}
        >
          <Text style={styles.textButtonSave}>
            {editItem ? " Sửa thông tin" : " Lưu thông tin"}
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
