import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b243a",
  },
  container2: {
    flex: 1,
    backgroundColor: "#141927",
  },
  touchableIcBack: {
    width: 35,
    height: 40,
  },
  icBack: {
    width: 20,
    resizeMode: "contain",
    tintColor: "#ffffff",
    marginStart: 10,
  },
  textTitle: {
    fontSize: 29,
    color: "#d4d4d4",
    fontFamily: "PatrickHand",
    marginStart: 15,
    marginTop: 30,
    alignSelf: "center",
  },
  icAddScreen: {
    width: "35%",
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
  },

  boxEmptyData: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imgEmpty: {
    width: "90%",
    height: 300,
    resizeMode: "contain",
  },
  textEmpty: {
    color: "#bebebe",
    resizeMode: "contain",
    fontSize: 25,
    fontFamily: "PatrickHand",
  },

  listContainer: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 55,
  },
  btnAdd: {
    width: 37,
    height: 37,
    backgroundColor: "#394057",
    borderRadius: 10,
    justifyContent: "center",
    marginEnd: 15,
  },
  textBtn: {
    fontSize: 25,
    textAlign: "center",
    color: "#FFFFFF",
  },
  boxTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  boxLogo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 10,
    marginBottom: 15,
  },
  btnAddLogo: {
    height: 25,
    backgroundColor: "#2a3352",
    borderRadius: 8,
    borderColor: "#526cb6",
    justifyContent: "center",
    borderWidth: 1,
    elevation: 2,
  },
  textBtnAddLogo: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "PatrickHand",
    paddingHorizontal: 20,
  },
  touchableLogo: {
    height: 100,
    width: 100,
    borderRadius: 150 / 2,
    backgroundColor: "#384569",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  icLogo: {
    height: 95,
    width: 95,
    borderRadius: 150 / 2,
    resizeMode: "center",
    overflow: "hidden",
  },
  boxRdo: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
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
    backgroundColor: "#2a3352",
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
