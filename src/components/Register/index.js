import { useNavigation, navigationRef } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../common/Container'
import CustomButton from '../common/CustomButton'
import Input from '../common/Input'
import { LOGIN } from '../../constants/routeNames'
import styles from './styles'

const RegisterComponent = ({ onSubmit, onChange, form, errors }) => {
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
            onChangeText={value => {
              onChange({ name: 'userName', value })
            }}
            error={errors.userName}
          />
          <Input
            label="First Name"
            iconPosition="right"
            placeHolder="Enter firstname"
            onChangeText={value => {
              onChange({ name: 'firstName', value })
            }}
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            iconPosition="right"
            placeHolder="Enter lastname"
            onChangeText={value => {
              onChange({ name: 'lastName', value })
            }}
            error={errors.lastName}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeHolder="Enter email"
            onChangeText={value => {
              onChange({ name: 'email', value })
            }}
            error={errors.email}
          />
          <Input
            label="Password"
            icon={<Text>SHOW</Text>}
            iconPosition="right"
            placeHolder="Enter Password"
            secureTextEntry={true}
            onChangeText={value => {
              onChange({ name: 'password', value })
            }}
            error={errors.password}
          />
          <CustomButton onPress={onSubmit} title="Register" />
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
