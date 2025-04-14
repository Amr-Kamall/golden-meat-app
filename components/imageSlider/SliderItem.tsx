import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { ImageSliderType } from ".";

type Props = {
  item: ImageSliderType;
  index: number;
};

export default function SliderItem({ item, index }: Props) {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.img} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 20,
  },
});
