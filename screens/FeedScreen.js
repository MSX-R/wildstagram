import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function FeedScreen() {
  return (
    <View style={styles.page}>
      <Text>Feed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
