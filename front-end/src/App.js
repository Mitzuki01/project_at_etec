import './App.css';
import Login from './components/login/TelaOne';
import Cadastro from './components/cadastro/TelaCadastro';
import Ator from './components/ator/Ator'
import Home from './components/home/Home'
import {ToastContainer} from 'react-toastify';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Protecte from './components/protected/Protected.jsx'
import Error from './components/error/Error';

function App() {
  return (
    <div>

      
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/ator' element={<Ator/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/protected' element={<Protecte/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

 
