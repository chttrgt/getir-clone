import { createStackNavigator } from "@react-navigation/stack";
import {
  Dimensions,
  Image,
  View,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";
import HomeScreen from "../screens/home";
import CategorDetailsScreen from "../screens/category-details";
import { RootStackParamList } from "../Types";
import ProductDetailsScreen from "../screens/product-details";
import Ionicons from "@expo/vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

const Stack = createStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5d3ebd" },
          headerTitle: () => (
            <View
              style={{
                width: width,
                height: height / 20,
                marginLeft: -15,
                marginTop: Platform.OS === "ios" ? 0 : 20,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/getirlogo.png")}
                style={{ width: 70, height: 30 }}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategorDetailsScreen}
        options={{
          headerStyle: { backgroundColor: "#5d3ebd" },
          headerBackTitle: "",
          headerTintColor: "white",
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürünler
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: "#5d3ebd" },
          headerBackTitle: "",
          headerTintColor: "white",
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürün Detayı
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Ionicons name="heart" size={24} color="#32177a" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
