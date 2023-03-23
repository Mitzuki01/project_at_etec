import logo from './logo.svg';
import './App.css';
import Login from './components/login/TelaOne';
import Cadastro from './components/cadastro/TelaCadastro';
import Home from './components/home/Home.jsx';
import {ToastContainer} from 'react-toastify';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>

      
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

 
