import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import Container from '../../components/common/Container'
import Input from '../../components/Input'

const Login = () => {
  const [value, setValue] = useState('')

  return (
    <Container>
      <Input
        label="Username"
        handleOnChangeText={text => setValue(text)}
        value={value}
        iconPosition="right"
        // error={'This field is required'}
      />
      <Input
        label="Password"
        handleOnChangeText={text => setValue(text)}
        value={value}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
    </Container>
  )
}
export default Login
const styles = StyleSheet.create({})
