import { useNavigation, navigationRef } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../../components/common/Container'
import CustomButton from '../../components/common/CustomButton'
import Input from '../../components/common/Input'
import { REGISTER } from '../../constants/routeNames'
import Message from '../common/Message'
import styles from './styles'

const LoginComponent = () => {
  const { navigate } = useNavigation()
  const route = navigationRef

  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to Contaxts</Text>
        <Text style={styles.subtitle}>Please login here</Text>

        <Message
          retry
          retryFn={() => {
            console.log(`retry`)
          }}
          danger
          onDismiss={() => {
            console.log(`dismissed!`)
          }}
          message={'Invalid credentials'}
        />

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeHolder="Enter Username"
            // error={'This field is required'}
          />
          <Input
            label="Password"
            icon={<Text>SHOW</Text>}
            iconPosition="right"
            placeHolder="Enter Password"
            secureTextEntry={true}
          />
          <CustomButton title="Login" />
          <View style={styles.createNewAccount}>
            <Text style={styles.createNewAccountText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER)
                // navigationRef.navigate(REGISTER)
              }}>
              <Text style={styles.createNewAccountBtnText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  )
}
export default LoginComponent
