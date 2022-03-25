import { View, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
const Hoatdong = () => {
  return (
    <WebView
      source={{ uri: "https://phunong.com.vn/phu-nong-media" }}
    />
  );
};

export default Hoatdong;
