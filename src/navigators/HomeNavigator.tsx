import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home";

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
