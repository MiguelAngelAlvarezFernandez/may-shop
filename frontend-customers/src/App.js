import './App.css';
import Header from './components/Header/Header';
import Navigator from './components/Navigator/Navigator';
import { BrowserRouter } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';

const CarritoContext = createContext()

function App() {

  const  stateCarrito = useState({})

  useEffect(
    traerCarrito,
    []
  )

  function traerCarrito() {
    const [_, setCarrito] = stateCarrito
    fetchCarrito(setCarrito)
  }

  return (
    <>
    <BrowserRouter>
    <CarritoContext.Provider value={stateCarrito}>
      <Header/>
      <Navigator/>
    </CarritoContext.Provider>
    </BrowserRouter>
    </>
  );
}

export {App, CarritoContext}
