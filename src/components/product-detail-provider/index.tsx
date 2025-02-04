import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { IProducts } from "../../models/IProducts";
import Entypo from "@expo/vector-icons/Entypo";

const { width, height } = Dimensions.get("window");

const details = [
  "Sütlü kıtır çikolata ve fındık parçacıklarıyla dolu vanilya lezzeti",
  "İçindekiler",
  "Besin Değerleri",
  "Kullanım",
  "Ek Bilgiler",
];

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
      {details.map((detail, index) => (
        <View key={index} style={styles.details}>
          <Text
            style={[
              styles.detailText,
              index === 0 && { fontSize: 12, color: "#424242" },
              index === details.length - 1 && { borderBottomWidth: 0 },
            ]}
          >
            {detail}
          </Text>
          {index !== 0 && (
            <Entypo name="chevron-down" size={24} color="#a1a5b6" />
          )}
        </View>
      ))}
    </View>
  );
};

export const ProductCartButton = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        width: width,
        height: height * 0.1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 10,
        position: "absolute",
        bottom: 10,
      }}
    >
      <View
        style={{
          width: width * 0.9,
          height: height * 0.07,
          backgroundColor: "#7849F7",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 7,
        }}
      >
        <Text style={{ color: "white", fontWeight: "800", fontSize: 15 }}>
          Sepete Ekle
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingBottom: Platform.OS === "ios" ? 30 : 40,
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
  details: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailText: {
    fontSize: 14,
    color: "#687482",
  },
});
