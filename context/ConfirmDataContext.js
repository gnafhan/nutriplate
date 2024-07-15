import React, { createContext, useState } from 'react'

// Create a new context
const ConfirmDataContext = createContext()

const ConfirmDataProvider = ({ children }) => {
  const [dataConfirm, setDataConfirm] = useState([])
  const [imageUrl, setImageUrl] = useState('')

  return (
    <ConfirmDataContext.Provider
      value={{ dataConfirm, setDataConfirm, imageUrl, setImageUrl}}
    >
      {children}
    </ConfirmDataContext.Provider>
  )
}

export { ConfirmDataContext, ConfirmDataProvider }
