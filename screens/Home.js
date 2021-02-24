import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('Menu')}>
        <Ionicons name="menu" size={48} color="black" />
        <StatusBar style="auto" />        
      </TouchableOpacity>
      <Text style={styles.titleText}>Bienvenido a la app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
     
  },
  menu: {
    top: 40,
    left: 10,
    position: "absolute",
  },
  titleText: {
    fontSize: 63,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;
