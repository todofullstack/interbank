import React from 'react'
import PropTypes from 'prop-types'
import {
  Dimensions,
  StyleSheet,
  View,
  Text
} from 'react-native'

import Ionicon from 'react-native-vector-icons/Ionicons'

const { width, height } = Dimensions.get('window')
const DEVICE_HEIGHT = height
const DEVICE_WIDTH = width

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBlue: {
    color: '#0039A6',
    fontSize: 40,
  },
  logoGreen: {
    color: '#009B3A',
    fontSize: 40,
  }
})

const Logo = ({ version }) => (
  <View style={styles.container}>
    <Ionicon
      style={{ marginHorizontal: 5 }}
      name="ios-card-outline"
      color="#0039A6"
      size={40}
    />
    <Text style={styles.logoGreen}>
      Perú
    </Text>
    <Text style={styles.logoBlue}>
      Bank
    </Text>
  </View>
)

Logo.propTypes = {
  version: PropTypes.string
}

export default Logo
