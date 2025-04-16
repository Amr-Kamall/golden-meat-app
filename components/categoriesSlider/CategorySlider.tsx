import { Colors } from "@/constants/Colors";
import React, { useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";

type CategoryImage = {
  id: string;
  image: string;
};

type CategoriesData = {
  categoryName: string;
  categoryImages: CategoryImage[];
};

const CategoryRow = ({ categories }: { categories: CategoriesData[] }) => {
  const carouselRefs = useRef<(Carousel<any> | null)[]>([]);
  const router = useRouter();

  const renderCategoryItem = ({
    item,
    index,
  }: {
    item: CategoriesData;
    index: number;
  }) => {
    return (
      <View
        style={
          index === 3
            ? styles.categoryContainer
            : [styles.categoryContainer, { marginLeft: 7 }]
        }
      >
        <Carousel
          ref={(ref) => (carouselRefs.current[index] = ref)}
          data={item.categoryImages}
          renderItem={({ item: imageItem }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.navigate("/products")} //send data about product to make filteration
            >
              <Image
                source={{ uri: imageItem.image }}
                style={styles.categoryImage}
                resizeMode="cover"
              />
            </TouchableOpacity>
          )}
          sliderWidth={130}
          itemWidth={130}
          loop={true}
          autoplay={true}
          autoplayInterval={3000}
        />
        <Text style={styles.categoryName}>{item.categoryName}</Text>

        <View style={styles.arrowsContainer}>
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={() => carouselRefs.current[index]?.snapToPrev()}
          >
            <Entypo name="chevron-left" size={24} color={Colors.Basic50} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={() => carouselRefs.current[index]?.snapToNext()}
          >
            <Entypo name="chevron-right" size={24} color={Colors.Basic50} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryWrapper}>
            {renderCategoryItem({ item: category, index })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  scrollContent: {
    flexDirection: "row-reverse",
  },
  categoryWrapper: {
    // marginHorizontal: 5,
  },
  categoryContainer: {
    borderRadius: 10,
    alignItems: "center",
    height: 200,
    justifyContent: "center",
  },
  categoryName: {
    fontSize: 15,
    color: Colors.gold00,
    fontFamily: "Cairo-Regular",
    textAlign: "center",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  arrowsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 5,
    position: "absolute",
  },
  arrowButton: {
    padding: 5,
    fontSize: 16,
  },
  arrowText: {
    fontSize: 20,
    color: "#333",
  },
});

export default CategoryRow;

// Usage:
// <CategoryRow categories={categoriesData} />
