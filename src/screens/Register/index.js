import React, { useState, useEffect } from 'react'
import RegisterComponent from '../../components/Register'
import axios from '../../helpers/axiosInterceptor'

const Register = () => {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  useEffect(() => {
    axios.get('/contacts').catch(error => console.log(`error`, error.response))
  }, [])

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
  }

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  )
}
export default Register
