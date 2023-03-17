import logo from './logo.svg';
import './App.css';
import Login from './components/login/TelaOne';
import Cadastro from './components/cadastro/TelaCadastro';
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
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

 
