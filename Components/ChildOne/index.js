import React, { Component } from "react";
import { View, Text } from "react-native";
import { containerStyle, nameStyle } from "./style";
export default class ChildOne extends Component {
  render() {
    let dimensions = this.props.dimensions;
    return (
      <View style={containerStyle(dimensions).container}>
        <Text style={nameStyle(dimensions).name}>
          Text Size based on PixelRatio.
        </Text>
      </View>
    );
  }
}
