import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContex } from '../../Context'

const ProductDetail = () => {

    const contex = useContext(ShoppingCartContex);

    return (
        <aside 
            className= {`${contex.isProductDetailOpen ? 'flex': 'hidden'} product-detail flex-col fixed right-0 border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => {
                        contex.closeProductDetail()
                    }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>                            
        </aside>
    )
}

export default ProductDetail