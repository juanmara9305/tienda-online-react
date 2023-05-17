import {createContext, useState} from 'react'

export const ShoppingCartContex = createContext()

export const ShoppingCartContexProvider = ({children}) => {
    
  const [count, setCount] = useState(0);  
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () =>{
      setIsProductDetailOpen(true)
  }

  const closeProductDetail = () =>{
    setIsProductDetailOpen(false)
}

  return (
    <ShoppingCartContex.Provider
        value={
            {
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen
            }
        }
    >
        {children}
    </ShoppingCartContex.Provider>
  )
}
