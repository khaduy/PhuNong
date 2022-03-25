import {
  View,
  Text,
  ImageBackground,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
function Trangchu({ navigation }) {
  const isFocused = useIsFocused();
  const route = async () => {
    const resp = await AsyncStorage.getItem("checkLogin");
    if (resp == "a"){
      navigation.navigate("Dangnhap")
    } else if(resp == "b") {
      navigation.navigate("Trangcanhan")
    }
  };
  useEffect(async () => {
    if (isFocused) {
      const resp = await AsyncStorage.getItem("checkLogin");
      // console.log(resp)
      // const response = await JSON.parse(resp);
      if (resp === null) {
        const a = "a";
        await AsyncStorage.setItem("checkLogin", a);
        console.log("chưa đăng nhập");
      } else if(resp == "c") {
        const b = "b";
        await AsyncStorage.setItem("checkLogin", b);
        console.log("đã đăng nhập", resp)
      }      
    }
  }, [isFocused]);

  return (
    <View style={styles.wrap}>
      {/* Tren cung */}
      {/* <View style={styles.header}>
        <Text> </Text>
      </View> */}

      {/* Banner */}
      <ImageBackground
        source={require("./images/banner.jpg")}
        resizeMode="stretch"
        style={styles.image1}
      >
        <Image
          source={require("./images/logongang.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
      </ImageBackground>

      {/* Phan chinh */}
      <ImageBackground
        source={require("./images/backgroundtrangchu.png")}
        resizeMode="stretch"
        style={styles.image2}
      >
        {/* Duong ke */}
        <View>
          <Text></Text>
        </View>
        <View style={styles.hairline} />

        {/* Noi dung */}
        <View style={styles.content}>
          <View style={styles.fixBtn}>
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => navigation.navigate("Thongtindichhai")}
            >
              <Image
                source={require("./images/icon_dich_hai.png")}
                resizeMode="stretch"
                style={styles.imgBtn1}
              ></Image>
              <Text style={styles.text}>Thông tin</Text>
              <Text style={styles.text}>Dịch hại</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Thongtinsanpham")} style={styles.btn1}>
              <Image
                source={require("./images/icon_san_pham.png")}
                resizeMode="stretch"
                style={styles.imgBtn1}
              ></Image>
              <Text style={styles.text}>Thông tin</Text>
              <Text style={styles.text}>Sản phẩm</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.fixBtn2}>
            <TouchableOpacity onPress={() => navigation.navigate("Hoatdong")} style={styles.btn1}>
              <Image
                source={require("./images/icon_hoat_dong_cty.png")}
                resizeMode="stretch"
                style={styles.imgBtn1}
              ></Image>
              <Text style={styles.text}>Hoạt động của</Text>
              <Text style={styles.text}>Phú Nông</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn1}
              onPress={ (route) }
            >
              <Image
                source={require("./images/icon_menuct_quetthongtin.png")}
                resizeMode="stretch"
                style={styles.imgBtn1}
              ></Image>
              <Text style={styles.text}>Chương trình</Text>
              <Text style={styles.text}>Quét tích điểm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Trangchu;
