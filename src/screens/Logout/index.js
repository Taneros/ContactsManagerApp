import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect } from 'react'
import logout from '../../context/actions/auth/logout'
import { GlobalContext } from '../../context/Provider'

const Logout = () => {
  const { authDispatch } = useContext(GlobalContext)

  useEffect(() => {
    logout()(authDispatch)
  }, [])
  return <ActivityIndicator />
}

export default Logout
