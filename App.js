import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Switch from "./Components/Switch";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Switch
          leftSideText={"Turn Off"}
          rightSideText={"Turn On"}
          activatedLeftBackgroundColor={"#f0f8ff"}
          activatedLeftTextColor={"#5f9ea0"}
          activatedRightBackgroundColor={"#00ffff"}
          activatedRightTextColor={"#000000"}
          deactivatedLeftBackgroundColor={"#00ffff"}
          deactivatedLeftTextColor={"#000000"}
          deactivatedRightBackgroundColor={"#f0f8ff"}
          deactivatedRightTextColor={"#5f9ea0"}
          containerWidth={"30%"}
          containerHeight={"5%"}
        />
        <Switch
          leftSideText={"Off"}
          rightSideText={"On"}
          activatedLeftBackgroundColor={"#fff8dc"}
          activatedLeftTextColor={"#d2691e"}
          activatedRightBackgroundColor={"#7fff00"}
          activatedRightTextColor={"#00ffff"}
          deactivatedLeftBackgroundColor={"#7fff00"}
          deactivatedLeftTextColor={"#00ffff"}
          deactivatedRightBackgroundColor={"#fff8dc"}
          deactivatedRightTextColor={"#d2691e"}
          containerWidth={"60%"}
          containerHeight={"10%"}
        />
      </View>
    );
  }
}
// leftSideText,
//       rightSideText,
//       activatedLeftBackgroundColor,
//       activatedLeftTextColor,
//       activatedRightBackgroundColor,
//       activatedRightTextColor,
//       deactivatedLeftBackgroundColor,
//       deactivatedLeftTextColor,
//       deactivatedRightBackgroundColor,
//       deactivatedRightTextColor,
//       containerWidth,
//       containerHeight
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
