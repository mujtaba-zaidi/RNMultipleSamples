import React, { Component } from "react";
import { View, Text } from "react-native";
import { containerStyle, styles } from "./style";

export default class ChildThree extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={containerStyle(this.props.dimensions)}>
        <Text style={styles.name}>Child Three</Text>
      </View>
    );
  }
}
