import { useNavigation } from '@react-navigation/native'
import React, { useContext, useRef, useState } from 'react'
import { CreateContactComponent } from '../../components/CreateContact'
import { CONTACT_LIST } from '../../constants/routeNames'
import createContact from '../../context/actions/contacts/createContact'
import { GlobalContext } from '../../context/Provider'
import uploadImage from '../../helpers/uploadImage'

const CreateContact = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContact: { loading, error, data },
    },
  } = useContext(GlobalContext)
  const [form, setForm] = useState({})
  const [imageFile, setImageFile] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const { navigate } = useNavigation()

  const sheetRef = useRef(null)

  const onChangeText = ({ name, value }) => {
    setForm({ ...form, [name]: value })
  }

  const onSubmit = () => {
    if (imageFile?.size) {
      setIsUploading(true)
      uploadImage({ imageFile, form })(url => {
        setIsUploading(false)
        createContact({ ...form, contactPicture: url })(contactsDispatch)(
          id => {
            navigate(CONTACT_LIST, { successCreate: true, id })
          }
        )
      })(err => {
        console.log('error uploading', err)
        setForm(prev => ({ ...prev, error: { uploadError: err } })) //TODO: show this error make a component
      })
    } else {
      createContact(form)(contactsDispatch)(id => {
        navigate(CONTACT_LIST, { successCreate: true, id })
      })
    }
  }

  const openSheet = () => {
    if (sheetRef.current) sheetRef.current.open()
  }

  const closeSheet = () => {
    if (sheetRef.current) sheetRef.current.close()
  }

  const onImageSelect = image => {
    closeSheet()
    setImageFile(image)
  }

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      onSubmit={onSubmit}
      loading={loading || isUploading}
      error={error}
      setForm={setForm}
      sheetRef={sheetRef}
      openSheet={openSheet}
      closeSheet={closeSheet}
      onImageSelect={onImageSelect}
      imageFile={imageFile}
    />
  )
}

export default CreateContact
