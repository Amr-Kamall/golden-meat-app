import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import Points from "./Points";

export default function Header({ title }: { title: string }) {
  const router = useRouter();

  return (
    <View style={[styles.headerContainer]}>
      {/* points */}
      <View style={styles.headerLeft}>
        <Points />
        <Ionicons name="search-sharp" size={20} color={Colors.gold00} />
      </View>

      {/* right navigation */}
      <View style={styles.rightNav}>
        <Pressable
          onPress={() => router.back()}
          android_ripple={{ color: Colors.rippleColor, radius: 10 }}
        >
          <AntDesign name="arrowright" size={18} color={Colors.gold00} />
        </Pressable>
        <Text style={styles.screenTitle}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    paddingTop: 50,
    paddingHorizontal: "5%",
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "#fff", // Match your app's background
    borderWidth: 2,
    borderColor: "Red",
    // elevation: 3, // Adds shadow on Android (optional)
    // shadowColor: "#000", // Adds shadow on iOS (optional)
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 3,
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
