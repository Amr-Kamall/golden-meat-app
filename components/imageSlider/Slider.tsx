// Slider.tsx
import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { imageSlider } from "./data";
import SliderItem from "./SliderItem";
import Carousel from "react-native-snap-carousel";

export default function Slider() {
  const screenWidth = Dimensions.get("window").width;
  return (
    <View style={styles.SliderContainer}>
      <Carousel
        data={imageSlider}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} />
        )}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        loop={true}
        autoplay={true}
        autoplayInterval={3000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  SliderContainer: {
    marginVertical: 20,
    overflow: "hidden",
  },
});
