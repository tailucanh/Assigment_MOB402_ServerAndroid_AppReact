import React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
  Text,
} from "react-native";

const Loader = ({ visible = false }) => {
  const { height, width } = useWindowDimensions();
  return (
    visible && (
      <View style={[styles.container, { height, width }]}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#3d8bff" />
          <Text style={styles.textLoading}>Loading...</Text>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
  loader: {
    height: 70,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 50,
    paddingHorizontal: 20,
  },
  textLoading: {
    marginLeft: 15,
    fontSize: 18,
  },
});

export default Loader;
