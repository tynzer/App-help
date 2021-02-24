import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, TouchableOpacity,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AyudaHeader from '../Components/AyudaHeader';
import AyudaTittle from '../Components/AyudaTittle';
import AyudaBody from '../Components/AyudaBody';

const EnviosAyuda = ({route,navigation}) => {

const {enviosText} = route.params;
const tittleText= "Los locales tienen un sistema de delivery y de take away. Cuando seleciones envíos un delivery irá con tu pedido a la direcicción que hayas configurado. Puede ser que hayan restos o locales que solo trabajen con opcición de take away. "

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back" size={32} color="#969696" />
      <StatusBar style="auto" />
    </TouchableOpacity>
    <AyudaHeader header ={enviosText}></AyudaHeader>
    <AyudaTittle tittle = {tittleText}></AyudaTittle>
    <Image style={styles.foto} source = {require("../assets/EnviosAyuda.png")} resizeMode="stretch" />
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
      margin: 100,          
    width: 320,
    height:250
  }
});

export default EnviosAyuda;
