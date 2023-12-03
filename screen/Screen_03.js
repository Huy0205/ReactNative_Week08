import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
} from "react-native";
import React, { useState } from "react";

const Screen_03 = ({ navigation }) => {
  var [job, setJob] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/user.png")}
            style={{ width: 60, height: 60, marginRight: 10 }}
          />
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              Hi {global.name}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: 500, color: "#171A1F" }}>
              Have agrate day a head
            </Text>
          </View>
        </View>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/Icon Button 11.png")}
            style={{ width: 40, height: 40 }}
          />
        </Pressable>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: 650 }}>ADD YOUR JOB</Text>
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
            source={require("../assets/Input.png")}
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
            onChangeText={(text) => setJob(text)}
            placeholder="Input your job"
          />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Pressable
          style={{
            backgroundColor: "rgba(0, 189, 214, 1)",
            paddingVertical: 15,
            paddingHorizontal: 60,
            borderRadius: 20,
          }}
          onPress={() => {
            navigation.navigate("screen02", job);
          }}
        >
          <Text style={{ fontSize: 16, color: "white" }}>FINISH</Text>
        </Pressable>
      </View>
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require("../assets/NoteImage.png")}
          style={{ width: 200, height: 200 }}
          resizeMethod="contain"
        />
      </View>
    </SafeAreaView>
  );
};

export default Screen_03;

const styles = StyleSheet.create({});
