import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Event() {
  // Create Function Here
  function Greeting() {
    return alert("Good Morning")
  }

  return (
    <View>
      <StatusBar />
      <Text>If you are press "Click Here" then the alert will be appear</Text>
      <TouchableOpacity onPress={() => alert("Hello batch 34 FS")}>
        <Text>Click Here</Text>
      </TouchableOpacity>

      <Text>If you are press "Click Me" then the alert will be appear</Text>
      <TouchableOpacity onPress={Greeting}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}
