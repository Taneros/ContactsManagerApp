import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { CreateContactComponent } from '../../components/CreateContact'
import { CONTACT_LIST } from '../../constants/routeNames'
import createContact from '../../context/actions/contacts/createContact'
import editContact from '../../context/actions/contacts/editContact'
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
  const { navigate, setOptions } = useNavigation()
  const sheetRef = useRef(null)
  const { params } = useRoute()

  useEffect(() => {
    if (params?.contact) {
      const {
        contact_picture: contactPicture = null,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        is_favorite: isFavorite,
      } = params.contact

      setOptions({ title: 'Update contact' })

      setForm(prev => ({
        ...prev,
        firstName,
        lastName,
        phoneNumber,
        isFavorite,
      }))

      contactPicture && setImageFile({ path: contactPicture })
    }
  }, [])

  const onChangeText = ({ name, value }) => {
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const onSubmit = () => {
    if (imageFile?.size) {
      setIsUploading(true)
      uploadImage({ imageFile, form })(url => {
        setIsUploading(false)
        // check if editing or new contact
        params?.contact
          ? editContact(
              { ...form, contactPicture: imageFile.path },
              params.contact.id
            )(contactsDispatch)(id => {
              navigate(CONTACT_LIST, { successCreate: true, id })
            })
          : createContact({ ...form, contactPicture: url })(contactsDispatch)(
              id => {
                navigate(CONTACT_LIST, { successCreate: true, id })
              }
            )
      })(err => {
        console.log('error uploading', err)
        setForm(prev => ({ ...prev, error: { uploadError: err } })) //TODO: show this error make a component
      })
    } else {
      params?.contact
        ? editContact(
            { ...form, contactPicture: imageFile.path },
            params.contact.id
          )(contactsDispatch)(id => {
            navigate(CONTACT_LIST, { successCreate: true, id })
          })
        : createContact(form)(contactsDispatch)(id => {
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
