
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from './Home/indexPage'
import Home from './Home/homeContainer/home'
import Catalog from './catalog/catalog'
import ItemProduct from './productItem/itemProduct'
import MyCart from './cart/myCart'

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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
