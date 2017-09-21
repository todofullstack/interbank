import React, { Component } from 'react'
import { View } from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { CardWithActions } from '../components/Card'
import { InputWithRightButton, InputWithLeftAndRightButton, SimplePicker } from '../components/Input'
import { GradientButton } from '../components/Button'

const withCustomComponent = (WrappedComponent, CustomComponent) => {
  return class extends Component {
    render() {
      const { customProps, ...wrappedProps } = this.props
      return (
        <View style={{
          width: '100%',
          height: 40,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
        >
          <View style={{
            width: '24%',
            height: 40,
            alignItems: 'stretch',
          }}
          >
            <CustomComponent {...customProps} />
          </View>
          <View style={{
            width: '74%',
            height: 40,
            alignItems: 'stretch',
          }}
          >
            <WrappedComponent {...wrappedProps} />
          </View>
        </View>
      )
    }
  }
}

const InputWithRightButtonWithCustomComponent = withCustomComponent(InputWithRightButton, SimplePicker)

class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <Logo version="1" />
        <CardWithActions>
          <InputWithRightButton
            placeholder="N° de tarjeta"
          />
          <InputWithRightButtonWithCustomComponent
            placeholder="N° de documento"
            customProps={{
              data: [
                { label: 'DNI', value: 'dni' },
                { label: 'Pasaporte', value: 'pasaporte' },
                { label: 'CE', value: 'ce' },
              ],
              prompt: 'Selecciona tipo de documento'
            }}
          />
          <InputWithLeftAndRightButton
            leftIconName="ios-information-circle-outline"
            leftIconColor="#0039A6"
            leftIconSize={25}
            rightLabelText="¿La olvidaste?"
            placeholder="Clave web"
            isPassword
          />
          <GradientButton
            buttonLabel="Ingresar"
            height={40}
            width={60}
            onPress={() => alert('ingresando')}
          />
        </CardWithActions>
      </Container>
    )
  }
}

export default LoginScreen
