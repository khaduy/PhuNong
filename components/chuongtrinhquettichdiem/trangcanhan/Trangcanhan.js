import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useMemo, useState } from "react";
import { useIsFocused, CommonActions } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";
import axios from "axios";
import styles from "./style";
import RNContainer from "../../RNContainer";

function Trangcanhan({ navigation }) {
  const { width } = useWindowDimensions();

  const logout = async (e) => {
    const a = "a";
    await AsyncStorage.setItem("checkLogin", a);
    await AsyncStorage.removeItem("key");
    await navigation.navigate("Dangnhap");
    navigation.setOptions({ title: "Updated!" });
  };
  const [maND, setMaND] = useState("");
  const [tenND, setTenND] = useState("");
  const [sdt, setSdt] = useState("");
  const [daiLy, setDaiLy] = useState("");
  const fetchNongDan = async () => {
    const resp = await AsyncStorage.getItem("key");
    const response = await JSON.parse(resp);
    const { data } = await axios.get(
      `http://113.161.206.49/pn-pnf/api/NongDan?id=${response[0].NongDanID}&token=${response[0].Token}`
    );
    const result = await JSON.parse(data);
    setMaND(result[0].NongDanID);
    setTenND(result[0].TenNongDan);
    setSdt(response[0].SDT);
    const daily = await AsyncStorage.getItem("daily");
    setDaiLy(daily);
    console.log("daily", daily)
    console.log(result);
  };
  const [tichDiem, setTichDiem] = useState("");
  const fetchTichDiem = async () => {
    const resp = await AsyncStorage.getItem("key");
    const response = await JSON.parse(resp);
    const { data } = await axios.get(
      `http://113.161.206.49/pn-pnf/api/NongDan?nongdanid=${response[0].NongDanID}&token=${response[0].Token}`
    );
    // const result = await JSON.parse(data);
    setTichDiem(`<div>${data}</div>`);
    // console.log("abc", data);
  };
  const isFocused = useIsFocused();
  useEffect(async () => {
    if (isFocused) {
      fetchTichDiem();
      fetchNongDan();
      const c = "c";
      await AsyncStorage.setItem("checkLogin", c);
      console.log("c");
    }
  }, [isFocused]);

  const source = useMemo(() => {
    return {
      html: tichDiem,
    };
  }, [tichDiem]);

  const goBack = () =>
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "Trangchu",
          },
        ],
      })
    );

  // console.log("tichDiem", tichDiem);
  return (
    <RNContainer
      title="THÔNG TIN CÁ NHÂN"
      onPress={goBack}
      rightAction={
        <Button style={styles.back} title="Đăng xuất" onPress={logout} />
      }
    >
      <View style={styles.wrap}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.header}>
              <Text style={styles.text1}>THÔNG TIN NÔNG DÂN</Text>
              <Button title="Cập nhật" color="#04CA15" onPress={() => navigation.navigate("Capnhat")} />
            </View>
            <View style={styles.box1}>
              <View style={styles.info}>
                <Text style={styles.text2}>Mã nông dân: </Text>
                <Text>{maND}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.text2}>Họ tên: </Text>
                <Text>{tenND}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.text2}>SĐT: </Text>
                <Text>{sdt}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.text2}>Đại lý: </Text>
                <Text>{daiLy}</Text>
              </View>
              <View>
                <Text />
              </View>

              <Text style={styles.text3}>TÍCH LŨY ĐIỂM</Text>
              <RenderHtml contentWidth={width} {...{ source }} />
            </View>

            <View style={styles.header1}>
              <Text style={styles.text1}>CHƯƠNG TRÌNH NÔNG DÂN</Text>
              <Button title=" " color="#04CA15" />
            </View>
            <View>
              <TouchableOpacity
                style={styles.btn1}
                onPress={() => navigation.navigate("Quetcode")}
              >
                <Text>Quét code</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn1}
                onPress={() => navigation.navigate("Quetcode")}
              >
                <Text>Nhập tay</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn1}
                onPress={() => navigation.navigate("Quetcode")}
              >
                <Text>Chọn file ảnh</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn1}
                onPress={() => navigation.navigate("Lichsutichdiem")}
              >
                <Text>Lịch sử tích điểm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn1}
                onPress={() => navigation.navigate("Thongtinchuongtrinh")}
              >
                <Text>Thông tin chương trình</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn1}
                onPress={() => navigation.navigate("Thongtinlienhe")}
              >
                <Text>Thông tin liên hệ</Text>
              </TouchableOpacity>
            </View>
            {/* 
            <View>
              <Button
                title="Quét code"
                color="#04CA15"
                onPress={() => navigation.navigate("Quetcode")}
              />
            </View>
            <View>
              <Button
                title="Lịch sử tích điểm"
                color="#04CA15"
                onPress={() => navigation.navigate("Lichsutichdiem")}
              />
            </View> */}
          </ScrollView>
        </SafeAreaView>
      </View>
    </RNContainer>
  );
}

export default Trangcanhan;
