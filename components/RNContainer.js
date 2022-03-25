import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Button, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get("window").width;
const HALF_WIDTH = width / 2;

const RNContainer = ({ title, onPress, style, children, visible, rightAction }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={[styles.header, !visible && { display: "none" }]}>
        <Button style={styles.back} title="Trang chủ" {...{ onPress }} />
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {rightAction && rightAction}
      </View>
      {children}
    </SafeAreaView>
  );
};

RNContainer.propTypes = {
  title: PropTypes.string.isRequired,
  enableFilter: PropTypes.bool,
  onPress: PropTypes.func,
  rightAction: PropTypes.node
};

RNContainer.defaultProps = {
  enableFilter: true,
  onPress: () => {},
  style: null,
  visible: true,
  rightAction: null
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingVertical: 3,
  },
  header: {
    position: "relative",
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  title: {
    flex: 1,
    paddingHorizontal: 30,
    fontSize: 16,
    // textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    // position: "absolute",
    width: width,
    left: HALF_WIDTH,
    transform: [{ translateX: -HALF_WIDTH }],
  },
  back: {
    // textAlign: "center",
    paddingHorizontal: 10,
    zIndex: 10000,
  },
});

export default RNContainer;
