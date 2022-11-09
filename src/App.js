import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <div className="App">
      <>
      <NavBar/>
      <ItemListContainer title={"Nombre producto"} greeting={"Hello"}/>
      </>
    </div>
  );
}

export default App;
