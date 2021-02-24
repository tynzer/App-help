import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "./screens/Home.js";
import Menu from "./screens/Menu.js";
import Cancelaciones from "./screens/Cancelaciones.js";
import Compras from "./screens/Compras.js";
import ElegirCompras from "./screens/ElegirCompras.js";
import PagarCompras from "./screens/PagarCompras.js";
import RetirarCompras from "./screens/RetirarCompras.js";
import DevolucionesCompras from "./screens/DevolucionesCompras.js";
import ComunicacionWhatsapp from "./screens/ComunicacionWhatsapp.js";
import EnviosAyuda from "./screens/EnviosAyuda.js";
import RetirosAyuda from "./screens/RetirosAyuda.js";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          gestureDirection: "horizontal",
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Cancelaciones" component={Cancelaciones} />
        <Stack.Screen name="Compras" component={Compras} />
        <Stack.Screen name="ElegirCompras" component={ElegirCompras} />
        <Stack.Screen name="PagarCompras" component={PagarCompras} />
        <Stack.Screen name="RetirarCompras" component={RetirarCompras} />
        <Stack.Screen
          name="DevolucionesCompras"
          component={DevolucionesCompras}
        />
        <Stack.Screen
          name="ComunicacionWhatsapp"
          component={ComunicacionWhatsapp}
        />
        <Stack.Screen name="EnviosAyuda" component={EnviosAyuda} />
        <Stack.Screen name="RetirosAyuda" component={RetirosAyuda} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
