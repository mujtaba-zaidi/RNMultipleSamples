import React, { Component } from "react";
import { View, Text } from "react-native";
import { containerStyle, styles } from "./style";
export default class ChildOne extends Component {
  render() {
    return (
      <View style={containerStyle(this.props.dimensions)}>
        <Text style={styles.name}>Child One</Text>
      </View>
    );
  }
}
