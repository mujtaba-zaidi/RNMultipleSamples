import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { defaultStyles } from "./SwitchStyle";
export default class Switch extends Component {
  constructor() {
    super();
    this.state = {
      activatedLeftBackgroundColor: "#c0c0c0",
      activatedLeftTextColor: "#4c4c4c",
      activatedRightBackgroundColor: "#009900",
      activatedRightTextColor: "#ffffff",
      deactivatedLeftBackgroundColor: "#494949",
      deactivatedLeftTextColor: "#bababa",
      deactivatedRightBackgroundColor: "#c0c0c0",
      deactivatedRightTextColor: "#4c4c4c",
      containerWidth: "50%",
      containerHeight: "20%",
      commonButtonStyle: defaultStyles.commonButton,
      containerStyle: defaultStyles.container,
      leftButtonStyle: defaultStyles.leftButton,
      rightButtonStyle: defaultStyles.rightButton,
      commonTextStyle: defaultStyles.commonText,
      leftSideText: "Off",
      rightSideText: "On",
      isDisabled: false
    };
    this._handleOnOffPress = this._handleOnOffPress.bind(this);
  }
  componentWillReceivePropsMount(nProps) {}
  _handleOnOffPress() {
    let isDisabled = this.state.isDisabled;
    this.setState({
      isDisabled: !isDisabled
    });
  }
  render() {
    let isDisabled = this.state.isDisabled;
    let {
      leftSideText,
      rightSideText,
      activatedLeftBackgroundColor,
      activatedLeftTextColor,
      activatedRightBackgroundColor,
      activatedRightTextColor,
      deactivatedLeftBackgroundColor,
      deactivatedLeftTextColor,
      deactivatedRightBackgroundColor,
      deactivatedRightTextColor,
      containerWidth,
      containerHeight
    } = this.props;
    let texts = {
      left: leftSideText ? leftSideText : this.state.leftSideText,
      right: rightSideText ? rightSideText : this.state.rightSideText
    };
    let styles = {
      activatedLeftBackgroundColor: activatedLeftBackgroundColor
        ? activatedLeftBackgroundColor
        : this.state.activatedLeftBackgroundColor,
      activatedLeftTextColor: activatedLeftTextColor
        ? activatedLeftTextColor
        : this.state.activatedLeftTextColor,
      activatedRightBackgroundColor: activatedRightBackgroundColor
        ? activatedRightBackgroundColor
        : this.state.activatedRightBackgroundColor,
      activatedRightTextColor: activatedRightTextColor
        ? activatedRightTextColor
        : this.state.activatedRightTextColor,
      deactivatedLeftBackgroundColor: deactivatedLeftBackgroundColor
        ? deactivatedLeftBackgroundColor
        : this.state.deactivatedLeftBackgroundColor,
      deactivatedLeftTextColor: deactivatedLeftTextColor
        ? deactivatedLeftTextColor
        : this.state.deactivatedLeftTextColor,
      deactivatedRightBackgroundColor: deactivatedRightBackgroundColor
        ? deactivatedRightBackgroundColor
        : this.state.deactivatedRightBackgroundColor,
      deactivatedRightTextColor: deactivatedRightTextColor
        ? deactivatedRightTextColor
        : this.state.deactivatedRightTextColor,
      containerSize: {
        width: containerWidth ? containerWidth : this.state.containerWidth,
        height: containerHeight ? containerHeight : this.state.containerHeight
      },
      containerStyle: this.state.containerStyle,
      leftButtonStyle: this.state.leftButtonStyle,
      rightButtonStyle: this.state.rightButtonStyle,
      commonButtonStyle: this.state.commonButtonStyle
    };
    return (
      <View
        style={[
          styles.containerSize,
          styles.containerStyle,
          styles.rightButtonStyle,
          styles.leftButtonStyle
        ]}
      >
        <TouchableOpacity
          style={[
            styles.commonButtonStyle,
            styles.leftButtonStyle,
            {
              backgroundColor: !isDisabled
                ? styles.deactivatedLeftBackgroundColor
                : styles.activatedLeftBackgroundColor
            }
          ]}
          onPress={this._handleOnOffPress}
          disabled={!isDisabled}
        >
          <Text
            style={{
              color: !isDisabled
                ? styles.deactivatedLeftTextColor
                : styles.activatedLeftTextColor
            }}
          >
            {texts.left}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.commonButtonStyle,
            styles.rightButtonStyle,
            {
              backgroundColor: !isDisabled
                ? styles.deactivatedRightBackgroundColor
                : styles.activatedRightBackgroundColor
            }
          ]}
          onPress={this._handleOnOffPress}
          disabled={isDisabled}
        >
          <Text
            style={{
              color: !isDisabled
                ? styles.deactivatedRightTextColor
                : styles.activatedRightTextColor
            }}
          >
            {texts.right}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
