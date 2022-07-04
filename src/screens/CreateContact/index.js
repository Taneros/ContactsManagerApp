import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import CreateContactComponent from '../../components/CreateContactComponent'
import { CONTACT_LIST } from '../../constants/routeNames'
import createContact from '../../context/actions/contacts/createContact'
import { GlobalContext } from '../../context/Provider'

const CreateContact = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContact: { loading, error, data },
    },
  } = useContext(GlobalContext)
  const [form, setForm] = useState({})
  const { navigate } = useNavigation()

  const onChangeText = ({ name, value }) => {
    setForm({ ...form, [name]: value })
  }

  const onSubmit = () => {
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST)
    })
  }

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      onSubmit={onSubmit}
      loading={loading}
      error={error}
    />
  )
}

export default CreateContact
