import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: width * 0.25,
    height: width * 0.24,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: 10,
  },
  text: {
    fontSize: 12,
    color: "#616161",
    fontWeight: "500",
  },
});
