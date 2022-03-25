import { View, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
const Thongtinsanpham = () => {
  return (
    <WebView
      source={{ uri: "https://phunong.com.vn/san-pham-phu-nong" }}
    />
  );
};

export default Thongtinsanpham;
