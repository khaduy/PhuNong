import { View, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
const Dieukhoan = () => {
  return (
    <WebView
      source={{ uri: "https://docs.google.com/gview?embedded=true&url=http://113.161.206.49/pn-app/PNF/TaiLieu/DK_THOATHUAN_PNF.pdf" }}
    />
  );
};

export default Dieukhoan;
