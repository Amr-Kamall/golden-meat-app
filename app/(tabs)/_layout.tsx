import { Tabs } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.gold00,
        tabBarInactiveTintColor: Colors.black10,
        tabBarLabelStyle: {
          fontSize: 15,
          marginTop: 10,
          fontFamily: "Cairo-Regular",
        },
        tabBarStyle: {
          height: 75,
          borderTopColor: Colors.White30,
          borderTopWidth: 1,
          direction: "rtl",
        },
        headerLeft: () => (
          <Ionicons
            name="arrow-undo"
            size={24}
            color={Colors.gold00} // Use your app's color for consistency
            style={{ marginRight: 15 }} // Add some spacing from the right edge
            onPress={() => alert("Add button pressed")} // Example action
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "الرئيسية",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "المنتجات",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gold" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          title: "السلة",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="basket-shopping" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "طلباتي",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bag-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "حسابي",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
