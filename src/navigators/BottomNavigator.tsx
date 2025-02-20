import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import HomeNavigator from "./HomeNavigator";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const BottomTab = createBottomTabNavigator();

export default function BottomNavigator() {
  const CustomTabBarMainButton = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          backgroundColor: "#5d3ebd",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
          borderWidth: 4,
          borderColor: "#F5F5F5",
          marginTop: -15,
          alignSelf: "center",
          elevation: 1,
        }}
      >
        <Entypo name="list" size={36} color="#FFD00C" />
      </TouchableOpacity>
    );
  };

  return (
    <BottomTab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5d3ebd",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
          borderTopColor: "#9595954b",
          borderTopWidth: 1,
          elevation: 1,
        },
      }}
    >
      <BottomTab.Screen
        name="home"
        component={HomeNavigator}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route);
          console.log(routeName);
          return {
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
            tabBarStyle:
              routeName === "ProductDetails" || routeName === "CartScreen"
                ? { display: "none" }
                : {
                    height: 80,
                    borderTopColor: "#9595954b",
                    borderTopWidth: 1,
                    boxShadow: "0px -1px 2px rgba(0, 0, 0, 0.15)",
                  },
          };
        }}
      />

      <BottomTab.Screen
        name="search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="list"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => <CustomTabBarMainButton {...props} />,
        }}
      />

      <BottomTab.Screen
        name="user"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user-large" size={24} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="gift" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
