import Header from "@/components/Header";
import Slider from "@/components/imageSlider/Slider";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <Header title="الصفحة الرئيسية" />
      <View style={{direction:"ltr"}}>
        <Slider />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    direction: "rtl",
  },
});
