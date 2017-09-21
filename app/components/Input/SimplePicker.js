import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Picker, View } from 'react-native'

const styles = StyleSheet.create({
  pickerContainer: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth * 4,
    borderBottomColor: '#BDBDBD',
  },
  picker: {
    height: '100%',
  }
})

class SimplePicker extends Component {
  state = {
    documentType: 'dni'
  }

  handleValueChange = (itemValue) => {
    this.setState({ documentType: itemValue })
  }

  renderPickerItems = () => {
    const { data } = this.props

    if (!data) return null
    return data.map(item => (
      <Picker.Item
        key={item.label}
        label={item.label}
        value={item.value}
      />
    ))
  }

  render() {
    const { prompt } = this.props
    return (
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={this.state.documentType}
          onValueChange={this.handleValueChange}
          prompt={prompt}
        >
          {this.renderPickerItems()}
        </Picker>
      </View>
    )
  }
}

SimplePicker.propTypes = {
  data: PropTypes.array,
  prompt: PropTypes.string
}

export default SimplePicker
