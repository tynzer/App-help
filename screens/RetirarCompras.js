import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import AyudaHeader from "../Components/AyudaHeader";
import AyudaTittle from "../Components/AyudaTittle";

const RetirarCompras = ({ route, navigation }) => {
  const { retirarText } = route.params;
  const bodyText =
    "Podés recibir o retirar el producto según el tiempo estipulado por el comercio, te recomendamos que puedas charlar con el comercio mediante el ícono de whatsapp.";

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={32} color="#969696" />
        <StatusBar style="auto" />
      </TouchableOpacity>
      <AyudaHeader header={"Compras"}></AyudaHeader>
      <View style={styles.container}>
        <AyudaTittle tittle={retirarText}></AyudaTittle>
        <Text style={styles.text}>{bodyText}</Text>
        <FontAwesome5
          style={styles.icon}
          name="whatsapp"
          size={80}
          color="#48c859"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
  back: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  text: {
    top: 100,
    paddingHorizontal: 50,
    position: "absolute",
    textAlign: "center",
    color: "#969696",
    fontSize: 18,
  },
  icon: {
    top: 270,
    position: "absolute",
  },
});

export default RetirarCompras;
