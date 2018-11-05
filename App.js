import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { listenToSocket } from "./Sockets";
import Child from "./Components/Child";
const isConnected = false;
const { Provider, Consumer } = React.createContext({ isConnected, Timer: 0 });

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isConnected: false,
      Timer: 0
    };
    listenToSocket(data => {
      if (data.isConnected != undefined) {
        this.setState({ isConnected: data.isConnected });
      }
      if (data.Timer != undefined) {
        this.setState({ Timer: data.Timer });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider
          value={{
            isConnected: this.state.isConnected,
            Timer: this.state.Timer
          }}
        >
          <Child />
        </Provider>
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

export const ContextConsumer = Consumer;
