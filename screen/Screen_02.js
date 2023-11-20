import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  CheckBox
} from "react-native";
import React from "react";
import { createStore } from "redux";

const Screen_02 = ({ navigation, route }) => {
  console.log(route.params)
  var add = { type: "add", todo: route.params };

  function addJob(state = [], action) {
    switch (action.type) {
      case "add":
        return [...state, action.todo];
      default:
        return state;
    }
  }

  var store = createStore(addJob);

  var data = []
  store.subscribe(() => {
    data = [...data, store.getState()];
    console.log(data);
  });

  if (route.params)
    store.dispatch(add);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 30 }}
    >
      <FlatList
        data={data}
        renderItem={(item) => {
          <View
            style={{
              backgroundColor: "lightgrey",
              flexDirection: "row",
              borderRadius: 20,
              padding: 10,
            }}
          >
            <CheckBox></CheckBox>
            <Text>abc</Text>
          </View>
        }}
      />

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Pressable
          style={{
            backgroundColor: "lightblue",
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
          onPress={() => {
            navigation.navigate("screen03");
          }}
        >
          <Text style={{ fontSize: 40, color: "white" }}>+</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Screen_02;

const styles = StyleSheet.create({});
