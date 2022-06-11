import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import RegisterComponent from '../../components/Register'
import axios from '../../helpers/axiosInterceptor'
import register, { clearAuthState } from '../../context/actions/auth/register'
import { GlobalContext } from '../../context/Provider'
import { LOGIN } from '../../constants/routeNames'

const Register = () => {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})
  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext)
  const { navigate } = useNavigation()

  useEffect(() => {
    // axios.get('/contacts').catch(error => console.log(`error`, error.response))
  }, [])

  useEffect(() => {
    if (data) {
      navigate(LOGIN)
    }
  }, [data])

  useFocusEffect(
    React.useCallback(() => {
      console.log(`before return`)
      return () => {
        console.log(`after return`)
        if (data || error) {
          clearAuthState()(authDispatch)
        }
      }
    }, [data, error])
  )

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value })

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => ({
            ...prev,
            [name]: 'This field needs min 6 characters!',
          }))
        } else {
          setErrors(prev => ({ ...prev, [name]: null }))
        }
      } else {
        setErrors(prev => ({ ...prev, [name]: null }))
      }
    } else {
      setErrors(prev => ({ ...prev, [name]: 'This field is required!' }))
    }
  }

  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prev => ({ ...prev, userName: 'Username field is required!' }))
    }
    if (!form.firstName) {
      setErrors(prev => ({
        ...prev,
        firstName: 'First Name field is required!',
      }))
    }
    if (!form.lastName) {
      setErrors(prev => ({
        ...prev,
        lastName: 'Last Name field is required!',
      }))
    }
    if (!form.email) {
      setErrors(prev => ({
        ...prev,
        email: 'Email field is required!',
      }))
    }
    if (!form.password) {
      setErrors(prev => ({
        ...prev,
        password: 'Password field is required!',
      }))
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(error => !error)
    ) {
      register(form)(authDispatch)
    }
  }

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  )
}
export default Register
