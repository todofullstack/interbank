import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  button: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '100%'
  },
  buttonLabel: {
    fontSize: 18,
    color: '#ffffff'
  }
})

const GradientButton = ({ buttonLabel, onPress, height, width }) => {
  const containerStyle = [styles.container]
  containerStyle.push({
    height,
    width: `${width}%`
  })
  return (
    <TouchableOpacity
      onPress={onPress}
      style={containerStyle}
    >
      <LinearGradient
        style={styles.button}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1, y: 0 }}
        colors={['#069556', '#00756D', '#005C82']}
        locations={[0.2, 0.5, 1]}
      >
        <Text style={styles.buttonLabel}>
          {buttonLabel}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

GradientButton.propTypes = {
  buttonLabel: PropTypes.string,
  onPress: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.number
}

export default GradientButton
