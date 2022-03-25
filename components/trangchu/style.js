import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  header: {
   backgroundColor: "#28a745",
  },
  image1: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center"
  },
  image2: {
    flex: 6,
    textAlign: "center",
    justifyContent: "center"
  },
  image3: {
    flex: 1,
    // paddingTop: 10,
    marginTop: 20,
    marginLeft: 15,
    height: 30,
    width: "30%",
  },
  hairline: {
    backgroundColor: '#28a745',
    height: 1,
    width: "100%",
  },
  content: {
    flex: 1,
    marginHorizontal: 50,
  },
  fixBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 100,
    
  },
  btn1: {
    backgroundColor: "#009F42",
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 10,
  },
  imgBtn1: {
    flex: 1,
    height: 40,
    width: 60,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  fixBtn2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50
  },
})

export default styles