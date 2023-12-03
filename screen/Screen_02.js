import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  CheckBox,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { createStore } from "redux";

function addJob(state = [], action) {
  switch (action.type) {
    case "add":
      return [...state, action.todo];
    case "edit":
      return state.map((item) => {
        if (item === action.todo) return action.newTodo;
        else return item;
      });
    default:
      return state;
  }
}

const store = createStore(addJob);

const searchJob = (key) => {
  return store.getState().filter((item) => item.includes(key));
};

const Screen_02 = ({ navigation, route }) => {
  var [jobs, setJobs] = React.useState([]);
  var [idEdit, setIdEdit] = React.useState("");
  var [valueInput, setValueInput] = React.useState("");

  var add = { type: "add", todo: route.params };
  const update = (newTodo) => {
    return { type: "edit", todo: idEdit, newTodo: newTodo };
  };

  useEffect(() => {
    if (route.params) store.dispatch(add);
    setJobs(store.getState());
  }, [route.params]);

  const renderItem = ({ item }) => {
    var edit = idEdit === item ? true : false;
    var value = edit ? valueInput : item;
    return (
      <View
        style={{
          backgroundColor: "lightgrey",
          flexDirection: "row",
          borderRadius: 30,
          alignItems: "center",
          paddingHorizontal: 10,
          marginBottom: 15,
        }}
      >
        <CheckBox style={{ marginLeft: 10 }} />
        <TextInput
          editable={edit}
          style={{
            flex: 1,
            fontSize: 16,
            paddingVertical: 15,
            paddingLeft: 10,
            outline: "none",
          }}
          value={value}
          onChangeText={(text) => {
            if (edit) {
              setValueInput(text);
            }
          }}
          onSubmitEditing={() => {
            console.log("end");
            if (edit) {
              store.dispatch(update(value));
              setJobs(store.getState());
              setIdEdit("");
            }
          }}
        ></TextInput>
        <TouchableOpacity
          onPress={() => {
            setValueInput("");
            setIdEdit(item);
          }}
        >
          <Image
            source={require("../assets/edit.png")}
            style={{ width: 25, height: 25, marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/Icon Button 11.png")}
            style={{ width: 40, height: 40 }}
          />
        </Pressable>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/user.png")}
            style={{ width: 60, height: 60 }}
          />
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}
            >
              Hi {global.name}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: 500, color: "#171A1F" }}>
              Have agrate day a head
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/search.png")}
            style={{ width: 20, height: 20, marginLeft: 10 }}
          />
          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              paddingHorizontal: 10,
              paddingVertical: 15,
              outline: "none",
            }}
            onChangeText={(text) => setJobs(searchJob(text))}
            placeholder="Search"
          />
        </View>
      </View>
      <View style={{ flex: 3 }}>
        <FlatList
          data={jobs}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      </View>

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("screen03");
          }}
        >
          <Image
            source={require("../assets/Group 13.png")}
            style={{ width: 50, height: 50 }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Screen_02;

const styles = StyleSheet.create({});
