import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { IProducts } from "../../models/IProducts";

const { width, height } = Dimensions.get("window");

export default function ProductDetailsProvider({
  proDetail,
}: {
  proDetail: IProducts;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.newPrice}>₺{proDetail.newPrice}</Text>
      <Text style={styles.title}>{proDetail.name}</Text>
      <Text style={styles.amount}>{proDetail.amount}</Text>
    </View>
  );
}

export const ProductDetailsInfo = () => {
  return (
    <View>
      <Text>info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  newPrice: {
    color: "#7849F7",
    fontWeight: "800",
    fontSize: 17,
    marginTop: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    marginTop: 7,
  },
  amount: {
    color: "#a1a5b6",
    fontSize: 12,
    fontWeight: "600",
  },
});
