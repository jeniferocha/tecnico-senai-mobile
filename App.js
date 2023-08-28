import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import RedeSocial from "./screens/RedeSocial/RedeSocialScreen";
import FortuneCookie from "./screens/FortuneCookie/FortuneCookieScreen";
import Crud from "./screens/Crud/CrudScreen";
import SCREENS from "./constants/screens";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} options={{ title: "Home" }} />
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
