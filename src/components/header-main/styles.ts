import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  headerNav: {
    height: height * 0.064,
    backgroundColor: "#F7D102",
    flexDirection: "row",
    alignItems: "center",
  },
  headerNavLeft: {
    width: "80%",
    height: height * 0.064,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
  },
  headerNavLeftInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 11,
    borderLeftColor: "#F3F2FD",
    borderLeftWidth: 2,
  },

  Image: {
    width: 25,
    height: 25,
    marginHorizontal: 15,
  },

  headerNavRight: {
    width: "20%",
    height: height * 0.064,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styles;
