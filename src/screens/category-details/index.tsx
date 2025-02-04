import React, { useState } from "react";
import { ScrollView } from "react-native";
import CategoryFiltering from "../../components/category-filtering";
import { ICategory } from "../../models/ICategory";
import TypeFiltering from "../../components/type-filtering";
import Products from "../../components/products";

interface CategoryDetailsScreenProps {
  route: {
    params: {
      catItem: ICategory;
    };
  };
}

export default function CategoryDetailsScreen(
  props: CategoryDetailsScreenProps
) {
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    props.route.params.catItem
  );
  return (
    <ScrollView>
      <CategoryFiltering selectedCat={selectedCategory} />
      <TypeFiltering />
      <Products />
    </ScrollView>
  );
}
