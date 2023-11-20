import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const Screen_03 = ({ navigation }) => {
  var [job, setJob] = useState("");
  return (
    <SafeAreaView>
      <View>
        <Text>ADD YOUR JOB</Text>
      </View>
      <View>
        <TextInput
          placeholder="input your job"
          onChangeText={setJob}
        ></TextInput>
      </View>
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate("screen02", job);
          }}
        >
          <Text>FINISH</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Screen_03;

const styles = StyleSheet.create({});
