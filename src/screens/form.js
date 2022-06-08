import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

export default function Form() {
  return (
    <View style={style.container}>
      <StatusBar />
      <Text style={style.header} >Sign In</Text>

      <Text style={style.textStyle} >Email</Text>
      <TextInput style={style.textInput} />

      <Text style={style.textStyle} >Password</Text>
      <TextInput style={style.textInput} />
    </View>
  );
}

// Create Variable for CSS
const style = StyleSheet.create({
  header: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50
  },
  container: {
    flex: 1,
    padding: 20
  },
  textStyle: {
    color: "green",
    fontSize: 16,
    marginBottom: 5
  },
  textInput: {
    height: 45,
    padding: 10,
    borderColor: "green",
    borderWidth: 1
  }
})
