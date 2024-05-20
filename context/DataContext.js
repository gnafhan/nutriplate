import React, { createContext, useState } from 'react'

// Create a new context
const DataContext = createContext()

// Create a provider component
const DataProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [screenshot, setScreenshot] = useState(null)
  const [size, setSize] = useState({})

  return (
    <DataContext.Provider
      value={{ data, setData, screenshot, setScreenshot, size, setSize }}
    >
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }
