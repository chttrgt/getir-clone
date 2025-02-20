import React from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/cart-item";
import { ScrollView } from "react-native-gesture-handler";
import ProductItem from "../../components/prorduct-item";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: "90%",
              alignSelf: "center",
              backgroundColor: "lightgrey",
              opacity: 0.3,
              shadowColor: "#000",
              shadowRadius: 10,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              elevation: 5,
            }}
          />
        )}
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#5d3ebd" }}
            >
              Sepetinizde ürün bulunmamaktadır.
            </Text>
          </View>
        )}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          padding: 15,
          color: "#5d3ebd",
        }}
      >
        Önerilen Ürünler
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={true}
        style={{ backgroundColor: "#fff" }}
      >
        {productsGetir.slice(0, 7).map((item) => (
          <ProductItem key={item.id} pro={item} />
        ))}
      </ScrollView>
      {/* Devam ve Toplam kısmı */}
      <View
        style={{
          height: height * 0.12,
          backgroundColor: "#fff",
          paddingHorizontal: "3%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            height: height * 0.07,
            backgroundColor: "#5d3ebd",
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            height: height * 0.07,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.7,
            borderColor: "#dedede",
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Text
            style={{
              color: "#5d3ebd",
              fontSize: 21,
              fontWeight: "bold",
            }}
          >
            ₺24,00
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
