import React, { useState } from "react";
import { View } from "react-native";
import CategoryItem from "../category-item";
import categoriesGetir from "../../../assets/categoriesGetir";
import { ICategory } from "../../models/ICategory";
import styles from "./styles";

export default function Categories() {
  const [categories, setCategories] = useState<ICategory[]>(categoriesGetir);
  return (
    <View>
      <View style={styles.innerContainer}>
        {categories.map((category) => (
          <CategoryItem key={category.id} categoryItem={category} />
        ))}
      </View>
    </View>
  );
}
