import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../../components/common/Container'
import CustomButton from '../../components/common/CustomButton'
import Input from '../../components/common/Input'
import { REGISTER } from '../../constants/routeNames'
import Message from '../common/Message'
import styles from './styles'

const LoginComponent = ({ onSubmit, onChange, form, error, loading }) => {
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
        <Text style={styles.subtitle}>Please login here</Text>

        <View style={styles.form}>
          {error && !error.error && (
            <Message danger onDismiss={() => {}} message={error?.error} />
          )}
          {error?.error && (
            <Message danger onDismiss={() => {}} message={error?.error} />
          )}
          <Input
            label="Username"
            iconPosition="right"
            placeHolder="Enter Username"
            onChangeText={value => {
              onChange({ name: 'userName', value })
            }}
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
          />
          <CustomButton
            disabled={loading}
            loading={loading}
            onPress={onSubmit}
            title="Login"
          />
          <View style={styles.createNewAccount}>
            <Text style={styles.createNewAccountText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER)
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
