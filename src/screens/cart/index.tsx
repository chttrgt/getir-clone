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
  const cartItems = useSelector((state: any) => state.cart);
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
              height: height * 0.4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "500", color: "#5e3ebd8d" }}
            >
              Sepetinizde ürün bulunmamaktadır.
            </Text>
          </View>
        )}
      />
      <View>
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
      </View>
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
            ₺
            {cartItems
              .reduce(
                (acc: any, item: any) => acc + item.newPrice * item?.quantity,
                0
              )
              .toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
