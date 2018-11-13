import { StyleSheet, PixelRatio } from "react-native";

export const containerStyle = dimensions => {
  return StyleSheet.create({
    container: {
      height: (20 / 100) * dimensions.height,
      width: (20 / 100) * dimensions.width,
      backgroundColor: "powderblue"
    }
  });
};

export const nameStyle = dimensions => {
  return StyleSheet.create({
    name: {
      fontSize: Math.round(PixelRatio.roundToNearestPixel(17) - 2),
      textAlign: "center",
      margin: 10
    }
  });
};
