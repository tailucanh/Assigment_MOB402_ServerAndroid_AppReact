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

const ItemsUser = ({ item, index, onDelete, onEdit, onShow }) => (
  <GestureHandlerRootView>
    <Swipeable
      renderRightActions={() => (
        <View style={styles.boxButton}>
          <TouchableOpacity style={styles.buttonUpdate} onPress={onEdit}>
            <Text style={styles.textButton}>Sửa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDelete} onPress={onDelete}>
            <Text style={styles.textButton}>Xóa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonShow} onPress={onShow}>
            <Text style={styles.textButton}>Chi tiết</Text>
          </TouchableOpacity>
        </View>
      )}
    >
      <View style={styles.infoItem}>
        <Image
          source={
            item.avatar?.contentType.length > 0
              ? {
                  uri: `data:${item.avatar.contentType}};base64,${item.avatar.data}`,
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
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.styleText}
            >
              {item.name}
            </Text>
          </View>
          <View style={styles.info}>
            <Ionicons
              name={"medal-outline"}
              style={[styles.iconInfo, { color: "#3260b4" }]}
            />
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.styleText}
            >
              {item.email}
            </Text>
          </View>
        </View>
      </View>
    </Swipeable>
  </GestureHandlerRootView>
);

export default ItemsUser;

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
