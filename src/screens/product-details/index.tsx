import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import ImageCarousel from "../../components/image-carousel";
import { IProducts } from "../../models/IProducts";
import ProductDetailsProvider, {
  ProductDetailsInfo,
} from "../../components/product-detail-provider";

export default function ProductDetailsScreen(prop: any) {
  const [product, setProduct] = useState<IProducts>();

  useEffect(() => {
    setProduct(prop.route.params.proItem);
  }, []);

  if (!product) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="#5d3ebd" size="large" />
      </View>
    );
  }

  return (
    <View>
      <ImageCarousel images={product.images} />
      <ProductDetailsProvider proDetail={product} />
      <Text style={styles.titleText}>Detaylar</Text>
      <ProductDetailsInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    paddingHorizontal: 4,
    paddingVertical: 14,
    color: "#808b99",
    fontWeight: "600",
  },
});
