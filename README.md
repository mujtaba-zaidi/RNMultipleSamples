# Examples

## [**React Native Switch**](https://github.com/mujtaba-zaidi/RNMultipleSamples/tree/switch)
Contains customized Switch which has properties which allow to customize the switch accordingly.

```javascript
<Switch
  leftSideText={"Turn Off"} // Text to be shown on left side.
  rightSideText={"Turn On"} // Text to be shown on right side.
  activatedLeftBackgroundColor={"#f0f8ff"} // When right side is clicked then the background color for left side.
  activatedLeftTextColor={"#5f9ea0"} // When right side is clicked then the text color for left side.
  activatedRightBackgroundColor={"#00ffff"} // When right side is clicked then the background color for right side.
  activatedRightTextColor={"#000000"} // When right side is clicked then the text color for right side.
  deactivatedLeftBackgroundColor={"#00ffff"} // When left side is clicked then the background color for left side.
  deactivatedLeftTextColor={"#000000"} // When left side is clicked then the text color for left side.
  deactivatedRightBackgroundColor={"#f0f8ff"} // When left side is clicked then the background color for right side.
  deactivatedRightTextColor={"#5f9ea0"} // When left side is clicked then the text color for right side.
  containerWidth={"30%"} // Width of switch.
  containerHeight={"5%"} // Height of switch.
  handleSwitch={this._handleSwitch} // The action you want to handle on switch. It'll give a boolean parameter which will be true on right side press and false on left side press. 
  leftImage={images.leftImage} // The image will be displayed on left side.
  rightImage={images.rightImage} // The image will be displayed on right side.
  textStyle={{ fontSize: 20 }} // The text on the switch can be customized.

/>
```

## [**React Native CheckBox**](https://github.com/mujtaba-zaidi/RNMultipleSamples/tree/checkbox)
Contains customized Checkbox which has properties which allow to customize the switch accordingly.

```javascript
<Checkbox
  unCheckBackgroundColor={"#ffffff"} //  The background color when the checkbox is unchecked. 
  checkBackgroundColor={"#ffffff"} //  The background color when the checkbox is checked.
  width={100} // Width of checkbox.
  height={100} // Height of checkbox.
  borderWidth={3} // Width of checkbox's border.
  borderRadius={40} // Radius of Checkbox.
  imageWidth={60} // Width of image to be displayed in checkbox.
  imageHeight={60} // Height of image to be displayed in checkbox.
  unCheckImage={images.unCheck} // Image to be displayed when checkbox is unchecked.
  checkImage={images.check} // Image to be displayed when checkbox is checked.
  _handleCheck={this._handleCheck} // The action you want to handle on switch. It'll give a boolean parameter which will be true on right side press and false on left side press. 
/>
```
*Note:* `If the property is not given in the component then the default value will be set against that property.`

## Author

**Mujtaba Zaidi**

## Acknowledgments

* [Icon Finder](https://www.iconfinder.com/) for free icons.
