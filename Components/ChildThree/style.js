import { StyleSheet } from "react-native";

export const containerStyle = dimensions => {
  return {
    height: (40 / 100) * dimensions.height,
    width: (40 / 100) * dimensions.width,
    borderWidth: 1
  };
};

export const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
