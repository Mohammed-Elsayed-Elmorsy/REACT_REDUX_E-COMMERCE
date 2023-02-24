import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './components/Products/Products'
import Product from './components/Product/Product'
import { Store } from './components/redux/Store'
import { Provider } from 'react-redux'
import Cart from './components/Cart/Cart'
const App = () => {
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/cart' exact element={<Cart />} />
                    <Route path='/products' exact element={<Products />} />
                    <Route path='/products/:id' exact element={<Product />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App
