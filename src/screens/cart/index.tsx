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

const { width, height } = Dimensions.get("window");

export default function CartScreen() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={productsGetir.slice(0, 3)}
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
      />
      <View
        style={{
          height: height * 0.12,
          backgroundColor: "#f3f3f3",
          paddingHorizontal: "3%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            height: height * 0.08,
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
            height: height * 0.08,
            justifyContent: "center",
            alignItems: "center",
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
}
