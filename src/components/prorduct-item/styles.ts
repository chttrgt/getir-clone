import { StyleSheet, Dimensions,Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: width * 0.3,
    height: height * 0.25,
    marginTop: Platform.OS === "ios" ? 5 : 10,
    marginBottom: Platform.OS === "ios" ? 0 : 20,
    marginLeft: 10,
    gap: 7,
    position: "relative",
  },
  image: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#e0e0e0",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingLeft: 7,
  },
  oldPrice: {
    color: "gray",
    textDecorationLine: "line-through",
    fontWeight: "600",
    fontSize: 12,
  },
  newPrice: {
    color: "#7849F7",
    fontWeight: "800",
  },
  title: {
    paddingLeft: 7,
    fontSize: 13,
    fontWeight: "600",
  },
  amount: {
    color: "#a1a5b6",
    paddingLeft: 7,
    fontSize: 14,
    fontWeight: "600",
  },
  plusButton: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    position: "absolute",
    top: -7,
    right: -5,
    backgroundColor: "white",
    shadowRadius: 3.8,
    shadowOpacity: 0.05,
  },
});
