import React, { useState } from "react";
import { ScrollView } from "react-native";
import CategoryFiltering from "../../components/category-filtering";
import { ICategory } from "../../models/ICategory";
import TypeFiltering from "../../components/type-filtering";

interface CategoryDetailsScreenProps {
  route: {
    params: {
      catItem: ICategory;
    };
  };
}

export default function CategorDetailsScreen(
  props: CategoryDetailsScreenProps
) {
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    props.route.params.catItem
  );
  return (
    <ScrollView>
      <CategoryFiltering selectedCat={selectedCategory} />
      <TypeFiltering />
    </ScrollView>
  );
}
