import './App.css';
import Header from './components/Header/Header';
import Navigator from './components/Navigator/Navigator';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Navigator/>
    </BrowserRouter>
    </>
  );
}

export default App;
