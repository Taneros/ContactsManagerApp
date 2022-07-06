import React from 'react'
import { Text, View } from 'react-native'
import SettingsComponent from '../../components/Settings'
const Settings = () => {
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
      title: 'Contacts to display',
      subTitle: 'All contacts',
      onPress: () => {},
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

  return <SettingsComponent settingsOptions={settingsOptions} />
}
export default Settings
