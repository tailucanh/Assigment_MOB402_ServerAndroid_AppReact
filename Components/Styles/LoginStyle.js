import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  boxLogo: {
    alignItems: "center",
  },
  icLogo: {
    width: 200,
    resizeMode: "contain",
  },

  textTitle: {
    fontSize: 35,
    color: "#000000",
    fontFamily: "PatrickHand",
    marginStart: 15,
    alignSelf: "center",
  },

  textTitleStatus: {
    fontSize: 19,
    color: "#d4d4d4",
    fontFamily: "PatrickHand",
    marginRight: 10,
  },
  textStatus: {
    fontSize: 19,
    fontFamily: "PatrickHand",
    marginLeft: 15,
  },

  buttonSave: {
    marginHorizontal: 20,
    backgroundColor: "#0B5ED7",
    marginTop: 40,
    borderRadius: 15,
    marginBottom: 40,
    elevation: 5,
  },
  textButtonSave: {
    fontSize: 19,
    alignSelf: "center",
    marginVertical: 10,
    color: "white",
    fontFamily: "SignikaNegative",
  },
});
