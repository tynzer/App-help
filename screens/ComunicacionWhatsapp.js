import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import AyudaHeader from "../Components/AyudaHeader";

const ComunicacionWhatsapp = ({ route, navigation }) => {
  const { comunicacionWhatsappText } = route.params;
  const bodyText =
    "Pódes comunicarte por Whatsapp al comercio para resolver dudas frecuentes a la que estas comprando, recomendamos leer bien la publicación del artículo para saber evitar preguntar inncesariamente.";

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={32} color="#969696" />
        <StatusBar style="auto" />
      </TouchableOpacity>
      <AyudaHeader header={comunicacionWhatsappText}></AyudaHeader>
      <View style={styles.container}>
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
    paddingHorizontal: 54,
    position: "absolute",
    textAlign: "center",
    color: "#969696",
    fontSize: 18,
  },
  icon: {
    top: 320,
    position: "absolute",
  },
});

export default ComunicacionWhatsapp;
