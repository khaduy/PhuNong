import { View, Text } from "react-native";
import React from 'react';
import styles from "./App.components.style";
import Dieuhuong from "./router/DieuHuong";
export default function App() {
  return (
    <View style={styles.container}>
      <Dieuhuong></Dieuhuong>
    </View>
  );
}
