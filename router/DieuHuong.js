import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Trangchu from "../components/trangchu/Trangchu";
import Thongtindichhai from "../components/thongtindichhai/Thongtindichhai";
import Dangky from "../components/chuongtrinhquettichdiem/dangky/Dangky";
import Dangnhap from "../components/chuongtrinhquettichdiem/dangnhap/Dangnhap";
import Trangcanhan from "../components/chuongtrinhquettichdiem/trangcanhan/Trangcanhan";
import Quetcode from "../components/chuongtrinhquettichdiem/trangcanhan/quetcode/Quetcode";
import Lichsutichdiem from "../components/chuongtrinhquettichdiem/trangcanhan/lichsutichdiem/Lichsutichdiem";
import Thongtinsanpham from "../components/thongtinsanpham/Thongtinsanpham";
import Hoatdong from "../components/hoatdong/Hoatdong";
import Dieukhoan from "../components/chuongtrinhquettichdiem/dangnhap/dieukhoan/Dieukhoan";
import Xacnhanotp from "../components/chuongtrinhquettichdiem/dangky/xacnhanotp/Xacnhanotp";
import Thongtinlienhe from "../components/chuongtrinhquettichdiem/trangcanhan/thongtinlienhe/Thongtinlienhe";
import Thongtinchuongtrinh from "../components/chuongtrinhquettichdiem/trangcanhan/thongtinchuongtrinh/Thongtinchuongtrinh";
import Chitietchuongtrinh from "../components/chuongtrinhquettichdiem/trangcanhan/thongtinchuongtrinh/chitietchuongtrinh/Chitietchuongtrinh";
import Capnhat from "../components/chuongtrinhquettichdiem/trangcanhan/capnhat/Capnhat";

const Stack = createNativeStackNavigator();
function DieuHuong() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Trangchu"
          component={Trangchu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Thongtindichhai"
          component={Thongtindichhai}
          options={{ title: "Thông tin dịch hại" }}
        />
        <Stack.Screen
          name="Thongtinsanpham"
          component={Thongtinsanpham}
          options={{ title: "Thông tin sản phẩm" }}
        />
        <Stack.Screen
          name="Hoatdong"
          component={Hoatdong}
          options={{ title: "Hoạt động Phú Nông" }}
        />
        <Stack.Screen
          name="Dangky"
          component={Dangky}
          options={{ title: "Đăng ký tài khoản" }}
        />
        <Stack.Screen
          name="Dangnhap"
          component={Dangnhap}
          // options={{ title: "Đăng nhập" }}
          options={({ navigation }) => ({
            title: "Đăng nhập",
            headerLeft: () => (
              <Button
                onPress={() => navigation.navigate("Trangchu")}
                title="Trang chủ"
                color="#007BFF"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Trangcanhan"
          component={Trangcanhan}
          options={({ navigation }) => ({
            title: "Thông tin cá nhân",
            headerShown: false
            // headerLeft: () => (
            //   <Button
            //     // onPress={() => navigation.navigate("Trangchu")}
            //     onPress={()=>navigation.dispatch(
            //       CommonActions.reset({
            //         index: 0,
            //         routes: [
            //           {
            //             name: 'Trangchu',
            //           },
            //         ],
            //       })
            //     )}
            //     title="Trang chủ"
            //     color="#007BFF"
            //   />
            // ),

          })}
        />
        <Stack.Screen
          name="Capnhat"
          component={Capnhat}
          options={{ title: "Cập nhật thông tin" }}
        />
        <Stack.Screen
          name="Quetcode"
          component={Quetcode}
          options={{ title: "Quét code QR" }}
        />
        <Stack.Screen
          name="Lichsutichdiem"
          component={Lichsutichdiem}
          options={{ title: "Lịch sử tích điểm" }}
        />
        <Stack.Screen
          name="Dieukhoan"
          component={Dieukhoan}
          options={{ title: "Điều khoản tham gia" }}
        />
        <Stack.Screen
          name="Xacnhanotp"
          component={Xacnhanotp}
          options={{ title: "Xác nhận mã OTP" }}
        />
        <Stack.Screen
          name="Thongtinchuongtrinh"
          component={Thongtinchuongtrinh}
          options={{ title: "Danh sách chương trình" }}
        />
        <Stack.Screen
          name="Chitietchuongtrinh"
          component={Chitietchuongtrinh}
          options={{ title: "Chi tiết chương trình" }}
        />
        <Stack.Screen
          name="Thongtinlienhe"
          component={Thongtinlienhe}
          options={{ title: "Thông tin liên hệ" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DieuHuong;
