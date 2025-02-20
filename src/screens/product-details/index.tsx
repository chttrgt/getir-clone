import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import ImageCarousel from "../../components/image-carousel";
import { IProducts } from "../../models/IProducts";
import ProductDetailsProvider, {
  ProductCartButton,
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
    <View style={{ position: "relative", flex: 1 }}>
      <ScrollView>
        <ImageCarousel images={product.images} />
        <ProductDetailsProvider proDetail={product} />
        <Text style={styles.titleText}>Detaylar</Text>
        <ProductDetailsInfo />
      </ScrollView>
      <ProductCartButton proDetail={product} />
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
    paddingHorizontal: 15,
    paddingVertical: 15,
    color: "#808b99",
    fontWeight: "600",
  },
});
