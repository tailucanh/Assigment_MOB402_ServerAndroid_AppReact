import {
  View,
  Text,
  Button,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Ionicons,
  Image,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { styles } from "../Components/Styles/Setting.js";

export default function Settings(props) {
  const navigation = props.navigation;
  const user = props.route.params?.user;

  return (
    <View style={styles.containerDetail}>
      <StatusBar backgroundColor="#ffffff" barStyle={"dark-content"} />
      <View style={styles.boxInfoDetail}>
        <View style={styles.childInfo1}>
          <Image
            source={
              user.avatar.contentType.length > 0
                ? {
                    uri: `data:${user.avatar.contentType}};base64,${user.avatar.data}`,
                  }
                : require("../assets/images/ic_avatar.png")
            }
            style={styles.icAvatarDetail}
          />
          <View>
            <Text style={styles.textTitleName}>{user.name}</Text>
            <Text style={styles.textContentDetail}>Email: {user.email}</Text>
          </View>
        </View>
        <View style={styles.childInfo2}>
          <View>
            <Text style={styles.textChildTitle}>Follow</Text>
            <Text style={styles.textChildContent}>100</Text>
          </View>
          <View>
            <Text style={styles.textChildTitle}>Đánh giá</Text>
            <Text style={styles.textChildContent}>4.9</Text>
          </View>
          <TouchableOpacity style={styles.boxBtn}>
            <Image
              source={require("../assets/images/ic_plus.png")}
              style={styles.icPlus}
            />
            <Text style={styles.textButton}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
