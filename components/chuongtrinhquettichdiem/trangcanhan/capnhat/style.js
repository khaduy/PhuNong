import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  title: {
    color: "#007bff",
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  selectBox: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
  },
  quetanh: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#007bff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 80,
    paddingVertical: 10,
    marginBottom: 10,
  },
  iconPhoto: {
    height: 25,
    width: 40,
  },
  textPhoto: {
    color: "#007bff",
  },
  showPhoto: {
    textAlign: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  afterPhoto: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    textAlign: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: "cover",
  },

  btnContainer: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 12,
    paddingHorizontal: 0,
  },

  checkRead: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "flex-start",
  },


  fixToText: {
    marginTop: 12,
  },
  btn1: {
    height: 10,
    width: 50,
  },
  btn2: {
    width: 50,
  },
});

export default styles;
