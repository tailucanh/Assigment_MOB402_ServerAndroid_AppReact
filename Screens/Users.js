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
  TouchableHighlight,
  ScrollView,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../Components/Styles/HomeStyle";
import { useEffect, useState } from "react";
import { API_USER } from "../Components/helper/Api";
import ItemsUser from "../Components/ItemsUser";

export default function Users(props) {
  const navigation = props.navigation;
  const user = props.route.params?.user;
  const [listUser, setData] = useState([]);

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
  useEffect(() => {
    getListUser();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle={"dark-content"} />

      <View style={styles.boxTitle}>
        <Ionicons name="caret-forward-circle" style={styles.icTitle}></Ionicons>
        <Text style={styles.textTitleHome}>Danh sách người dùng</Text>
      </View>

      {listUser.length != 0 ? (
        <FlatList
          style={styles.listContainer}
          data={listUser}
          renderItem={({ item, index }) => {
            return (
              <ItemsUser
                item={item}
                index={index}
                onDelete={() => ""}
                onEdit={() => ""}
                onShow={() => ""}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      ) : (
        <View style={styles.boxEmptyData}>
          <Image
            style={styles.imgEmpty}
            source={require("../assets/images/empty_data.png")}
          />
          <Text style={styles.textEmpty}>Chưa có dữ liệu</Text>
        </View>
      )}
    </View>
  );
}
