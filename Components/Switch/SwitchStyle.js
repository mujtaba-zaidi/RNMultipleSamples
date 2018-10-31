import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "flex-end"
  },
  commonButton: {
    width: "50%",
    height: "100%",
    shadowColor: "black",
    shadowRadius: 50,
    shadowOpacity: 5,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  leftButton: {
    borderLeftWidth: 0.5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  rightButton: {
    borderRightWidth: 0.5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  commonText: {
    textAlign: "center",
    color: "#333333"
  }
});
