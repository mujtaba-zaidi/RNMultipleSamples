import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ContextConsumer } from "../../App";
// const isConnected = false;
// const { Provider, Consumer } = React.createContext({ isConnected });

export default class Child extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ContextConsumer>
          {data => {
            return (
              <Text>{`Connected: ${data.isConnected}, Timer: ${
                data.Timer
              }`}</Text>
            );
          }}
        </ContextConsumer>
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
  }
});
