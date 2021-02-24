import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AyudaHeader from '../Components/AyudaHeader';
import AyudaTittle from '../Components/AyudaTittle';
import AyudaBody from '../Components/AyudaBody';

const Menu = ({navigation}) =>{
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={32} color="#969696" />
        <StatusBar style="auto" />
      </TouchableOpacity>
      <AyudaHeader header ={"Ayuda"}></AyudaHeader>
      <AyudaTittle tittle = {"¿Con qué temas querés ayuda?"}></AyudaTittle>
      <AyudaBody navigation = {navigation}></AyudaBody>
    </View>
  );
}

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
  }  
});


export default Menu 