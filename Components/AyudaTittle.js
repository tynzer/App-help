import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AyudaTittle = ({tittle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{tittle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,     
    alignItems: "center",
  },
   titleText: {
    fontSize: 20,
    textAlign: "center" ,
    color : '#969696',
    marginHorizontal : 45,
  },
});

export default AyudaTittle;