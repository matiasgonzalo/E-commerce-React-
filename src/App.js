import React from 'react';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import NavBar from "./components/navBar/NavBar";
//import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <>
      <NavBar />
      {/** <SideBar /> */}
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
}

export default App;
