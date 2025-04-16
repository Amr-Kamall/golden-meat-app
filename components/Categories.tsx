import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import CategorySlider from "./categoriesSlider/CategorySlider";
import { categoriesData } from "./categoriesSlider/data";

export default function Categories() {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.title}>أصنافنا</Text>
      {/* slider of categories */}
      <CategorySlider categories={categoriesData} />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    width: "90%",
    margin: "auto",
    marginTop: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 18,
    fontFamily: "Cairo-Bold",
    color: Colors.gold00,
    direction: "rtl",
  },
});
