import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const ToolTip = ({ title = "bhavana" }) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.tooltip} onPress={toggleHandler}>
          <Text style={styles.tooltipText}>i</Text>
        </TouchableOpacity>
        {toggle && (
          <View style={styles.tooltipContainer}>
            <View style={styles.tooltipContainerTriangle} />
            <Text style={styles.tooltipContainerText}>{title}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  tooltip: {
    backgroundColor: "red",
    width: 18,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
  },
  tooltipText: {
    color: "black",
  },
  tooltipContainer: {
    position: "absolute",
    backgroundColor: "green",
    borderRadius: 5,
    padding: 5,
    top: "100%",
    marginTop: 10,
    // marginLeft: 100,
    width: 300,
    transform: [{ translateX: -25 }],
  },
  tooltipContainerTriangle: {
    position: "absolute",
    top: -10,
    left: 10,
    width: 0,
    height: 0,
    backgroundColor: "yellow",
    borderStyle: "solid",
    borderTopWidth: 0,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    // borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#ffffff",
    borderLeftColor: "transparent",
  },
  tooltipContainerText: {
    lineHeight: 18,
    padding: 16,
    fontFamily: "Arial",
    textAlign: "center",
  },
});

export default ToolTip;
