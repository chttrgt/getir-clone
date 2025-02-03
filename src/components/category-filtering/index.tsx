import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import categoriesGetir from "../../../assets/categoriesGetir";
import { ICategory } from "../../models/ICategory";

const { width, height } = Dimensions.get("window");

const CategoryBox = ({
  categoryItem,
  active,
}: {
  categoryItem: ICategory;
  active: ICategory;
}) => (
  <View
    style={[
      styles.cateoryInnerContainer,
      active.name === categoryItem.name && styles.active,
    ]}
  >
    <Text style={styles.categoryText}>{categoryItem.name}</Text>
  </View>
);

export default function CategoryFiltering({
  selectedCat,
}: {
  selectedCat: ICategory;
}) {
  const [categories, setCategories] = useState<ICategory[]>(categoriesGetir);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={true}
      style={styles.container}
    >
      {categories.map((category) => (
        <CategoryBox
          key={category.id}
          categoryItem={category}
          active={selectedCat}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.065,
    backgroundColor: "#7849F7",
  },

  cateoryInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  categoryText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  active: {
    borderBottomWidth: 3,
    borderColor: "#FFD00C",
  },
});
