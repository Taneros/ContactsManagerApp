import React, { createContext, useReducer } from 'react'
import authInitState from './initialStates/authInitState'
import contactsInitState from './initialStates/contactsInitState'
import auth from './reducers/auth'
import contacts from './reducers/contacts'

export const GlobaContext = createContext({})

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitState)
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    contactsInitState
  )

  return (
    <GlobaContext.Provider
      value={{ authState, contactsState, authDispatch, contactsDispatch }}>
      {children}
    </GlobaContext.Provider>
  )
}

export default GlobalProvider
