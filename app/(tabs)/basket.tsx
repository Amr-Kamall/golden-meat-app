import Header from "@/components/Header";
import { StyleSheet, Image, Platform, View, Text } from "react-native";

export default function Basket() {
  return (
    <View style={{ direction: "rtl" }}>
      <Header title="السلة" />
      <Text>basket</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
