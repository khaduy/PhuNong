import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useIsFocused, CommonActions } from "@react-navigation/native";
import styles from "./style";
function Thongtinchuongtrinh({ navigation }) {
  const [chuongTrinh, setChuongTrinh] = useState([]);
  const fetchChuongTrinh = async () => {
    const resp = await AsyncStorage.getItem("key");
    const response = await JSON.parse(resp);
    const { data } = await axios.get(
      `http://113.161.206.49/pn-pnf/api/ChuongTrinhNongDan?chinhanhid=${response[0].ChiNhanhID}&token=${response[0].Token}&loainguoidung=1`
    );
    const result = await JSON.parse(data);
    setChuongTrinh(result);
    // console.log("abc", result);
  };
  const isFocused = useIsFocused();
  useEffect(async () => {
    if (isFocused) {
      fetchChuongTrinh();
    }
  }, [isFocused]);

  const navigateToDetail = (id)=>{
    navigation.navigate(
      "Chitietchuongtrinh",{id}
    );
  }

  return (
    <View style={styles.wrap}>
      {chuongTrinh.map((item, index) => (
        <View key={index} style={styles.box1}>
          <TouchableOpacity
            onPress={() =>
              navigateToDetail(item.ChuongTrinhNDID)
            }
          >
            <Text style={styles.text1}>{item.TenChuongTrinh}</Text>
            <Text style={styles.text2}>
              Thời gian:{" "}
              <Text style={styles.text3}>
                từ ngày {item.TuNgay} đến ngày {item.DenNgay}
              </Text>
            </Text>
            <Text>-------------------</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

export default Thongtinchuongtrinh;
