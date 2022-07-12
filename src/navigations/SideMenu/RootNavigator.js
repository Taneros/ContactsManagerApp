import React from 'react'

export const navigationRef = React.createRef(null)

export const navigate = (name, params) => {
  navigationRef.current.isReady() &&
    navigationRef.current.navigate(name, params)
}
