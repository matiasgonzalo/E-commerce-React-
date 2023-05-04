import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { Cart } from './components/cart/Cart';
import NavBar from "./components/navBar/NavBar";
import { CartProvider } from './context/CartContext';
//import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          {/** <SideBar /> */}
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'Products'}/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Products'}/>} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="*" element={<h2>404 PAGE NOT FOUND</h2>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
