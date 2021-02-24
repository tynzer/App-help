import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
 
const AyudaBody = ({navigation}) => {

const comprasText = "Compras" ;
const cancelacionesText = "Cancelaciones";
const comunicacionWhatsappText = "Comunicación por Whatsapp";
const enviosText = "Envíos";
const retirosText = "Retiro en el local";

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.buttonTop} onPress={() => navigation.navigate("Compras", {comprasText})}>{comprasText}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.button} onPress={() => navigation.navigate("Cancelaciones",{cancelacionesText})}>{cancelacionesText}</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.button} onPress={() => navigation.navigate("ComunicacionWhatsapp", {comunicacionWhatsappText})}>{comunicacionWhatsappText}</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.button}onPress={() => navigation.navigate("EnviosAyuda", {enviosText})}>{enviosText}</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.buttonBot} onPress={() => navigation.navigate("RetirosAyuda", {retirosText})}>{retirosText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: "center",
  },
  buttonTop: {
    height: 58,
    width: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
    textAlign: "center",
    margin: 1,
    padding: 15,
    color: "#969696",
    fontSize: 18,
  },
  button: {
    height: 58,
    width: 300,
    backgroundColor: "white",
    textAlign: "center",
    margin: 1,
    padding: 15,
    color: "#969696",
    fontSize: 18,
  },
  buttonBot: {
    height: 58,
    width: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: "hidden",
    textAlign: "center",
    backgroundColor: "white",
    margin: 1,
    padding: 15,
    color: "#969696",
    fontSize: 18,
  },
});

export default AyudaBody;
