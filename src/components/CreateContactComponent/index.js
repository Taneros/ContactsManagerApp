import React from 'react'
import { Image, Text, View } from 'react-native'
import Container from '../common/Container'
import Input from '../common/Input'
import CustomButton from '../common/CustomButton'
import styles from './style'
import DEFAULT_IMAGE_URI from '../../constants/general'

const CreateContactComponent = () => {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          // source={{ uri: DEFAULT_IMAGE_URI }}
          source={require('../../assets/images/avatar_default_head_person.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileImageText}>Choose picture</Text>
        <Input label="First name" placeholder="Enter first name" />
        <Input label="Last name" placeholder="Enter last name" />
        <Input label="Phone number" placeholder="Enter phone number" />
        <CustomButton style={{ marginTop: 50 }} primary title="Submit" />
      </Container>
    </View>
  )
}
export default CreateContactComponent
