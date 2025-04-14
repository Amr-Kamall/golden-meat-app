import Header from "@/components/Header";
import { StyleSheet,View, Text } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={{ direction: "rtl" }}>
      <Header title="ملفي الشخصي" />
      <Text>talabat</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
