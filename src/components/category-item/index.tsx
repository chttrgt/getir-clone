import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../Types";
import { ICategory } from "../../models/ICategory";
import styles from "./styles";

type CategoryNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CategoryDetails"
>;

export default function CategoryItem({
  categoryItem,
}: {
  categoryItem: ICategory;
}) {
  const navigation = useNavigation<CategoryNavigationProp>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("CategoryDetails", { catItem: categoryItem })
      }
    >
      <Image source={{ uri: categoryItem.src }} style={styles.image} />
      <Text style={styles.text}>{categoryItem.name}</Text>
    </TouchableOpacity>
  );
}
