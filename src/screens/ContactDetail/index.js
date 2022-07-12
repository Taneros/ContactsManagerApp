import { useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ContactDetailsComponent from '../../components/ContactDetails'

const ContactDetail = () => {
  const { params: { item = {} } = {} } = useRoute()

  return <ContactDetailsComponent contact={item} />
}
export default ContactDetail
const styles = StyleSheet.create({})
