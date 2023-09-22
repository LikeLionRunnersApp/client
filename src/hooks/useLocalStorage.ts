import { useState, useEffect } from 'react'

function useLocalStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error, return initialValue
      console.error(`Error reading localStorage key "${key}": ${error}`)
      return initialValue
    }
  })

  // Update the local storage whenever storedValue changes
  useEffect(() => {
    try {
      // Serialize state to string
      const serializedValue = JSON.stringify(storedValue)
      // Save to local storage
      window.localStorage.setItem(key, serializedValue)
    } catch (error) {
      console.error(`Error writing localStorage key "${key}": ${error}`)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}

export default useLocalStorage
