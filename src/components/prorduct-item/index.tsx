import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types";
import { IProducts } from "../../models/IProducts";
import { useDispatch } from "react-redux";

type ProductNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ProductDetails"
>;

export default function ProductItem({ pro }: { pro: IProducts }) {
  const dispatch = useDispatch();
  const navigation = useNavigation<ProductNavigationProp>();

  const handlePlusButtonPress = () => {
    dispatch({ type: "ADD_TO_CART", payload: pro });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("ProductDetails", { proItem: pro })}
    >
      <Image
        source={{
          uri: pro?.image,
        }}
        style={styles.image}
      />
      <View style={styles.priceContainer}>
        <Text style={styles.oldPrice}>{pro?.oldPrice}</Text>
        <Text style={styles.newPrice}>{pro?.newPrice}</Text>
      </View>
      <Text style={styles.title}>{pro?.name}</Text>
      <Text style={styles.amount}>{pro?.amount}</Text>
      <View style={styles.plusButton}>
        <TouchableOpacity onPress={handlePlusButtonPress}>
          <Entypo name="plus" size={22} color="#7849F7" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
