import { StyleSheet } from "react-native";

export const containerStyle = dimensions => {
  return StyleSheet.create({
    container: {
      height: (30 / 100) * dimensions.height,
      width: (30 / 100) * dimensions.width,
      backgroundColor: "skyblue"
    }
  });
};

export const nameStyle = dimensions => {
  return StyleSheet.create({
    name: {
      fontSize: (3 / 100) * dimensions.width,
      textAlign: "center",
      margin: 10
    }
  });
};
