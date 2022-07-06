import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import SettingsComponent from '../../components/Settings'

const Settings = () => {
  const [email, setEmail] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [sortBy, setSortBy] = useState('')

  const settingsOptions = [
    {
      title: 'My Info',
      subTitle: 'Setup your profile',
      onPress: () => {},
    },
    {
      title: 'Accounts',
      subTitle: null,
      onPress: () => {},
    },
    {
      title: 'Default Contact Details',
      subTitle: 'hello@you.me',
      onPress: () => {},
    },
    {
      title: 'Contacts to display',
      subTitle: 'All contacts',
      onPress: () => {},
    },
    {
      title: 'Sort by',
      subTitle: sortBy,
      onPress: () => setModalVisible(true),
    },
    {
      title: 'Name format',
      subTitle: 'First name first',
      onPress: () => {},
    },
    {
      title: 'Import',
      subTitle: null,
      onPress: () => {},
    },
    {
      title: 'Export',
      subTitle: null,
      onPress: () => {},
    },
    {
      title: 'Blocked numbers',
      subTitle: null,
      onPress: () => {},
    },
    {
      title: 'About contacts',
      subTitle: null,
      onPress: () => {},
    },
  ]

  const getSettings = async () => {
    try {
      const user = await AsyncStorage.getItem('user')
      user && setEmail(JSON.parse(user).email)

      const sortPref = await AsyncStorage.getItem('sortBy')
      sortPref && setSortBy(sortPref)
    } catch (error) {
      console.log(`error`, error)
    }
  }

  useEffect(() => {
    getSettings()
  }, [])

  const saveSetting = (key, val) => {
    AsyncStorage.setItem(key, val)
  }

  const prefArr = [
    {
      name: 'First Name',
      selected: sortBy === 'First Name',
      onPress: () => {
        saveSetting('sortBy', 'First Name')
        setSortBy('First Name')
      },
    },
    {
      name: 'Last Name',
      selected: sortBy === 'Last Name',
      onPress: () => {
        saveSetting('sortBy', 'Last Name')
        setSortBy('Last Name')
      },
    },
  ]

  return (
    <SettingsComponent
      settingsOptions={settingsOptions}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      prefArr={prefArr}
    />
  )
}
export default Settings
