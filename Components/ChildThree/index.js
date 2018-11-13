import React, { Component } from "react";
import { View, Text } from "react-native";
import { containerStyle, nameStyle } from "./style";

export default class ChildThree extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dimensions = this.props.dimensions;
    return (
      <View style={containerStyle(dimensions).container}>
        <Text style={nameStyle(dimensions).name}>
          Child Three (Text based on Rotation with respect to Height.)
        </Text>
      </View>
    );
  }
}
