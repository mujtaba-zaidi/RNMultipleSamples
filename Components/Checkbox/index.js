import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import { styles } from "./CheckboxStyle";

export default class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      style: {
        container: styles.container,
        containerSize: {
          width: 50,
          height: 50
        },
        imageSize: { width: "50%", height: "50%" },
        unCheckBackgroundColor: "#F5FCFF",
        unCheckImage: "",
        checkBackgroundColor: "#add8e6",
        checkImage: "",
        border: {
          borderWidth: 1,
          borderRadius: 10
        }
      },
      isDisabled: false
    };
    this._handleCheck = this._handleCheck.bind(this);
  }
  _handleCheck() {
    let handleCheck = this.props._handleCheck;
    let isDisabled = this.state.isDisabled;
    this.setState({
      isDisabled: !isDisabled
    });
    if (handleCheck) {
      handleCheck(!isDisabled);
    }
  }
  render() {
    let isDisabled = this.state.isDisabled;
    let {
      width,
      height,
      unCheckBackgroundColor,
      unCheckImage,
      checkBackgroundColor,
      checkImage,
      borderWidth,
      borderRadius,
      imageWidth,
      imageHeight
    } = this.props;
    let styles = {
      container: this.state.style.container,
      containerSize: {
        width: width ? width : this.state.style.containerSize.width,
        height: height ? height : this.state.style.containerSize.height
      },
      unCheckBackgroundColor: unCheckBackgroundColor
        ? unCheckBackgroundColor
        : this.state.style.unCheckBackgroundColor,
      unCheckImage: unCheckImage ? unCheckImage : this.state.style.unCheckImage,
      checkBackgroundColor: checkBackgroundColor
        ? checkBackgroundColor
        : this.state.style.checkBackgroundColor,
      checkImage: checkImage ? checkImage : this.state.style.checkImage,
      border: {
        borderWidth: borderWidth
          ? borderWidth
          : this.state.style.border.borderWidth,
        borderRadius: borderRadius
          ? borderRadius
          : this.state.style.border.borderRadius
      },
      imageSize: {
        width: imageWidth ? imageWidth : this.state.style.imageSize.width,
        height: imageHeight ? imageHeight : this.state.style.imageSize.height
      }
    };
    return (
      <TouchableOpacity
        style={[
          styles.container,
          styles.containerSize,
          styles.border,
          {
            backgroundColor: isDisabled
              ? styles.checkBackgroundColor
              : styles.unCheckBackgroundColor
          }
        ]}
        onPress={this._handleCheck}
      >
        {unCheckImage && checkImage ? (
          <Image
            style={styles.imageSize}
            source={isDisabled ? checkImage : unCheckImage}
          />
        ) : null}
      </TouchableOpacity>
    );
  }
}
