
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from './Home/indexPage'
import Home from './Home/homeContainer/home'
import Catalog from './catalog/catalog'
import ItemProduct from './productItem/itemProduct'
import MyCart from './cart/myCart'
import Store from './store/store'
import Login from './authentication/login'
import SignupClient from './authentication/clientSign'
import SignupMerchant from './authentication/signupMerchant'
import Stores from './stores/stores'

function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexPage/>}>
            <Route index element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/catalog' element={<Catalog/>} />
            <Route path='/item' element={<ItemProduct/>} />
            <Route path='/cart' element={<MyCart/>} />
            <Route path='/store' element={<Store/>} />
            <Route path='/stores' element={<Stores/>} />
          </Route>
          <Route >
            <Route path='/logIn' element={<Login/>} />
            <Route path='/client' element={<SignupClient/>} />
            <Route path='/merchant' element={<SignupMerchant/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
