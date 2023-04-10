import React from 'react'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import NavBar from "./components/navBar/NavBar";
//import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <>
      <NavBar />
      {/** <SideBar /> */}
      <ItemListContainer />
    </>
  );
}

export default App;
