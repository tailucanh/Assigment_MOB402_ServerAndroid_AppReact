import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../Components/Styles/ShowItemStyle";

export default function ShowItem(props) {
  const navigation = props.navigation;
  const showItem = props.route.params?.item;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Chi tiết cửa hàng",
      headerTransparent: false,
      headerStyle: {
        backgroundColor: "#141927",
        height: 100,
      },
      headerTintColor: "white",
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: "white",
        fontFamily: "SignikaNegative",
        fontSize: 24,
      },
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#141927" barStyle={"light-content"} />
      <View style={styles.boxImg}>
        <Image
          source={require("../assets/images/ic_headphone.png")}
          style={styles.iconHeader}
        />
        <Image
          source={
            showItem.logo?.uri
              ? { uri: showItem.logo.uri }
              : require("../assets/images/react.png")
          }
          style={styles.imgLogo}
        />
      </View>
      <View style={styles.boxInfo}>
        <View>
          <View style={styles.boxName}>
            <Image
              source={require("../assets/images/icon2.png")}
              style={styles.icon}
            />
            <Text style={styles.textName}>{showItem.name}</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.talkBubble}>
              <View style={styles.talkBubbleSquare}>
                <Image
                  source={require("../assets/images/ic_phone.png")}
                  style={styles.iconInfo}
                />

                <Text style={styles.textIcon}>Số điện thoại</Text>
              </View>
              <View style={styles.talkBubbleTriangle} />
            </View>

            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.textInfo}
            >
              {showItem.phone}
            </Text>
          </View>

          <View style={styles.info}>
            <View style={styles.talkBubble}>
              <View style={styles.talkBubbleSquare}>
                <Image
                  source={require("../assets/images/ic_local.png")}
                  style={styles.iconInfo}
                />
                <Text style={styles.textIcon}>Địa chỉ</Text>
              </View>
              <View style={styles.talkBubbleTriangle} />
            </View>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.textInfo}
            >
              {showItem.address}
            </Text>
          </View>

          <View style={styles.info}>
            <View style={styles.talkBubble}>
              <View style={styles.talkBubbleSquare}>
                <Ionicons
                  name={"flash"}
                  style={[
                    styles.iconInfo2,
                    { color: showItem.status ? "#f32d79" : "#a5a4a4" },
                  ]}
                />
                <Text style={styles.textIcon}>Trạng thái</Text>
              </View>
              <View style={styles.talkBubbleTriangle} />
            </View>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.textInfo}
            >
              {showItem.status ? "Hoạt dộng" : "Không hoạt động"}
            </Text>
          </View>
        </View>

        <Image
          source={require("../assets/images/icon1.png")}
          style={styles.iconBottom}
        />
      </View>
    </View>
  );
}
