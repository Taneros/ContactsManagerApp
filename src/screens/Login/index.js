import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/Provider'

import LoginComponent from '../../components/Login'
import login from '../../context/actions/auth/login'
import { useRoute } from '@react-navigation/native'

const Login = () => {
  const [form, setForm] = useState({})

  const { params } = useRoute()

  const [info, setInfo] = useState({})

  useEffect(() => {
    if (params?.data) {
      setInfo({ info: params.data.username })
    }
  }, [params])

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
      info={info}
    />
  )
}
export default Login
