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

_Note:_ `If the property is not given in the component then the default value will be set against that property.`

## Author

**Mujtaba Zaidi**

## Acknowledgments

- [Icon Finder](https://www.iconfinder.com/) for free icons.
