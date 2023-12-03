import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";

const Screen_01 = ({ navigation }) => {
  const [name, setName] = React.useState("");
  function checkName() {
    if (name === "") {
      alert("Please enter your name");
    } else {
      global.name = name;
      navigation.navigate("screen02");
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Image
          source={require("../assets/NoteImage.png")}
          style={{ width: 280, height: 280 }}
          resizeMethod="contain"
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 650,
            color: "rgba(131, 83, 226, 1)",
            textAlign: "center",
          }}
        >
          MANAGE YOUR<br></br>TASK
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          padding: 10,
          borderWidth: 1,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
          width: 330,
        }}
      >
        <Image
          source={require("../assets/iconMail.png")}
          style={{ width: 20, height: 20 }}
          resizeMethod="contain"
        />
        <TextInput
          placeholder="Enter your name"
          style={{ flex: 1, outline: "none", marginLeft: 8, fontSize: 16 }}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Pressable
          style={{
            backgroundColor: "rgba(0, 189, 214, 1)",
            width: 180,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 12,
          }}
          onPress={() => {
            checkName();
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 600, color: "white" }}>
            GET STARTED {"->"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Screen_01;
