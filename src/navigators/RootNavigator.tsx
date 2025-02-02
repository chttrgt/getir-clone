import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./BottomNavigator";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}
