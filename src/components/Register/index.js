import { useNavigation, navigationRef } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../common/Container'
import CustomButton from '../common/CustomButton'
import Input from '../common/Input'
import { LOGIN } from '../../constants/routeNames'
import styles from './styles'

const RegisterComponent = () => {
  const { navigate } = useNavigation()

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
        <Text style={styles.subtitle}>Create a free account</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeHolder="Enter Username"
            // error={'This field is required'}
          />
          <Input
            label="First Name"
            iconPosition="right"
            placeHolder="Enter firstname"
            // error={'This field is required'}
          />
          <Input
            label="Last Name"
            iconPosition="right"
            placeHolder="Enter lastname"
            // error={'This field is required'}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeHolder="Enter email"
            // error={'This field is required'}
          />
          <Input
            label="Password"
            icon={<Text>SHOW</Text>}
            iconPosition="right"
            placeHolder="Enter Password"
            secureTextEntry={true}
          />
          <CustomButton title="Register" />
          <View style={styles.createNewAccount}>
            <Text style={styles.createNewAccountText}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN)
              }}>
              <Text style={styles.createNewAccountBtnText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  )
}
export default RegisterComponent
