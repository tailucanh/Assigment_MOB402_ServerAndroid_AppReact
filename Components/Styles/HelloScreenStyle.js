import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  icLogo: {
    resizeMode: "cover",
  },
  textTitle: {
    fontSize: 30,
    alignSelf: "center",
    color: "black",
    fontWeight: "bold",
  },

  button: {
    paddingHorizontal: 70,
    backgroundColor: "rgba(97, 158, 204, 1)",
    borderRadius: 15,
    marginTop: 40,
    elevation: 2,
  },
  textButton: {
    fontSize: 19,
    alignSelf: "center",
    marginVertical: 10,
    color: "white",
  },
});
