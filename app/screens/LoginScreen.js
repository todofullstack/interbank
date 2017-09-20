import React, { Component } from 'react'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { CardWithActions } from '../components/Card'

class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <Logo version="1" />
        <CardWithActions>
        </CardWithActions>
      </Container>
    )
  }
}

export default LoginScreen
