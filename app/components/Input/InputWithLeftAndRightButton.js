import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

const inputHeight = 40

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: inputHeight,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD'
  },
  input: {
    color: '#BDBDBD',
    alignItems: 'flex-start',
    flex: 1,
    height: inputHeight,
  },
  rightLabelContainer: {
    flexDirection: 'row',
  },
  rightLabelText: {
    color: '#6ABE29',
    fontSize: 13
  }
})

class InputWithLeftAndRightButton extends Component {
  state = {
    inputValue: null
  }

  handleInformation = () => {
    alert('i want info')
  }

  handleForgottenPassword = () => {
    alert('i forgot my password')
  }

  handleDeleteValue = () => {
    this.setState({ inputValue: '' })
  }

  renderDeleteValueButton = () => {
    if (!this.state.inputValue || this.state.inputValue === '') {
      return null
    }

    return (
      <TouchableOpacity
        style={styles.deleteValueButton}
        onPress={this.handleDeleteValue}
      >
        <FontAwesomeIcon
          name="times-circle"
          color="#BDBDBD"
          size={15}
        />
      </TouchableOpacity>
    )
  }

  render() {
    const {
      leftIconName,
      leftIconColor,
      leftIconSize,
      rightLabelText,
      placeholder,
      isPassword
    } = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.handleInformation}
        >
          <Ionicon
            name={leftIconName}
            size={leftIconSize}
            color={leftIconColor}
          />
        </TouchableOpacity>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          placeholderTextColor="#BDBDBD"
          secureTextEntry={isPassword}
          style={styles.input}
          onChangeText={text => this.setState({ inputValue: text })}
          value={this.state.inputValue}
        />
        {this.renderDeleteValueButton()}
        <TouchableOpacity
          style={styles.rightLabelContainer}
          onPress={this.handleForgottenPassword}
        >
          <Text style={styles.rightLabelText}>
            {rightLabelText}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

InputWithLeftAndRightButton.propTypes = {
  leftIconName: PropTypes.string,
  leftIconColor: PropTypes.string,
  leftIconSize: PropTypes.number,
  rightLabelText: PropTypes.string,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool
}

export default InputWithLeftAndRightButton
