import { useState } from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import CardWidget from './CartWidget';

const App = () => {


  return (
    <div className='item'>
      
      <NavBar />
      <ItemListContainer nombre="Juani" apellido= "Amalfitano" />
      
    </div>
  );
}

export default App;
