import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import NotFound from '../NotFound'
import Signin from '../Signin'
import '../App/App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account',element: <MyAccount />},
    {path: '/my-orders',element: <MyOrders />},
    {path: '/my-order',element: <MyOrder />},
    {path: '/*',element: <NotFound />},
    {path: '/sign-in',element: <Signin />}
  ]);

  return routes;
};

function App() {
  

  return (
    <BrowserRouter>
      <AppRoutes />
      
    </BrowserRouter>
  )
}

export default App
