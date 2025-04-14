import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import Svg, { Path } from "react-native-svg";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import Points from "./Points";

export default function Header({ title }: { title: string }) {
  const router = useRouter();

  return (
    <View style={styles.headerContainer}>
      {/* points */}
      <View style={styles.headerLeft}>
        <Ionicons name="search-sharp" size={20} color={Colors.gold00} />
        <Points/>
      </View>

      {/* right navigation */}
      <View style={styles.rightNav}>
        <Text style={styles.screenTitle}>{title}</Text>
        <Pressable onPress={() => router.back()}>
          <AntDesign name="arrowright" size={17} color={Colors.gold00} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "90%",
    paddingTop: 50,
    margin: "auto",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
 
  headerLeft: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 12,
  },
 
  rightNav: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 10,
  },
  screenTitle: {
    fontSize: 17,
    fontFamily: "Cairo-Bold",
    color: Colors.gold00,
  },
});
