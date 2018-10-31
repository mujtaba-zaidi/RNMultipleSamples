# Mutiple Samples for React Native

## Branch: **switch**
Contains customized Switch which has properties which can be customized.

```ruby
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
  containerHeight={"5%"} // height of switch.
  handleSwitch={this._handleSwitch} // The action you want to handle on switch. It'll give a boolean parameter which will be true on right side press and false on left side press. 
  leftImage={images.leftImage} // The image will be displayed on left side.
  rightImage={images.rightImage} // The image will be displayed on right side.
/>
```
