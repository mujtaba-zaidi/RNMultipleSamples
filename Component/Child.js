import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Timer: 0,
      isConnected: false
    };
  }
  componentWillReceiveProps(nProps) {
    let Timer =
      nProps.socketsCommunication.Timer !== undefined
        ? nProps.socketsCommunication.Timer
        : 0;
    let isConnected =
      nProps.socketsConnection.isConnected !== undefined
        ? nProps.socketsConnection.isConnected
        : false;
    this.setState({
      Timer,
      isConnected
    });
  }
  render() {
    let isConnected = this.state.isConnected;
    let timer = this.state.Timer;
    return (
      <View style={styles.container}>
        <Text>Socket is {isConnected ? "connected" : "disconnected"}!</Text>
        <Text>Timer: {timer}</Text>
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

const mapStateToProps = state => ({
  socketsCommunication: state.sockets.communication,
  socketsConnection: state.sockets.connection
});

export default connect(mapStateToProps)(Child);
