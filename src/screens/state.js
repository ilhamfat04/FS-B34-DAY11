import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function State() {
  // Init State
  const [counter, setCounter] = useState(0)
  // let counter = 0

  //Create Function Add
  function Add() {
    return setCounter(counter + 1)
  }

  //Create Function Less
  function Less() {
    return setCounter(counter - 1)
  }

  return (
    <View>
      <StatusBar />
      <Text>
        If you click add, it will increase. but if you click Less, it will be decrease
      </Text>

      <Text>{counter}</Text>

      <TouchableOpacity onPress={Add}>
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Less}>
        <Text>Less</Text>
      </TouchableOpacity>
    </View>
  );
}
