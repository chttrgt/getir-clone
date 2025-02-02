import React from "react";
import { View, Text, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import styles from "./styles";

function HeaderMain() {
  return (
    <View style={styles.headerNav}>
      <View style={styles.headerNavLeft}>
        <Image
          style={styles.Image}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.headerNavLeftInner}>
          <Text style={{ fontWeight: "600", fontSize: 13, color: "#5d3ebd" }}>
            Ev ,
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 12, color: "#6e7480" }}>
            Selçuk Blv. Yeşiltepe Mahallesi...
          </Text>
          <Entypo name="chevron-right" size={20} color="#5d3ebd" />
        </View>
      </View>
      <View style={styles.headerNavRight}>
        <View>
          <Text style={{ color: "#5d3ebd", fontSize: 9, fontWeight: 600 }}>
            TVS
          </Text>
        </View>
        <View>
          <Text style={{ color: "#5d3ebd", fontWeight: 700 }}>
            <Text style={{ fontSize: 20 }}>13</Text>dk
          </Text>
        </View>
      </View>
    </View>
  );
}

export default HeaderMain;
