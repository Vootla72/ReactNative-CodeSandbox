import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomTooltip = ({ tooltipText = "bhavana", children = "test" }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handlePress = () => {
    setTooltipVisible(!tooltipVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
        {children}
      </TouchableOpacity>
      {tooltipVisible && (
        <View style={styles.tooltipContainer}>
          <View style={styles.tooltip}>
            <Text style={styles.tooltipText}>{tooltipText}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: "relative"
  },
  tooltipContainer: {
    position: "absolute",
    top: "120%",
    // left: "50%",
    // transform: [{ translateX: -50 }],
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    elevation: 2
  },
  tooltip: {
    justifyContent: "center",
    alignItems: "center"
  },
  tooltipText: {
    fontSize: 14
  }
});

export default CustomTooltip;
