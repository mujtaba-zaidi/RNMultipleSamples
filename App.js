import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Checkbox from "./Components/Checkbox";
import images from "./Images";

export default class App extends Component {
  constructor() {
    super();
    this._handleCheck = this._handleCheck.bind(this);
  }
  _handleCheck(val) {
    console.log(val);
  }
  render() {
    return (
      <View style={styles.container}>
        <Checkbox />
        <Checkbox
          width={"10%"}
          height={"5%"}
          unCheckBackgroundColor={"#ffe4c4"}
          checkBackgroundColor={"#00008b"}
          borderWidth={2}
          borderRadius={0}
          _handleCheck={this._handleCheck}
        />
        <Checkbox
          width={"20%"}
          height={"10%"}
          unCheckBackgroundColor={"#c4c4c4"}
          checkBackgroundColor={"#fffacd"}
          borderWidth={1}
          borderRadius={20}
          unCheckImage={images.unCheck}
          checkImage={images.check}
          _handleCheck={this._handleCheck}
        />
        <Checkbox
          unCheckBackgroundColor={"#ffffff"}
          checkBackgroundColor={"#ffffff"}
          width={100}
          height={100}
          borderWidth={3}
          borderRadius={40}
          imageWidth={60}
          imageHeight={60}
          unCheckImage={images.unCheck}
          checkImage={images.check}
          _handleCheck={this._handleCheck}
        />
      </View>
    );
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
