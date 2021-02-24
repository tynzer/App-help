import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ComprasBody = ({navigation}) => {

const elegirText= "¿Cómo elegir a qué comercio comprar?";
const pagarText = "¿Cómo pagar tu compra?";
const retirarText = "¿Cómo recibir o retirar el producto?";
const devolucionesText = "Devoluciones" 

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.buttonTop} onPress={() => navigation.navigate("ElegirCompras",{elegirText})} >{elegirText}</Text>
      </TouchableOpacity>      
      <TouchableOpacity>
        <Text style={styles.button} onPress={() => navigation.navigate("PagarCompras",{pagarText})}>{pagarText}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.button} onPress={() => navigation.navigate("RetirarCompras",{retirarText})}>{retirarText}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonBot} onPress={() => navigation.navigate("DevolucionesCompras",{devolucionesText})}>{devolucionesText}</Text>
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
    padding: 5,
    color: "#969696",
    fontSize: 18,
  },
  button: {
    height: 58,
    width: 300,
    backgroundColor: "white",
    textAlign: "center",
    margin: 1,
    textAlignVertical: "center",
    color: "#969696",
    fontSize: 18,
    paddingHorizontal : 30
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

export default ComprasBody;
