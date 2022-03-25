import { View, Text, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";

function Lichsutichdiem({ navigation }) {
  const [tenHang, setTenHang] = useState("");
  const [maChai, setMaChai] = useState("");
  const [diem, setDiem] = useState("");
  const [ngayQuet, setNgayQuet] = useState("");
  const [tichDiem, setTichDiem] = useState([]);
  const [trungThuong, setTrungThuong] = useState([]);
  const fetchTichDiem = async () => {
    const resp = await AsyncStorage.getItem("key");
    const response = await JSON.parse(resp);
    const { data } = await axios.get(
      `http://113.161.206.49/pn-pnf/api/NongDan?nongdanid=${response[0].NongDanID}&chuongtrinhndid=1&token=${response[0].Token}`
    );
    const result = await JSON.parse(data);
    setTichDiem(result);
    console.log(result)
  };
  const fetchTrungThuong = async () => {
    const resp = await AsyncStorage.getItem("key");
    const response = await JSON.parse(resp);
    const { data } = await axios.get(
      `http://113.161.206.49/pn-pnf/api/NongDan?nongdanid=${response[0].NongDanID}&chuongtrinhndid=2&token=${response[0].Token}`
    );
    const result = await JSON.parse(data);
    setTrungThuong(result);
    console.log(result)
  };

  const isFocused = useIsFocused();
  useEffect(async () => {
    if (isFocused) {
      fetchTichDiem();
      fetchTrungThuong();
    }
  }, [isFocused]);
  return (
    <View>
      <Text>TRÚNG THƯỞNG VÀ TÍCH ĐIỂM:</Text>
      {trungThuong.map((trungThuong, index) => (
        <View key={index}>
          <Text>{trungThuong.TenHang}</Text>
          <Text>Mã chai: {trungThuong.MaChai}</Text>
          <Text>Điểm: {trungThuong.Diem}</Text>
          <Text>Ngày quét: {trungThuong.NgayQuet}</Text>
          <Text>----------------------------------------------</Text>
        </View>
      ))}
      <Text>----------------------------------------------</Text>
      <Text>CHỈ TÍCH ĐIỂM:</Text>
      {tichDiem.map((tichDiem, index) => (
        <View key={index}>
          <Text>{tichDiem.TenHang}</Text>
          <Text>Mã chai: {tichDiem.MaChai}</Text>
          <Text>Điểm: {tichDiem.Diem}</Text>
          <Text>Ngày quét: {tichDiem.NgayQuet}</Text>
          <Text>----------------------------------------------</Text>
        </View>
      ))}
    </View>
  );
}

export default Lichsutichdiem;
