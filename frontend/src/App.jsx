import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Components
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
//pages
import { Login } from './pages/Auth/Login';
import { Register } from './pages/Auth/Register';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar />
      <div className="container">
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/register' element={ <Register /> }/>
       </Routes>
      </div>
       <Footer />
       </BrowserRouter>
    </div>
  );
}

export default App;
