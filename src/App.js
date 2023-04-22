import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import NavBar from "./components/navBar/NavBar";
//import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/** <SideBar /> */}
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Products'}/>}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Products'}/>}></Route>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
          <Route path="*" element={<h2>404 PAGE NOT FOUND</h2>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
