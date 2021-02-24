import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, TouchableOpacity,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AyudaHeader from '../Components/AyudaHeader';
import AyudaTittle from '../Components/AyudaTittle';

const PagarCompras = ({route,navigation}) => {
    const { pagarText } = route.params;

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back" size={32} color="#969696" />
      <StatusBar style="auto" />
    </TouchableOpacity>
    <AyudaHeader header ={"Compras"}></AyudaHeader>
    <AyudaTittle tittle = {pagarText}></AyudaTittle>
    <Image style={styles.foto} source = {require("../assets/PagarCompras.png")} resizeMode="stretch" />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',  
  },
  back: {
    top: 40,
    left: 10,
    position: "absolute",
  },  
  foto : {    
    width: 350,
    height:330
  }
});

export default PagarCompras;
