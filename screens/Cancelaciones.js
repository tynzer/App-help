import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, TouchableOpacity,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AyudaHeader from '../Components/AyudaHeader';
import AyudaTittle from '../Components/AyudaTittle';
import AyudaBody from '../Components/AyudaBody';

const Cancelaciones = ({route,navigation}) => {

const {cancelacionesText} = route.params;
const tittleText= "luego de finalizar tus compras, tenes la opción de arrrepentirte y de cancelar la compra en el resumen de tu compra."

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back" size={32} color="#969696" />
      <StatusBar style="auto" />
    </TouchableOpacity>
    <AyudaHeader header ={cancelacionesText}></AyudaHeader>
    <AyudaTittle tittle = {tittleText}></AyudaTittle>
    <Image style={styles.foto} source = {require("../assets/Cancelaciones.png")} resizeMode="stretch" />
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
    height:480
  }
});

export default Cancelaciones;
