import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, FlatList, Text, Image } from "react-native";

export default function List() {
  // Make Dummy Data with Array
  const data = [
    {
      name: "Ilham Fathullah"
    },
    {
      name: "Yadi"
    },
    {
      name: "Faldhi"
    },
  ]
  return (
    <View>
      <StatusBar />
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
