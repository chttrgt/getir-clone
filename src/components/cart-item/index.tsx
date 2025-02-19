import { Dimensions, Image, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { IProducts } from "../../models/IProducts";
const { width, height } = Dimensions.get("window");

export default function CartItem({ item }: { item: IProducts }) {
  return (
    <View
      style={{
        height: height * 0.15,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: width * 0.04,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: item.image }}
          style={{ height: height * 0.1, width: height * 0.1 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text
            style={[
              { fontSize: 13, fontWeight: "600" },
              item.name.length > 20 && {
                flexWrap: "wrap",
                width: width * 0.3,
              },
            ]}
          >
            {item.name}
          </Text>
          <Text
            style={{
              color: "#848897",
              marginTop: 2,
              marginBottom: 5,
              fontWeight: "600",
              fontSize: 12,
            }}
          >
            {item.amount}
          </Text>
          <Text style={{ color: "#5D3EBD", fontWeight: "bold", fontSize: 15 }}>
            ₺{item.newPrice}
          </Text>
        </View>
      </View>

      <View
        style={{
          width: width * 0.25,
          height: height * 0.038,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          borderWidth: 0.2,
          borderColor: "#e0e0e0",
          borderRadius: 20,
          boxShadow: "0 0 3px rgba(0,0,0,0.1)",
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Entypo name="minus" size={15} color="#5D3EBD" />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#5D3EBD",
            height: height * 0.038,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "white",
            }}
          >
            1
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Entypo name="plus" size={15} color="#5D3EBD" />
        </View>
      </View>
    </View>
  );
}
