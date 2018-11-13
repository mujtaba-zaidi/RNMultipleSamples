import React, { Component } from "react";
import { View, Text } from "react-native";
import { containerStyle, styles } from "./style";

export default class ChildTwo extends Component {
  render() {
    return (
      <View style={containerStyle(this.props.dimensions)}>
        <Text style={styles.name}>Child Two</Text>
      </View>
    );
  }
}
