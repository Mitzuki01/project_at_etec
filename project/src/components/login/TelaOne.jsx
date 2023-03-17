import React from "react";
import Style from './Style.css'
import movie from './img/movie.png'
import { Link } from "react-router-dom";

import { useState } from 'react';
import api from '../../api';

function Login(){

  const [email, setEmail] = useState('');
  // const [senha, setPassword] = useState('');

  async function handlerLogin(event){
    event.preventDefault();
    try{
        const dados = {
            email
        };
        const response = await api.post('/login', dados);

        alert(`Login bem sucedido, bem vindo ${email}`);
       // alert(response.data.message);

        // setEmail('');
        // setPassword('');
        // setUserName('');
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
               <br/>
             {/* <input type="password" placeholder="insira sua senha" id="password" value={senha} */}
              {/* onChange={e => setPassword(e.target.value)} required></input> */}
               <br/>
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