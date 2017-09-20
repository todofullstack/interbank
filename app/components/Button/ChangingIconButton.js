import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'

import Ionicon from 'react-native-vector-icons/Ionicons'

class ChangingIconButton extends Component {
  constructor(props) {
    super(props)

    const { defaultValue } = props

    this.state = {
      isActive: defaultValue || false
    }
  }

  handlePress = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    const {
      activeIconName,
      activeIconColor,
      inactiveIconName,
      inactiveIconColor,
      style,
      size
    } = this.props
    const { isActive } = this.state

    return (
      <TouchableOpacity
        style={style}
        onPress={this.handlePress}
      >
        <Ionicon
          name={isActive ? activeIconName : inactiveIconName}
          color={isActive ? activeIconColor : inactiveIconColor}
          size={size}
        />
      </TouchableOpacity>
    )
  }
}

ChangingIconButton.propTypes = {
  defaultValue: PropTypes.bool,
  activeIconName: PropTypes.string,
  activeIconColor: PropTypes.string,
  inactiveIconColor: PropTypes.string,
  inactiveIconName: PropTypes.string,
  style: PropTypes.number, // ID RN Stylesheet
  size: PropTypes.number
}

export default ChangingIconButton
