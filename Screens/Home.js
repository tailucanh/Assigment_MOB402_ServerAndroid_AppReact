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
import { API_PRODUCTS } from "../Components/helper/Api";
import ItemsProductsHome from "../Components/ItemsProductsHome";

export default function Home(props) {
  const navigation = props.navigation;
  const user = props.route.params?.user;
  const [listProducts, setData] = useState([]);

  const getListProducts = async () => {
    console.log(API_PRODUCTS);
    try {
      const response = await fetch(API_PRODUCTS, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setData(data);
      console.log(listProducts.length);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getListProducts();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle={"dark-content"} />
      <View style={styles.header}>
        <View>
          <Text style={styles.textTitle}>
            Xin chào <Text style={styles.textUserName}>{user.name}</Text>
            {"\n"}chào mừng quay trở lại
          </Text>
        </View>

        <TouchableHighlight underlayColor="rgba(255, 254, 254, 0)">
          <Image
            source={
              user.avatar.contentType.length > 0
                ? {
                    uri: `data:${user.avatar.contentType}};base64,${user.avatar.data}`,
                  }
                : require("../assets/images/ic_avatar.png")
            }
            style={styles.ic_user}
          />
        </TouchableHighlight>
      </View>

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputSearch}
        placeholder="Search"
        placeholderTextColor="#000000"
      />

      <View style={styles.boxTitle}>
        <Ionicons name="caret-forward-circle" style={styles.icTitle}></Ionicons>
        <Text style={styles.textTitleHome}>Sản phẩm tại Smile Store</Text>
      </View>

      {listProducts.length != 0 ? (
        <FlatList
          style={styles.listContainer}
          data={listProducts}
          renderItem={({ item, index }) => {
            return (
              <ItemsProductsHome
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
