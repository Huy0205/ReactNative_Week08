import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen_02 from "./screen/Screen_02";
import Screen_03 from "./screen/Screen_03";

import { createStore } from "redux";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  // 1.
  // function counter(state = 0, action) {
  //   switch (action.type) {
  //     case "INCREMENT":
  //       return state + 1;
  //     case "DECREMENT":
  //       return state - 1;
  //     default:
  //       return state;
  //   }
  // }

  // // 2.
  // let store = createStore(counter);

  // // 3.
  // store.subscribe(() => console.log(store.getState()));

  // // 4.
  // store.dispatch({ type: "INCREMENT" }); // in ra 1
  // store.dispatch({ type: "INCREMENT" }); // in ra 2
  // store.dispatch({ type: "DECREMENT" }); // in ra 1

  return (
    // <View></View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="screen02">
        <Stack.Screen
          name="screen02"
          component={Screen_02}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="screen03" component={Screen_03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
