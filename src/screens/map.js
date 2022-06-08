import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function Map() {
  // Create Dummy Data With Array
  const cars = ["BMW", "Merci", "Buggati", "Lexus", "Merci", "Buggati", "Lexus", "Buggati", "Lexus", "Merci", "Buggati", "Buggati", "Lexus", "Merci", "Buggati", "Buggati", "Lexus", "Merci", "Buggati", "Buggati", "Lexus", "Merci", "Buggati", "Buggati", "Lexus", "Merci", "Buggati", "Buggati", "Lexus", "Merci", "Buggati", "Buggati", "Lexus", "Merci", "Buggati", "Buggati", "Lexus", "Merci", "Buggati", "Buggati", "Lexus", "Merci", "Buggati", "Buggati", "Lexus", "Merci", "Buggati", "Buggati", "Lexus", "Merci", "Buggati", "Buggati", "Lexus", "Merci", "Buggati", "Buggati", "Lexus", "Merci", "Buggati", "Buggati", "Lexus", "Merci", "Buggati",]

  return (
    <View>
      <StatusBar />
      <Text>This is content of Cars, displayed using Map</Text>
      {cars.map((car) => (
        <Text key={car} > {car}</Text>
      ))}
    </View >
  );
}
