import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
  img: ImageSourcePropType | undefined;
};

export const imageSlider: ImageSliderType[] = [
  {
    img: require("./assets/meat-1.png"),
  },
  {
    img: require("./assets/meat-2.jpg"),
  },
  {
    img: require("./assets/meat-3.jpg"),
  },
];
