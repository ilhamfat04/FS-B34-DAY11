import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image } from "react-native";

import List from "../components/list";

export default function Props() {
  // Create variable to insert link Image
  let pic = {
    uri: "https://images.unsplash.com/photo-1654613907442-7419affeedbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  }

  return (
    <View>
      <StatusBar />
      <Text>On the image element, using default props called "source"</Text>
      <Image source={pic} style={{ width: "100%", height: 200 }} />

      <List listData="Banu Ridwan" />
      <List listData="Sodikul" />
    </View>
  );
}
