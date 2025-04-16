// SliderItem.tsx
import { Image, StyleSheet, Dimensions, View } from "react-native";
import React from "react";
import { ImageSliderType } from "./data";

interface Props {
  item: ImageSliderType;
  index?: number;
}

const SliderItem = ({ item }: Props) => {
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth * 0.9;

  return (
    <View style={[styles.itemContainer, { width: itemWidth }]}>
      <Image
        source={item.img}
        style={[styles.image, { width: itemWidth, height: itemWidth * 1.333 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin:"auto"
  },
  image: {
    borderRadius: 20,
    resizeMode: "cover",
  },
});

export default SliderItem;
