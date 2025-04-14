import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { imageSlider } from ".";
import SliderItem from "./SliderItem";

export default function Slider() {
  return (
    <View style={styles.SliderContainer}>
      <FlatList
        contentContainerStyle={{backgroundColor:"red",minWidth:"90%" }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        data={imageSlider}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  SliderContainer: {
    // width: "90%",
    // marginHorizontal: "auto",
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
