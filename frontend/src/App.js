
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {   BrowserRouter,Routes,Route } from 'react-router-dom'; 
import Shop from '../src/Pages/Shop';
import ShopCategory from '../src/Pages/ShopCategory';
import Product from '../src/Pages/Product';
import Cart from '../src/Pages/Cart';
import LoginSignup from '../src/Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import SearchResults from './Components/SearchResults/SearchResults';
// import SearchResults from './Components/SearchResults/SearchResults';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<ShopCategory   category="men"/>} />
          <Route path="/womens" element={<ShopCategory category="women"/>} />
          <Route path="/kids" element={<ShopCategory category="kids"/>} />
          <Route path="/others" element={<ShopCategory  category="others"/>} />
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginSignup/>} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
