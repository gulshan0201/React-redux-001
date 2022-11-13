import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Home from './Components/Home';
import Services from './Components/Services';
import Contacts from './Components/Contacts';


function App() {

  const message = useSelector(state => state.message)


  return (
    <>
      <BrowserRouter>
        <div>{message}</div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
