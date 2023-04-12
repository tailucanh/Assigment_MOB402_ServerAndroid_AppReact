import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Swipeable } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ItemsProductsHome = ({ item, index, onDelete, onEdit, onShow }) => (
  <View style={styles.infoItem}>
    <Image
      source={
        item.image?.contentType.length > 0
          ? {
              uri: `data:${item.image.contentType}};base64,${item.image.data}`,
            }
          : require("../assets/images/logo_title.png")
      }
      style={styles.icLogo}
    />
    <View style={styles.boxInfo}>
      <View style={styles.info}>
        <Ionicons
          name={"pricetags-outline"}
          style={[styles.iconInfo, { color: "#3e7fc9" }]}
        />
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.styleText}>
          {item.name}
        </Text>
      </View>
      <View style={styles.info}>
        <Ionicons
          name={"medal-outline"}
          style={[styles.iconInfo, { color: "#3260b4" }]}
        />
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.styleText}>
          {item.price}
        </Text>
      </View>
    </View>
  </View>
);

export default ItemsProductsHome;

const styles = StyleSheet.create({
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    borderColor: "#5c5c5c",
    borderWidth: 1,
    borderRadius: 10,
    elevation: 5,
  },
  icLogo: {
    height: 90,
    width: 90,
    borderRadius: 200,
    marginRight: 10,
    resizeMode: "center",
    overflow: "hidden",
  },
  boxInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconInfo: {
    fontSize: 20,
    marginRight: 8,
  },
  styleText: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Sriracha",
  },

  boxButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonDelete: {
    marginRight: 10,
    backgroundColor: "#e62c5a",
    borderRadius: 5,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  buttonUpdate: {
    marginRight: 10,
    backgroundColor: "#e6b857",
    borderRadius: 5,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  buttonShow: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    backgroundColor: "#2a3352",
    borderRadius: 5,
    marginRight: 20,
  },
  textButton: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "500",
    fontFamily: "PatrickHand",
  },
});
