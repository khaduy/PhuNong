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

function Thongtinlienhe({ navigation }) {
  return (
    <View style={styles.wrap}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.text1}>THÔNG TIN LIÊN HỆ</Text>
            <Button title=" " color="#04CA15" />
          </View>
          <View style={styles.box1}>
            <View>
              <Text style={styles.text2}>CÔNG TY TNHH PHÚ NÔNG</Text>
              <Text style={styles.text3}>Địa chỉ:</Text>
              <Text style={styles.text4}>
                Quốc lộ 91, KV. Qui Thạnh I, Phường Trung Kiên, Quận Thốt Nốt,
                Thành Phố Cần Thơ
              </Text>
              <View style={styles.row}>
                <Text style={styles.bold}>Email: </Text>
                <Text style={styles.text}>info@phunong.com.vn</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.bold}>Website: </Text>
                <Text style={styles.text}>www.phunong.com.vn</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.bold}>NHÂN VIÊN: </Text>
                <View style={styles.text5}>
                  <Text style={styles.text}>Nguyễn Đức Trung</Text>
                </View>
              </View>
              <View style={styles.row}>
                <Text style={styles.bold}>Điện thoại: </Text>
                <Text style={styles.text}>0903877095</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.bold}>Mail: </Text>
                <Text style={styles.text}>
                  trungsg@gmail.com, phunongppp@gmail.com
                </Text>
              </View>
            </View>

            <View>
              <Text />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default Thongtinlienhe;
