import React from 'react'
import PropTypes from 'prop-types'
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native'

import Ionicon from 'react-native-vector-icons/Ionicons'

import { CardActionSeparator } from '../Separator'

const { width, height } = Dimensions.get('window')
const RADIUS = 10

const styles = StyleSheet.create({
  container: {
    height: height * 0.4,
    width: width * 0.9,
    borderRadius: RADIUS,
    marginBottom: height * 0.05
  },
  cardContent: {
    height: (height * 0.4) * 0.8,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.04
  },
  cardActions: {
    height: (height * 0.4) * 0.2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomLeftRadius: RADIUS,
    borderBottomRightRadius: RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  actionButton: {
    paddingHorizontal: 33,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionIcon: {
    height: 30,
    width: 30
  }
})

class CardWithActions extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  handleRegister = () => {
    alert('register')
  }

  handleCall = () => {
    alert('call')
  }

  handleMap = () => {
    alert('map')
  }

  render() {
    const { children } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.cardContent}>
          {children}
        </View>
        <View style={styles.cardActions}>
          <TouchableOpacity
            onPress={this.handleRegister}
            style={styles.actionButton}
          >
            <Ionicon
              style={styles.actionIcon}
              size={30}
              color="white"
              name="ios-person-add-outline"
            />
          </TouchableOpacity>
          <CardActionSeparator color="white" height={20} />
          <TouchableOpacity
            onPress={this.handleCall}
            style={styles.actionButton}
          >
            <Ionicon
              style={styles.actionIcon}
              size={30}
              color="white"
              name="ios-headset-outline"
            />
          </TouchableOpacity>
          <CardActionSeparator color="white" height={20} />
          <TouchableOpacity
            onPress={this.handleMap}
            style={styles.actionButton}
          >
            <Ionicon
              style={styles.actionIcon}
              size={30}
              color="white"
              name="ios-pin-outline"
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default CardWithActions
