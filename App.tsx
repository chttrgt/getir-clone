import "react-native-gesture-handler";
import RootNavigator from "./src/navigators/RootNavigator";
import { StatusBar } from "react-native";
import store from "./src/redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#5d3ebd" />
      <RootNavigator />
    </Provider>
  );
}
