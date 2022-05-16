import { FlatList, Text, StyleSheet, View } from "react-native";
import { useState } from "react";


  export default function Inicio() {

    return (
      <View style={styles.container}>
          <Text>Inicio</Text>

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent:"center",
    },
  });
