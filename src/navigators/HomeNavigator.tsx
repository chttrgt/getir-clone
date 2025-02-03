import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, Image, View, Platform, Text } from "react-native";
import HomeScreen from "../screens/home";
import CategorDetailsScreen from "../screens/category-details";
import { RootStackParamList } from "../Types";

const { width, height } = Dimensions.get("window");

const Stack = createStackNavigator<RootStackParamList>();

export default function HomeNavigator() {
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
    </Stack.Navigator>
  );
}
