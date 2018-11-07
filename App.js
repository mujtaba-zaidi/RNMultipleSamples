import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ToastExample from "./ToastExample";
import CallBackExample from "./CallBackExample";
export default class App extends Component {
  componentWillMount() {
    ToastExample.show("Awesome", ToastExample.SHORT);
    CallBackExample.getData(data => {
      console.log(data);
    });
  }
  render() {
    return <View style={styles.container} />;
  }
}
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
