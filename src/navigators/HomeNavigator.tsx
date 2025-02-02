import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home";
import { Dimensions, Image, View, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
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
    </Stack.Navigator>
  );
}
