import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AyudaHeader = ({header}) => {
  return (
    <View style={styles.container}>    
      <Text style={styles.titleText}>{header}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
 
  titleText: {
    fontSize: 35,
    textAlign: "center",
    top: 32,
    left: 10,
    color : '#969696',
    marginHorizontal : 20,
  },
});

export default AyudaHeader;
