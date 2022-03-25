import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image1: {
    flex: 1,
    // textAlign: "center",
    // justifyContent: "center"
  },
  wrap: {
    flex: 1,
  },
  inner: {
    padding: 24,
    paddingTop: 120,
    flex: 1,
    // justifyContent: "space-around",
  },

  textInput1: {
    height: 40,
    backgroundColor: "#fff",
    borderColor: "#000000",
    borderWidth: 1,
    // marginTop: 100,
    marginBottom: 20,
    padding: 10,
  },
  textInput2: {
    height: 40,
    backgroundColor: "#fff",
    borderColor: "#000000",
    borderWidth: 1,
    padding: 10,
  },
  checkRemember: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 20
  },
  fixToText1: {
    marginBottom: 20,
    backgroundColor: "#00C8BB",
  },
  btn1: {
    padding: 10,
    margin: 10,
  },
  fixToText2: {
    marginBottom: 20,
    backgroundColor: "#04CA15"
  },
  btn2: {
    padding: 10,
    margin: 10,
  },
  fixToText3: {
    marginBottom: 20,
    backgroundColor: "#99FFFF"
  },
  btn3: {
    padding: 10,
    margin: 10,
  },
});

export default styles;
