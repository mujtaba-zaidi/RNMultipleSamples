import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import ChildOne from "./Components/ChildOne";
import ChildTwo from "./Components/ChildTwo";
import ChildThree from "./Components/ChildThree";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: Dimensions.get("window")
    };
    this.dimensionsHandler = this.dimensionsHandler.bind(this);
  }
  componentWillMount() {
    Dimensions.addEventListener("change", this.dimensionsHandler);
  }
  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.dimensionsHandler);
  }
  dimensionsHandler(dimensions) {
    this.setState({ dimensions: dimensions.window });
  }
  render() {
    const dimensions = this.state.dimensions;
    // const mode = dimensions.height > dimensions.width ? "portrait" : "landscape";
    return (
      <View style={styles.container}>
        <ChildOne dimensions={dimensions} />
        <ChildTwo dimensions={dimensions} />
        <ChildThree dimensions={dimensions} />
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
