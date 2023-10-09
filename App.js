import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import RedeSocial from "./screens/RedeSocial/RedeSocialScreen";
import FortuneCookie from "./screens/FortuneCookie/FortuneCookieScreen";
import Crud from "./screens/Crud/CrudScreen";
import SCREENS from "./constants/screens";
import TestComponents from "./screens/TestComponents/TestComponentsScreen";
import Imc from "./screens/IMC/ImcScreen";
import Storyteller from "./screens/Storyteller/StorytellerScreen";
import ShoppingList from "./screens/ShoppingList/ShoppingListScreen";
import SplitAccount from "./screens/SplitAccount/SplitAccountScreen";
import TemperatureConverter from "./screens/TemperatureConverter/TemperatureConverterScreen";
import UnitConverter from "./screens/UnitConverter/UnitConverterScreen";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} options={{ title: "Home" }} />
        <Stack.Screen name={SCREENS.SHOPPING_LIST} component={ShoppingList} options={{ title: "Lista de Compras" }} />
        <Stack.Screen name={SCREENS.SPLIT_ACCOUNT} component={SplitAccount} options={{ title: "Dividir Conta" }} />
        <Stack.Screen name={SCREENS.UNIT_CONVERTER} component={UnitConverter} options={{ title: "Conversor de unidades" }} />
        <Stack.Screen name={SCREENS.STORYTELLER} component={Storyteller} options={{ title: "Contador de Histórias" }} />
        <Stack.Screen name={SCREENS.REDE_SOCIAL} component={RedeSocial} options={{ title: "Rede Social" }} />
        <Stack.Screen
          name={SCREENS.TEST_COMPONENTS}
          component={TestComponents}
          options={{ title: "Teste Componentes" }}
        />
        <Stack.Screen name={SCREENS.TEMPERATURE_CONVERTER} component={TemperatureConverter} options={{ title: "Conversor de temperatura" }} />
        <Stack.Screen name={SCREENS.IMC} component={Imc} options={{ title: "IMC" }} />
        <Stack.Screen name={SCREENS.REDE_SOCIAL} component={RedeSocial} options={{ title: "Rede Social" }} />
        <Stack.Screen name={SCREENS.CRUD} component={Crud} options={{ title: "Crud" }} />
        <Stack.Screen
          name={SCREENS.FORTUNE_COOKIE}
          component={FortuneCookie}
          options={{ title: "Biscoito da Sorte" }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
