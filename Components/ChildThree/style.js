import { StyleSheet } from "react-native";

export const containerStyle = dimensions => {
  return StyleSheet.create({
    container: {
      height: (40 / 100) * dimensions.height,
      width: (40 / 100) * dimensions.width,
      backgroundColor: "steelblue"
    }
  });
};

export const nameStyle = dimensions => {
  return StyleSheet.create({
    name: {
      fontSize: (4 / 100) * dimensions.height,
      textAlign: "center",
      margin: 10
    }
  });
};
