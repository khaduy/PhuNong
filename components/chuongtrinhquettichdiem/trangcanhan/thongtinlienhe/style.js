import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  box1: {
    borderColor: "#DBDBDB",
    borderWidth: 1,
    padding: 10,
  },
  header: {
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
    padding: 5,
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  text1: {
    fontWeight: "bold",
    color: "#0955F9",
    fontSize: 18,
  },
  text2: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 17,
  },
  text3: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 16,
  },
  text4: {
    marginBottom: 20,
    fontSize: 16,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    fontSize: 16,
  },
  text5: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
});

export default styles;
