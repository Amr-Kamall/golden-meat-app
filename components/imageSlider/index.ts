import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
  title: string;
  description: string;
  img: ImageSourcePropType | undefined;
};

export const imageSlider: ImageSliderType[] = [
  {
    img: require("./assets/watch7.jpeg"),
    title: "Apple Watch Series 7",
    description: "The future of health is on your wrist",
  },
  {
    img: require("./assets/airpod.jpeg"),
    title: "AirPods Pro",
    description: "Active noise cancellation for immersive sound",
  },
  {
    img: require("./assets/airpodmax.jpeg"),
    title: "AirPods Max",
    description: "Effortless AirPods experience",
  },
  // {
  //   img: require("./assets/charger.png"),
  //   title: "Charger",
  //   description: "It's not magic, it's just science",
  // },
  // {
  //   img: require("./assets/lock.jpeg"),
  //   title: "Smart Lock",
  //   description: "Unlock your door with your phone",
  // },
];
