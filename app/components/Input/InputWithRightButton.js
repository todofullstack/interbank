import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, View, TextInput } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import { CardActionSeparator } from '../Separator'
import { ChangingIconButton } from '../Button'

const inputHeight = 40

const styles = StyleSheet.create({
  container: {
    height: inputHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    height: inputHeight,
    color: '#BDBDBD',
  },
  deleteValueButton: {
    height: 15,
    width: 15,
  },
  changingIconButton: {
    marginLeft: 10
  }
})

class InputWithRightButton extends Component {
  state = {
    isFocused: false,
    inputValue: null
  }

  handleBlur = () => {
    this.setState({ isFocused: false })
  }

  handleFocus = () => {
    this.setState({ isFocused: true })
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
    const inputContainerStyle = [styles.inputContainer]
    if (this.state.isFocused) {
      inputContainerStyle.push({
        borderBottomColor: '#009B3A'
      })
    }

    const { placeholder } = this.props

    return (
      <View style={styles.container}>
        <View style={inputContainerStyle}>
          <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor="#BDBDBD"
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChangeText={text => this.setState({ inputValue: text })}
            value={this.state.inputValue}
          />
          {this.renderDeleteValueButton()}
          <CardActionSeparator
            height={20}
            width={1}
            color="#BDBDBD"
          />
        </View>
        <ChangingIconButton
          style={styles.changingIconButton}
          activeIconName="ios-lock-outline"
          activeIconColor="#009B3A"
          inactiveIconName="ios-unlock-outline"
          inactiveIconColor="#BDBDBD"
          size={30}
          defaultValue
        />
      </View>
    )
  }
}

export default InputWithRightButton

