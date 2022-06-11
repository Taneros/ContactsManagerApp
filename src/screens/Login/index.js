import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/Provider'

import LoginComponent from '../../components/Login'
import login from '../../context/actions/auth/login'

const Login = () => {
  const [form, setForm] = useState({})
  const {
    authDispatch,
    authState: { error, loading },
  } = useContext(GlobalContext)

  const onSubmit = () => {
    if (form.userName && form.password) {
      login(form)(authDispatch)
    }
  }

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value })
  }

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
    />
  )
}
export default Login
