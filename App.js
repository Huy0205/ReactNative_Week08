import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen_01 from "./screen/Screen_01";
import Screen_02 from "./screen/Screen_02";
import Screen_03 from "./screen/Screen_03";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="screen01">
        <Stack.Screen
          name="screen01"
          component={Screen_01}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="screen02"
          component={Screen_02}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="screen03"
          component={Screen_03}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
