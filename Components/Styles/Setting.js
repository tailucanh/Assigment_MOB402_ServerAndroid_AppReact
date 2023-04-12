import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  boxInfo: {
    flex: 2,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    alignItems: "center",
  },
  btnShowInfo: {
    width: "25%",
    height: 8,
    backgroundColor: "#12204d",
    borderRadius: 20,
    marginTop: 10,
  },

  icAvatar: {
    height: 80,
    width: 80,
    overflow: "hidden",
    borderRadius: 150 / 2,
    borderWidth: 2,
    borderColor: "#12204d",
    marginTop: 8,
  },
  textTitleName: {
    fontFamily: "Sriracha",
    fontSize: 25,
    color: "#264896",
  },
  textContent: {
    fontFamily: "Sriracha",
    fontSize: 15,
    color: "#072053",
  },
  containerDetail: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  boxInfoDetail: {
    width: "90%",
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 25,
    alignSelf: "center",
    elevation: 10,
    zIndex: 2,
  },
  childInfo1: {
    flexDirection: "row",
  },
  icAvatarDetail: {
    height: 100,
    width: 100,
    overflow: "hidden",
    borderRadius: 20,
    marginRight: 20,
    elevation: 3,
  },
  textContentDetail: {
    fontFamily: "Sriracha",
    fontSize: 17,
    color: "#000000",
  },
  childInfo2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  textChildTitle: {
    color: "#2f63db",
    fontFamily: "SignikaNegative",
  },
  textChildContent: {
    fontFamily: "Sriracha",
    fontSize: 16,
    color: "#3a3a3a",
    alignSelf: "center",
  },
  boxBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#426ad6",
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderRadius: 8,
    elevation: 5,
  },
  icPlus: {
    width: 25,
    height: 25,
    resizeMode: "cover",
    marginRight: 5,
  },
  textButton: {
    color: "#ffffff",
    fontFamily: "SignikaNegative",
    fontSize: 14,
  },
  boxLogout: {
    marginTop: 40,

    backgroundColor: "#ffffff",
    borderColor: "#898989",
    borderWidth: 1,
    marginHorizontal: 20,
    padding: 5,
    borderRadius: 8,
  },
  textLogout: {
    fontSize: 25,
  },
});
