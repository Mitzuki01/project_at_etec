import React from "react";
import Style from './Style.css'
import movie from './img/movie.png'
import { Link, useNavigate } from "react-router-dom";

import { useState } from 'react';
import api from '../../api';

function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  async function handlerLogin(event){
    event.preventDefault();
    try{
        const dados = {
            email,
            password
        };
        const response = await api.post('/login', dados);

        alert(`Login bem sucedido, bem vindo ${email}`);
        // setEmail('');
        // setPassword('');
        // setUserName('');

        sessionStorage.setItem("login", true)

        navigate("/home")
    }   catch(error){
        alert(`Login não realizado`)
    }


}


    return(
      <form>
        <div>

          <div class="content">

             <div class="input">
             <input type="text" placeholder="digite seu email" id="email" value={email}
              onChange={e => setEmail(e.target.value)} required></input>

             <input type="password" placeholder="digite sua senha" id="senha" value={password}
              onChange={e => setPassword(e.target.value)} required></input>

             <button onClick={handlerLogin}>
                Login
              </button>
                <Link to='cadastro'>
                  <button>
                      Cadastrar 
                  </button>
                </Link>
              
             </div>
           </div>

        </div>
      </form>
    )
}

export default Login