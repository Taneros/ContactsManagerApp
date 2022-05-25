import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import Container from '../../components/common/Container'
import Input from '../../components/Input'

const Login = () => {
  const [value, setValue] = useState('Placeholder')

  return (
    <Container>
      <Input
        label="Username"
        handleOnChangeText={text => setValue(text)}
        value={value}
        icon={<Text>I</Text>}
        iconPosition="right"
      />
    </Container>
  )
}
export default Login
const styles = StyleSheet.create({})
