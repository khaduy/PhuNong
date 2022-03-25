import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useIsFocused, CommonActions } from "@react-navigation/native";
import styles from "./style";

function Chitietchuongtrinh({ navigation, route }) {
  const { id } = route.params;
  const [chiTietChuongTrinh, setChiTietChuongTrinh] = useState([]);
  const [tenCT, setTenCT] = useState("");
  const [tuNgay, setTuNgay] = useState("");
  const [denNgay, setDenNgay] = useState("");
  const [loaiChuongTrinh, setLoaiChuongTrinh] = useState("");
  const [ghiChu, setGhiChu] = useState("");
  const fetchChiTietChuongTrinh = async () => {
    const resp = await AsyncStorage.getItem("key");
    const response = await JSON.parse(resp);
    const { data } = await axios.get(
      `http://113.161.206.49/pn-pnf/api/ChuongTrinhNongDan?chuongtrinhid=${id}&token=${response[0].Token}`
    );
    const result = await JSON.parse(data);
    setChiTietChuongTrinh(result);
    setTenCT(result[0].TenChuongTrinh);
    setTuNgay(result[0].TuNgay);
    setDenNgay(result[0].DenNgay);
    setLoaiChuongTrinh(result[0].TenLoaiChuongTrinh);
    setGhiChu(result[0].GhiChu);
    console.log("abc", result);
  };
  const isFocused = useIsFocused();
  useEffect(async () => {
    if (isFocused) {
      fetchChiTietChuongTrinh();
    }
  }, [isFocused]);
  return (
    <View style={styles.wrap}>
      <SafeAreaView>
        <ScrollView>
          {id == 1 ? (
            <View>
              {chiTietChuongTrinh.map((item, index) => (
                <View key={index}>
                  <Text style={styles.text1}>
                    Tên CT: <Text style={styles.text2}>{tenCT}</Text>
                  </Text>
                  <Text style={styles.text1}>
                    Thời gian:{" "}
                    <Text style={styles.text3}>
                      từ ngày {tuNgay} đến ngày {denNgay}
                    </Text>
                  </Text>
                  <Text style={styles.text1}>
                    Loại chương trình:{" "}
                    <Text style={styles.text3}>{loaiChuongTrinh}</Text>
                  </Text>
                </View>
              ))}
            </View>
          ) : (
            <View>
              <Text style={styles.text1}>
                Tên CT: <Text style={styles.text2}>{tenCT}</Text>
              </Text>
              <Text style={styles.text1}>
                Thời gian:{" "}
                <Text style={styles.text3}>
                  từ ngày {tuNgay} đến ngày {denNgay}
                </Text>
              </Text>
              <Text style={styles.text1}>
                Loại chương trình:{" "}
                <Text style={styles.text3}>{loaiChuongTrinh}</Text>
              </Text>
              <Text style={styles.text4}>
                Ghi chú: <Text style={styles.text3}>{ghiChu}</Text>
              </Text>
              <Text style={styles.text5}>Giải thưởng: </Text>
              {chiTietChuongTrinh.map((item, index) => (
                <View key={index} style={styles.box1}>
                  <Text style={styles.text4}>{item.GiaiThuong}</Text>
                  <Text style={styles.text3}>
                    SL: {item.SoLuong} giải - Trị giá mỗi giải:{" "}
                    <Text>{item.TriGia} VND</Text>
                  </Text>
                </View>
              ))}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default Chitietchuongtrinh;
