import { View, Text, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
function Xacnhanotp() {
  const [otp, setOtp] = useState("");
  return (
    <View style={styles.wrap}>
      <View style={styles.header}>
        <Text style={styles.text}>
          Mã OTP đang được gửi đến số điện thoại bạn đã đăng ký!
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="Nhập mã OTP"
          onChangeText={setOtp}
          style={styles.textInput}
        />
      </View>
      <View style={styles.boxBtn1}>
        <Button
          title="XÁC NHẬN"
          style={styles.btn1}
          color="#fff"
          onPress={() => navigation.navigate("Dieukhoan")}
        />
      </View>
      <View style={styles.boxBtn2}>
        <Button
          title="Nhấn tại đây để gửi lại mã"
          style={styles.btn2}
          color="#909090"
          onPress={() => navigation.navigate("Dieukhoan")}
        />
      </View>
    </View>
  );
}

export default Xacnhanotp;
