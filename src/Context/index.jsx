import {createContext} from 'react'

const ShoppingCartContex = createContext()

export const ShoppingCartContexProvider = ({children}) => {
  return (
    <ShoppingCartContex.Provider>
        {children}
    </ShoppingCartContex.Provider>
  )
}
