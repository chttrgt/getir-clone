import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { ICategory } from "../../models/ICategory";

export default function CategoryItem({
  categoryItem,
}: {
  categoryItem: ICategory;
}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{ uri: categoryItem.src }}
        style={styles.image}
      />
      <Text style={styles.text}>{categoryItem.name}</Text>
    </TouchableOpacity>
  );
}
