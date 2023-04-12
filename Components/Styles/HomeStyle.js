import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  ic_user: {
    width: 50,
    height: 50,
    marginTop: 20,
    borderRadius: 300,
    resizeMode: "contain",
  },
  textTitle: {
    fontSize: 25,
    color: "#000000",
    fontFamily: "PatrickHand",
    marginStart: 8,
  },
  textUserName: { fontStyle: "italic", color: "#0B5ED7" },

  inputSearch: {
    backgroundColor: "#ffffff",
    height: 45,
    borderColor: "#7c7b7b",
    borderWidth: 1,
    marginHorizontal: 15,
    paddingLeft: 15,
    color: "#070707",
    fontSize: 16,
    borderRadius: 10,
    marginTop: 20,
    elevation: 5,
  },
  boxTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  icTitle: { fontSize: 24 },
  textTitleHome: { fontSize: 20, fontFamily: "Sriracha", marginStart: 5 },
  listContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: 20,
  },
  boxEmptyData: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgEmpty: {
    width: "60%",
    height: 200,
    resizeMode: "contain",
  },
  textEmpty: {
    color: "#363636",
    resizeMode: "contain",
    fontSize: 25,
    fontFamily: "PatrickHand",
  },
});
