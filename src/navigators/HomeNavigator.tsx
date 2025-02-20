import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CartScreen from "../screens/cart";
import { useDispatch, useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

const Stack = createStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  const cartItems = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

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
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: "#5d3ebd" },
          headerBackTitle: "",
          headerTintColor: "white",
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CartScreen")}
              style={{
                width: width * 0.3,
                height: 33,
                backgroundColor: "white",
                marginRight: width * 0.03,
                borderRadius: 7,
                flexDirection: "row",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Image
                source={require("../../assets/cart.png")}
                style={{ width: 27, height: 27, marginLeft: 5 }}
              />
              <View
                style={{
                  backgroundColor: "#F3EFFE",
                  height: 33,
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "#5d3ebd",
                    fontWeight: "bold",
                    fontSize: 15,
                    marginLeft: 15,
                  }}
                >
                  ₺
                  {cartItems &&
                    cartItems
                      .reduce(
                        (acc: any, item: any) =>
                          acc + item.newPrice * item?.quantity,
                        0
                      )
                      .toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
        })}
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

      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: "#5d3ebd" },
          headerBackTitle: "",
          headerTintColor: "white",
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                marginLeft: 10,
                marginRight: 7,
              }}
            >
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => dispatch({ type: "CLEAR_CART" })}
            >
              <FontAwesome name="trash" size={22} color="white" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
