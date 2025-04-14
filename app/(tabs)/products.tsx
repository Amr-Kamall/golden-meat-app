import Header from "@/components/Header";
import { StyleSheet, Image, Platform, View, Text } from "react-native";

export default function Products() {
  return (
    <View style={{ direction: "rtl" }}>
      <Header title="منتجاتنا" />
      <Text>basket</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
