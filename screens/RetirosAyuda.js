import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AyudaHeader from "../Components/AyudaHeader";
import AyudaTittle from "../Components/AyudaTittle";

const RetirosAyuda = ({ route, navigation }) => {
  const { retirosText } = route.params;
  const tittleText =
    "Los locales tienen un sistema de delivery y de take away. Cuando seleciones Take Away, el restaurante te dirá una hora aproximada en lo que pódes retirar tu comida/prodcuto. ";

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={32} color="#969696" />
        <StatusBar style="auto" />
      </TouchableOpacity>
      <AyudaHeader header={retirosText}></AyudaHeader>
      <AyudaTittle tittle={tittleText}></AyudaTittle>
      <Image
        style={styles.foto}
        source={require("../assets/RetirosAyuda.png")}
        resizeMode="stretch"
      />
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
  back: {
    top: 40,
    left: 10,
    position: "absolute",
  },
  foto: {
    margin: 100,
    width: 320,
    height: 250,
  },
});

export default RetirosAyuda;
