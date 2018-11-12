import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import configureStore from "./Redux";
import Sockets from "./Sockets";
import Child from "./Component/Child";

const store = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    Sockets(store, "first-call");
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Child />
        </View>
      </Provider>
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
