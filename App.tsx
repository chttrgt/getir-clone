import "react-native-gesture-handler";
import RootNavigator from "./src/navigators/RootNavigator";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#5d3ebd" />
      <RootNavigator />
    </>
  );
}
