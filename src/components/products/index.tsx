import React, { useState } from "react";
import { Text, View, Platform } from "react-native";
import productsGetir from "../../../assets/productsGetir";
import ProductItem from "../prorduct-item";
import { IProducts } from "../../models/IProducts";

export default function Products() {
  const [products, setProducts] = useState<IProducts[]>(productsGetir);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          paddingTop: 15,
          paddingBottom: 20,
        }}
      >
        {products.slice(0, 2).map((product) => (
          <ProductItem key={product.id} pro={product} />
        ))}
      </View>
      <Text style={{ color: "gray", fontWeight: "bold", padding: 14 }}>
        Çubuk
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          backgroundColor: "#fff",
          paddingTop: 15,
          paddingBottom: 20,
        }}
      >
        {products.slice(2).map((product) => (
          <ProductItem key={product.id} pro={product} />
        ))}
      </View>
    </View>
  );
}
