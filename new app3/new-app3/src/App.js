import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Shop } from './pages/shop/Shop';
import {Cart} from './pages/cart/Cart'

import {Routes,Route} from 'react-router-dom'
import { ShopContextProvider } from './Context/shop-context';
import { Home } from './Routes/Home';






function App() {
  return (
    <div className="App">

      <ShopContextProvider>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>

      </Routes>

      </ShopContextProvider>
    </div>
  );
}

export default App;
