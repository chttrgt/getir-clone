import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const catFilters = [
  "Et,Tavuk & Balık",
  "Su",
  "Gazlı İçecek",
  "Meyve & Sebze",
  "Fırından",
  "Temel Gıda",
  "Atıştırmalık",
  "Dondurma",
  "Süt Ürünleri",
  "Kahvaltılık",
  "Yiyecek",
  "Kişisel Bakım",
  "Ev Bakım",
  "Ev & Yaşam",
  "Bebek",
  "Cinsel Sağlık",
];

const TypeFilterButton = ({
  item,
  active,
  setFilteredCat,
}: {
  item: string;
  active: string;
  setFilteredCat: (item: string) => void;
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, active === item && styles.active]}
      onPress={() => setFilteredCat(item)}
    >
      <Text style={[styles.text, active === item && styles.active]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default function TypeFiltering() {
  const [activeCategory, setActiveCategory] =
    useState<string>("Et,Tavuk & Balık");
  return (
    <ScrollView
      style={{
        width: width,
        height: height * 0.055,
        backgroundColor: "white",
        boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={true}
    >
      {catFilters.map((filter, index) => (
        <TypeFilterButton
          key={index}
          item={filter}
          active={activeCategory}
          setFilteredCat={setActiveCategory}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#95959526",
  },
  text: {
    color: "#7849F7",
    fontSize: 14,
  },
  active: {
    color: "#fff",
    backgroundColor: "#7849F7",
  },
});
