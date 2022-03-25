import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground,
  TextInput,
  Keyboard,
  Button,
  Switch,
  Alert,
  Image
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import styles from "./style";

function Dangnhap({ navigation }) {
  // Check nho dang nhap
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [dienThoai, setDienThoai] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const send = async (e) => {
    console.log("abc", dienThoai);
    console.log("abc", matKhau);
    if (dienThoai === "" || matKhau === "") {
      Alert.alert("", "Vui lòng nhập đầy đủ thông tin", [
        {
          text: "OK",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]);
      console.log("nhập vô");
    } else {
      console.log("nhập rồi");
      const { data } = await axios.get(
        `http://113.161.206.49/pn-pnf/api/DangNhap?username=${dienThoai}&password=${matKhau}&ip=10.92.22.191&ngayht=2022-03-14%2008:26:07.437&version=1.2%20-%20Build:%2040&tokendevice=e7LMp1s2s64:APA91bE3CUFidQdf1lVjIG9ib0GYEzGjsw9RNRRpKM-98OHhIjMH0WmWpyTOXMSIBXoRubkdIENWZzkOsxNZLuPkzHy_27REM9mwu1fiYYpqWaH0wouJqs09uhv8S0Rx_ddwgYSqr4Dr&androidid=d50ba2296c6030cb&loainguoidung=1`
      );
      if (data == "Tên đăng nhập hoặc mật khẩu không đúng!") {
        Alert.alert("", "Tên đăng nhập hoặc mật khẩu không đúng!", [
          {
            text: "OK",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ]);
      } else {
        console.log("login ok");
        await AsyncStorage.setItem("key", data);
        navigation.navigate("Trangcanhan");
      }
    }
  };

  const isFocused = useIsFocused();
  useEffect(async () => {
    if (isFocused) {
      const resp = await AsyncStorage.getItem("checkLogin");
      if (resp == "b") {
        console.log("b");
        navigation.navigate("Trangcanhan");
      } else if (resp == "c") {
        console.log("c");
        navigation.navigate("Trangchu");
      } else if (resp == "a") {
        console.log("a");
      }
    }
  }, [isFocused]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrap}
    >
      <ImageBackground
        source={require("./images/backgrounddangnhap.jpg")}
        resizeMode="stretch"
        style={styles.image1}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <TextInput
              style={styles.textInput1}
              placeholder="Nhập số điện thoại"
              onChangeText={setDienThoai}
            />
            <TextInput
              secureTextEntry={true}
              style={styles.textInput2}
              placeholder="Mật khẩu"
              onChangeText={setMatKhau}
            />
            <View style={styles.checkRemember}>
              {/* <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text>Ghi nhớ tôi</Text> */}
            </View>
            <View style={styles.fixToText1}>
              <Button
                title="ĐĂNG NHẬP"
                style={styles.btn1}
                color="#fff"
                onPress={send}
              />
            </View>
            <View style={styles.fixToText2}>
              <Button
                title="ĐĂNG KÝ"
                style={styles.btn2}
                color="#fff"
                // onPress={() => navigation.navigate("Dangky")}
                onPress={() => navigation.navigate("Dieukhoan")}
              />
            </View>
            <View style={styles.fixToText3}>
              <Button
                title="ĐIỀU KHOẢN THAM GIA"
                style={styles.btn3}
                color="#000000"
                onPress={() => navigation.navigate("Dieukhoan")}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

export default Dangnhap;
