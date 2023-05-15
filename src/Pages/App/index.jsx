import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import NotFound from '../NotFound'
import Signin from '../Signin'

function App() {

  return (
    <div className='bg-red-100'>
      <Home/>
      <MyAccount/>
      <MyOrders/>
      <MyOrder/>
      <Signin/>
      <NotFound/>
    </div>
  )
}

export default App
